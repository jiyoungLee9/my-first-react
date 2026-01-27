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
        onClick: { action: 'clicked' } // 클릭 시 로그 찍히게 설정
    },
};

// 2. 스토리 정의 (케이스 만들기)

// 기본(Primary) 케이스
export const Default = {
    args: {
        label: '기본 버튼', // props.label에 들어갈 값
    },
};

// 긴 텍스트 케이스 (퍼블리싱 테스트용)
export const LongText = {
    args: {
        label: '텍스트가 매우매우 긴 버튼입니다',
    },
};