# [Project Context] React UI Component Portfolio

## 1. 프로젝트 개요
- 사용자: JSP/jQuery 환경에 익숙한 웹퍼블리셔 (React 전환 학습 중)<br />
- 목표: 실무 레벨의 UI 컴포넌트 12개를 제작하고 Storybook으로 문서화<br />
- 학습 스타일: JSP/jQuery와 React의 차이점을 비교하며 이해하는 것을 선호<br />
- 단순 예제가 아닌, 실무 개발자가 바로 쓸 수 있는(Production-ready) 수준의 코드 지향<br />

## 2. 개발 환경
- OS/Tool: Windows 11, VS Code, Node.js<br />
- Framework: Vite 기반 React 프로젝트<br />
- Styling: SCSS Modules (*.module.scss)<br />
- vite.config.js를 통해 전역 변수($)와 믹스인(@mixin) 자동 주입 설정됨<br />
- Documentation: Storybook v8<br />
- 구조: Component.jsx + Component.module.scss + Component.stories.jsx (1세트)<br />

## 3. 핵심 코딩 규칙 (Conventions) ✨
다음 7가지 규칙을 철저히 준수하여 컴포넌트를 설계함.<br />

1. 실무 지향: 개발자가 로직을 연결하기 편하도록 View 역할에 충실 (데이터/API 분리).<br />
2. Props 네이밍:<br />
- Boolean 속성: is... 접두사 사용 (예: isOpen, isLoading)<br />
- 예외: HTML 표준 속성(checked, disabled, required)은 표준 명칭 그대로 사용.<br />
3. 이벤트 네이밍: on... 접두사 사용 (예: onClick, onChange).<br />
4. 확장성: className Props를 항상 받아 내부 스타일과 병합(classNames 또는 템플릿 리터럴).<br />
5. 웹접근성(A11y): id, htmlFor, role, aria-* 속성을 적절히 사용하여 접근성 준수.<br />
6. 안전성: Default Value를 설정하여 Props가 없어도 UI가 깨지지 않도록 방어.<br />
7. 상태 관리:<br />
- Form 요소 (Input, Checkbox 등): 철저한 제어 컴포넌트 (Props로 상태 받음).<br />
- UI 동작 (Modal, Tabs 등): 필요시 내부 상태(useState) 사용 허용하나, 기본적으로 외부 제어 가능하도록 설계.<br />

## 4. 코드 스타일 레퍼런스<br />
### Component.jsx (구조 예시)<br />

import styles from './Component.module.scss';

const Component = ({ 
  id, 
  label, 
  isActive, // is 접두사 
  disabled, // 표준 속성 예외
  className = '', 
  ...props 
}) => {
  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''} ${className}`} {...props}>
      {/* 접근성 준수 */}
      <span id={id} className="sr-only">{label}</span>
      {/* ... 구현 내용 ... */}
    </div>
  );
};
export default Component;

### Component.stories.jsx (Storybook 예시) <br />

// 인터랙션 확인을 위해 useState를 템플릿 내부에서 사용
const Template = (args) => {
  const [val, setVal] = useState(args.value);
  // ... useEffect로 args 동기화 ...
  return <Component {...args} value={val} onChange={setVal} />;
};