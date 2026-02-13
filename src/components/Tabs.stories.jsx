// src/components/Tabs.stories.jsx

import React from 'react';
import Tabs from "./Tabs";

export default {
    title: 'Components/Tabs',
    component: Tabs,
    parameters: {
        layout: 'padded',
    },
};

const sampleContent = [
    {
        label : "Tab 1", 
        content : <div>첫번째 탭 내용이 나옵니다.</div>
    },
    {
        label : "Tab 2", 
        content : <div>두번째 탭 내용이 나옵니다.<br/>두번째 탭 내용입니다.</div>
    },
    {
        label : "Tab 3 disabled처리", 
        content : <div>세번째 탭 내용입니다. tab버튼은 disabled처리가 되었습니다.<br/>세번째 탭 내용이 나옵니다..</div>,
        isDisabled : true,
    },
    {
        label : "Tab 4", 
        content : <div>네번째 탭 내용이 나옵니다.</div>
    },            
];

//기본
export const Default = {
    args: {
        items: sampleContent,
        defaultIndex: 0,
        onChange: (index) => console.log(`${index + 1}번째 탭 클릭됨`),
    },    
}

//content직접처리 tab
export const ComplexContent = {
    args: {
        items: [
            { 
                label: '프로필', 
                content: <div style={{padding: '20px', background: '#f5f5f5'}}>사용자 정보 페이지</div> 
            },
            { 
                label: '설정', 
                content: <button type="button" onClick={() => alert('설정 변경')}>설정 변경하기</button> 
            },
        ],
    },
}