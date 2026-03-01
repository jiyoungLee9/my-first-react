// src/components/Select.stories.jsx

/* ### 일괄 제안 소스로 작성 중 */

import React, { useState } from 'react';
import Select from './Select';

export default {
    title: 'Components/Select',
    component: Select,
};

const fruitOptions = [
    { label: '사과', value: 'apple' },
    { label: '바나나', value: 'banana' },
    { label: '포도', value: 'grape' },
    { label: '오렌지', value: 'orange' },
];

export const Default = {
    render: (args) => {
        const [val, setVal] = useState('');
        return (
            <div style={{ width: '300px' }}>
            <Select {...args} value={val} onChange={(v) => setVal(v)} />
            <p style={{ marginTop: '40px', fontSize:'16px', lineHeight:'24px' }}>선택된 값: <strong>{val}</strong></p>
            </div>
        );
    },
    args: {
        label: '과일 선택',
        options: fruitOptions,
        placeholder: '좋아하는 과일을 골라보세요',
    },
};

export const ErrorState = {
  args: {
    label: '필수 선택 항목',
    options: fruitOptions,
    error: true,
    placeholder: '값을 선택하지 않았습니다',
  },
};


