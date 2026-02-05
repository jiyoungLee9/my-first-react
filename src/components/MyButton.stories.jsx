// src/components/MyButton.stories.jsx
import MyButton from './MyButton';

// 1. 메타 정보: 이 컴포넌트가 스토리북 어디에 위치할지 정의
export default {
    title: 'Components/MyButton', // 사이드바 메뉴 이름 (Components 폴더 아래 MyButton)
    component: MyButton,          // 연결할 컴포넌트
    tags: ['autodocs'],           // 문서 자동 생성 기능
    // 컴포넌트의 props 타입을 정의하면 컨트롤러가 생깁니다 (선택 사항)
    argTypes: {
        label: { control: 'text' },
        className: { control: 'text' },
        disabled : {control : "boolean"},
        onClick: { action: 'clicked' } // 클릭 시 로그 찍히게 설정
    },
};

// 2. 스토리 정의 (케이스 만들기)

// 기본(Primary) 케이스
export const Default = {
    args:{
        // props.label에 들어갈 값
        label:'기본 버튼',

        disabled:false,
        className:""
    },
};

// Disabled
export const Disabled = {
    args: {
        label: 'Disabled 선언이 된 버튼',
        disabled : true,
    },
};

