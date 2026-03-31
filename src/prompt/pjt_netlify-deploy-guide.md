# Netlify 배포 가이드 (React + Vite + Storybook)

> GitHub 저장소의 Storybook을 Netlify 무료 호스팅으로 배포하는 전체 과정과 유의사항을 정리한 매뉴얼입니다.

---

## 1. 사전 준비

### 1-1. package.json 스크립트 확인

`package.json`에 아래 명령어가 반드시 있어야 합니다.

```json
"scripts": {
  "build-storybook": "storybook build"
}
```

### 1-2. 빌드 결과물 폴더 확인

로컬에서 빌드 테스트를 먼저 실행합니다.

```bash
npm run build-storybook
```

성공 시 프로젝트 루트에 `storybook-static/` 폴더가 생성됩니다.
이 폴더가 Netlify에 서빙될 결과물입니다.

---

## 2. Netlify 초기 설정

### 2-1. 저장소 연결

1. [https://app.netlify.com](https://app.netlify.com) 접속 후 GitHub으로 로그인
2. **`Import a Git repository`** 섹션에서 **`GitHub`** 버튼 클릭
3. **`Install Netlify`** 팝업에서 **`Only select repositories`** 선택 (보안상 권장)
4. 배포할 저장소 선택 후 **`Install`** 클릭

### 2-2. 빌드 설정 (핵심)

저장소 선택 후 나오는 설정 화면에서 아래와 같이 입력합니다.

| 항목 | 입력값 | 비고 |
|------|--------|------|
| **Branch to deploy** | `main` | 기본 브랜치 |
| **Base directory** | (비워두기) | |
| **Build command** | `npm run build-storybook` | |
| **Publish directory** | `storybook-static` | 빌드 결과물 폴더명 |
| **Functions directory** | (비워두기) | 서버리스 함수 미사용 시 불필요 |

> ⚠️ **Publish directory**를 정확히 입력하는 것이 핵심입니다.

### 2-3. 배포 시작

**`Deploy`** 버튼 클릭 → 빌드 로그 실시간 확인 → `Site is live` 메시지 확인

---

## 3. 배포 후 관리

### 3-1. 자동 재배포

Netlify는 연결된 GitHub 저장소에 `push`가 들어오면 **자동으로 재배포**됩니다.
별도 작업 없이 아래 명령어만 실행하면 됩니다.

```bash
git add .
git commit -m "커밋 메시지"
git push
```

### 3-2. 수동 재배포

이미 push된 상태에서 재배포가 필요한 경우:

**Netlify 대시보드** → **`Deploys`** 탭 → **`Trigger deploy`** → **`Deploy site`** 클릭

---

## 4. 트러블슈팅

### ❌ Could not resolve "./ComponentName"

**원인**: stories 파일이 존재하지 않는 컴포넌트를 import하고 있음

- 로컬(Windows)에서는 에러 표시만 되고 실행되지만 Netlify(Linux)는 엄격하게 빌드 중단
- 해당 컴포넌트 파일이 실제로 존재하는지 확인
- 미완성 컴포넌트라면 stories 파일을 삭제하거나 주석 처리

---

### ❌ 파일명 대소문자 문제 (Windows Git 필수 주의사항)

**원인**: Windows의 Git은 기본적으로 파일명 대소문자 변경을 감지하지 못함

- 로컬에서는 정상 작동하지만 Netlify(Linux)는 대소문자를 엄격히 구분
- 예: `radioGroup.jsx` ≠ `RadioGroup.jsx`

**해결 방법**:

```bash
# 1. Git 대소문자 구분 설정 (프로젝트 단위 적용)
git config core.ignorecase false

# 2. Git 캐시에서 파일 제거
git rm --cached src/components/radioGroup.jsx

# 3. 올바른 파일명으로 다시 추가
git add src/components/RadioGroup.jsx

# 4. 커밋 & 푸시
git commit -m "fix: 파일명 대소문자 수정"
git push
```

> ⚠️ `core.ignorecase false` 설정 후에는 파일명 대소문자에 주의하여 작업합니다.
> 이 설정은 전역이 아닌 **현재 프로젝트에만** 적용됩니다.

---

### ⚠️ DEPRECATION WARNING [if-function] (SCSS)

```
DEPRECATION WARNING: The Sass if() syntax is deprecated in favor of the modern CSS syntax.
```

**현재 상태**: 경고(WARNING)이며 빌드 실패 원인이 아님. 당장 수정하지 않아도 됩니다.

**향후 수정 방향** (Sass 최신 문법):

```scss
// ❌ 기존 문법 (deprecated)
$duration: if($speed == fast, $ref-duration-fast, $ref-duration-normal);

// ✅ 새로운 문법
$duration: if(sass($speed == fast): $ref-duration-fast; else: $ref-duration-normal);
```

---

### ❌ not under version control

```
fatal: not under version control, source=...
```

**원인**: 해당 파일이 Git에 한 번도 추가된 적 없는 상태

**해결 방법**:

```bash
git add src/components/파일명.jsx
git commit -m "fix: 파일 Git 추적 추가"
git push
```

---

## 5. 컴포넌트 코드 유의사항

### Props 구조 — `...rest` 패턴 권장

input 계열 컴포넌트에서 `name`, `id`, `disabled` 등 HTML 속성을 별도 객체(`props`)로 묶어 전달하면 Netlify 빌드 시 에러가 발생할 수 있습니다.

```jsx
// ❌ 잘못된 패턴
const RadioGroup = ({ grpName, itemList, props }) => {
  return <input name={props.name} id={props.id} />;
};

// ✅ 권장 패턴 — ...rest로 나머지 수집
const RadioGroup = ({ grpName, itemList, className = '', onChange, ...rest }) => {
  return <input {...rest} id={`${rest.id}${index}`} />;
};
```

Storybook stories 파일도 flat하게 전달해야 합니다.

```jsx
// ❌ 잘못된 패턴
args: {
  props: { name: 'selectA', id: 'selectA' }
}

// ✅ 권장 패턴
args: {
  name: 'selectA',
  id: 'selectA',
}
```

---

## 6. 참고 링크

- [Netlify 공식 문서](https://docs.netlify.com)
- [Storybook 빌드 공식 문서](https://storybook.js.org/docs/sharing/publish-storybook)
- [Sass if() 함수 deprecation 안내](https://sass-lang.com/d/if-function)
- [Netlify 빌드 exit code 안내](https://ntl.fyi/exit-code-2)
