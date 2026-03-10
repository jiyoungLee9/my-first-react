// src/components/Dropdown.stories.jsx

/* ### 일괄 제안 소스로 작성 중 */

import React, { useState } from 'react';
import Dropdown from './Dropdown';

export default {
    title: 'Components/Dropdown',
    tags: ['autodocs'],
    component: Dropdown,
};

const mockOptions = [
    { label: 'HTML5', value: 'html' },
    { label: 'CSS3', value: 'css' },
    { label: 'JavaScript', value: 'js' },
    { label: 'React.js', value: 'react' },
];

export const Default = {
    render: (args) => {
        const [selectedValue, setSelectedValue] = useState('');
        
        return (
            <div style={{ height: '200px' }}> {/* 드롭다운 공간 확보 */}
                <Dropdown
                    {...args}
                    value={selectedValue}
                    onSelect={(option) => setSelectedValue(option.value)}
                />
                <p style={{ marginTop: '20px', fontSize:'16px' }}>선택된 값: <strong>{selectedValue}</strong></p>
            </div>
        );
    },
        args: {
        options: mockOptions,
        placeholder: '기술 스택 선택',
    },
};

export const Disabled = {
  args: {
    options: mockOptions,
    disabled: true,
    placeholder: '비활성화된 상태',
  },
};