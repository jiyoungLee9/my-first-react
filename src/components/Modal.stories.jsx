// src/components/Modal.stories.jsx
import React, { useState } from 'react';
import Modal from './Modal';
import Button from './MyButton';

export default {
    title: 'Components/Modal',
    component: Modal,
    parameters: {
        layout: 'centered',
    },    
    tags: ['autodocs'],   
    argTypes: {
        isOpen: { control: 'boolean' },
        title: { control: 'text' },
        onClose: { action: 'closed' },
    },
}

// 모달을 열고 닫는 동작을 시뮬레이션하는 템플릿
const UI_Template = (args) => {
    const [isOpen, setIsOpen] = useState(false);    
    const openModal = () => { 
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
        args.onClose(); // Actions 패널 로그용
    }
    return (
        <div>
            {/* 1. 트리거 버튼 */}
            <Button onClick={openModal} label="모달열기"></Button>

            {/* 2. 모달 컴포넌트 */}
            <Modal 
                {...args} 
                isOpen={isOpen} 
                onClose={closeModal}
            >
                {/* content으로 전달되는 내용 */}
                <p>여기에 모달 본문 내용이 들어갑니다.</p>
                <p>JSP/jQuery보다 구조 잡기가 훨씬 명확하죠?</p>
            </Modal>
        </div>
    )
}

// Footer에 버튼이 있는 케이스 템플릿
const UI_FooterTemplate = (args) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return(
        <div>
            <Button onClick={openModal} label="삭제하기"></Button>

            <Modal 
                {...args} 
                isOpen={isOpen} 
                onClose={closeModal}
                title="정말 삭제하시겠습니까?"
                // Footer에 버튼 컴포넌트 조합
                footer={
                <>
                    <Button onClick={closeModal} className="btn_sub" label="취소"></Button>
                    <Button onClick={closeModal} label="삭제"></Button>
                </>
                }
            >
                <p>삭제된 데이터는 복구할 수 없습니다.</p>
            </Modal>
        </div>
    )
}

export const Default = {
    args: {
        title: '기본 모달',
    },
    render: (args) => <UI_Template {...args} />,
}

export const WithFooterButtons = {
  args: {
    // title은 템플릿 안에서 덮어씌워짐
  },
  render: (args) => <UI_FooterTemplate {...args} />,
};

export const LongContent = {
  args: {
    title: '스크롤 테스트',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}  label="긴 내용 보기" ></Button>
        <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {Array(20).fill(0).map((_, i) => (
            <p key={i}>내용이 길어지면 자동으로 스크롤이 생깁니다. 줄 {i + 1}</p>
          ))}
        </Modal>
      </div>
    )
  },
};