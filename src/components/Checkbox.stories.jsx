// components/Checkbox.stories.jsx
//react 표준 사용
import React, { useState, useEffect } from 'react';

import Checkbox from "./Checkbox" ;

//storybook 전용 훅 (클릭 동작을 흉내 내기 위한 훅)
// import { useArgs } from "@storybook/preview-api";  

export default {
    title : "Components/Checkbox",
    component: Checkbox,
    tags: ['autodocs'],
    argTypes : {
        label : { control: "text"},
        checked : {control : "boolean"},
        disabled : {control : "boolean"},
        className : {control : "text"},
        onchange : {action : "changed"}     
    }
};

//react 표준 useState 사용 시
const UI_Template = (args) => {
    // 1. 스토리북 컨트롤(args.checked)을 초기값으로 하는 '내부 상태' 생성
    const [isChecked, setIsChecked] = useState(args.checked);

    // 2. 스토리북에서 컨트롤(Knobs)을 조작했을 때, 상태도 같이 업데이트되도록 감지
    useEffect(() => {
        setIsChecked(args.checked);
    }, [args.checked]);  
    
    // 3. 실제 컴포넌트 렌더링
    return (
        <Checkbox
        {...args}            // 라벨, disabled 등 나머지 속성 전달
        checked={isChecked}  // 상태를 컴포넌트에 주입
        onChange={(e) => {
            setIsChecked(e.target.checked); // 클릭 시 상태 업데이트 (화면 갱신)
            args.onChange(e); // 스토리북 Actions 패널에 로그 남기기
        }}
        />
    ); 
};

export const Default = {
    args : {
        label: "이용약관에 동의합니다.", 
        checked:false, 
        disabled:false,
        name: "checkbox_name1",
        id:"checkbox_id1",
        value:"agree",
        onchange: () => {}
    },
    render : (args) => <UI_Template {...args} />,
    // Storybook에서 클릭했을 때 실제로 체크가 바뀌는 것처럼 보이게 하는 설정
    /* storybook 전용 훅 사용 시
    render: function Render(args) {
        const [{ checked }, updateArgs] = useArgs(); 

        function check_onChange() {
            updateArgs({ checked: !checked }); // 반대 값으로 업데이트
        }
        return <Checkbox {...args} onChange={check_onChange} checked={checked} />;
    }, 
    */    
};

export const Checked = {
    args : {
        label: "이용약관에 동의합니다. (체크됨)", 
        checked:true, 
        disabled:false,
        name: "checkbox_name3",
        id:"checkbox_id3",
        value:"agree",
        onchange: () => {}
    }
};


export const Disabled = {
    args : {
        label: "이용약관에 동의합니다. (비활성화)", 
        checked:true, 
        disabled:true,
        name: "checkbox_name2",
        id:"checkbox_id2",
        value:"agree",
        onchange: () => {}
    }
};

