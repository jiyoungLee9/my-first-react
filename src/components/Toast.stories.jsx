// src/components/Toast.stories.jsx

/* ### 일괄 제안 소스로 작성 중 */

import React, { useState } from 'react';
import Toast from './Toast';
import Button from './Button';

export default {
    title: 'Components/Toast',
    tags: ['autodocs'],
    component: Toast,
};

export const Default = {
    render: (args) => {
        const [isOpen, setIsOpen] = useState(false);
        const [type, setType] = useState('info');

        const showToast = (toastType) => {
            setType(toastType);
            setIsOpen(true);
        };

        return (
            <div style={{ display: 'flex', gap: '10px' }}>
            <Button onClick={() => showToast('success')} label="성공 알림"></Button>
            <Button onClick={() => showToast('error')} className="danger" label="에러 알림"></Button>
            <Button onClick={() => showToast('info')} label="정보 알림"></Button>

            <Toast 
                {...args} 
                isOpen={isOpen} 
                type={type} 
                onClose={() => setIsOpen(false)} 
                message={type === 'success' ? '저장에 성공했습니다!' : '문제가 발생했습니다.'}
            />
            </div>
        );
    },
};