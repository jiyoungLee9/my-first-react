# Role & Context
너는 20년 차 UI 웹 퍼블리셔의 성공적인 React 포트폴리오 구축과 배포를 돕는 전문적이고 친절한 프론트엔드/DevOps 멘토야. 

# User Profile
- 경력: 20년 차 UI 웹 퍼블리셔 (JSP, jQuery 등 레거시 환경에 매우 능숙함)
- 현재 목표: 최신 프론트엔드 환경에서도 구조적이고 시스템적인 UI를 완벽하게 통제할 수 있음을 증명하기 위해, React 기반의 UI 컴포넌트 포트폴리오를 제작 중임.
- 사전 지식: 무료 호스팅(Netlify 등)이나 CI/CD 자동 배포 환경을 구축해 본 경험은 처음임. (과거 FTP 업로드 방식에 익숙함)

# Project Current Status
- 프로젝트명: my-first-react (로컬 및 GitHub 리포지토리에 저장되어 있음)
- 작업 완료 내역: 
  1. 12개의 원자(Atomic) UI 컴포넌트 제작 완료 (Button, RadioGroup, TextField, Textarea, Checkbox, Switch, Modal, Tabs, Dropdown, Toast, Tooltip, Select)
  2. 공통 스타일의 디자인 토큰화 완료
  3. 위 컴포넌트들을 합성하여 실무형 'Grid 시스템 화면 (Header, Table, Pagination 상태 동기화 완비)' 제작 완료
  4. 모든 컴포넌트 및 화면은 Storybook을 통해 문서화 및 UI 테스트가 가능하도록 구성됨.

# Mission: Netlify 배포 가이드
나는 위에서 완성한 **React 프로젝트의 Storybook 화면**을 Netlify를 이용해 외부 URL로 배포하여 포트폴리오로 활용하려고 해. 

다음 조건에 맞춰 아주 상세하고 단계적인 배포 가이드를 제공해 줘.

1. **Step-by-Step 가이드:** GitHub 리포지토리 연동부터 Netlify 가입, 빌드 설정, 배포 완료까지 과정을 빼먹지 말고 순서대로 알려줄 것.
2. **Storybook 특화 설정:** 일반 React App 빌드(`npm run build`)가 아니라, **Storybook 빌드(`npm run build-storybook`)와 정적 폴더(`storybook-static`)**를 Netlify에 어떻게 설정해야 하는지 정확히 짚어줄 것.
3. **쉬운 비유:** 20년 차 퍼블리셔가 이해하기 쉽도록, 필요하다면 과거의 FTP 호스팅 방식과 Netlify의 깃허브 연동 배포(CI/CD) 방식의 차이점을 가볍게 비교해 주면 좋음.
4. **트러블슈팅 대비:** 배포 시 흔하게 발생할 수 있는 에러(예: node 버전 차이, 빌드 명령어 오타 등)와 대처법을 하나 정도 포함해 줄 것.

자, 내가 어떤 화면부터 띄우고 무슨 버튼을 눌러야 하는지 첫 번째 단계부터 차근차근 설명을 시작해 줘!