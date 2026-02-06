// src/components/Switch.stories.jsx
import React, { useState, useEffect } from 'react';
import Switch from './Switch';


export default {
    title: 'Components/Switch',
    component: Switch,
    tags: ['autodocs'],   
    argTypes: {
        label: { control: 'text' },
        id: { control: 'text' },
        className: { control: 'text' },
        checked: { control: 'boolean' },
        disabled: { control: 'boolean' },
        onChange: { action: 'changed' },
        name: { control: 'text' },
        value: { control: 'text' }, 
    },    
};

// Checkbox 때와 동일한 "제어 컴포넌트 테스트용" 템플릿
const UI_Template = (args) => {
    const [isChecked, setIsChecked] = useState(args.checked);

    useEffect(() => {
        setIsChecked(args.checked);
    }, [args.checked]);

    const handleChange = (e) => {
        setIsChecked(e.target.checked);
        args.onChange(e); // Actions 패널에 로그 출력
    }

    return (
        <Switch {...args} checked={isChecked} onChange={handleChange} />
    )
}



export const Default = {
    args: {
        label: 'Switch 기본',
        id: 'switch1',
    },
    render: (args) => <UI_Template {...args} />, // 제어 컴포넌트 템플릿 사용
};

export const Checked = {
    args: {
        label: 'Switch 옵션 (체크됨)',
        id: 'switch2',
        checked: true,
    },
    //render: (args) => <UI_Template {...args} />,
};

export const Disabled= {
    args : {
        label : "Switch 옵션 (비활성화)",
        id: "switch3",
        disabled: true,
    },
    //render: (args) => <UI_Template {...args} />,
}

// 개발자가 style을 덮어쓰거나 margin을 줄 때 테스트
export const WithCustomClass = {
    args: {
        label: 'Switch 커스텀 스타일',
        checked: false,
        className: 'mgt16', // margin-top:1.6rem 적용
        // style: { border: '1px solid red' } // 인라인 스타일 예시 (input 자체는 css에서 이미 적용하지 아니함)
    },
    render: (args) => <UI_Template {...args} />,
};