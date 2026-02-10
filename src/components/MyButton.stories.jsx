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
        variant :  { control: 'text' },
        className: { control: 'text' },
        disabled : {control : "boolean"},
        onClick: { action: 'clicked' } // 클릭 시 로그 찍히게 설정
    },
};

// 2. 스토리 정의 (케이스 만들기)

// 기본 케이스
export const Default = {
    args:{
        // props.label에 들어갈 값
        label:'기본 버튼 (variant 없음)',
        disabled:false,
        className:""
    },
};

export const Default_sm = {
    args:{
        // props.label에 들어갈 값
        label:'기본 버튼 (variant 없음) sm',
        size : 'sm',
        disabled:false,
        className:""
    },
};


export const Default_lg = {
    args:{
        // props.label에 들어갈 값
        label:'기본 버튼 (variant 없음) lg',
        size : 'lg',
        disabled:false,
        className:""
    },
}

// 중요 버튼
export const Primary = {
    args:{
        label:'중요(primary) 버튼',
        variant : 'primary',
        disabled:false,
        className:""
    },
};

// 서브 케이스
export const Sub = {
    args:{
        // props.label에 들어갈 값
        label:'서브(sub) 버튼',
        variant : 'sub',
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

