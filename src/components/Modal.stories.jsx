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

    //children 샘플 값
    const sampleContent = (
        <>
            <p>children 예약어로 지정된 하위 내용을 알아서 children 의 값으로 인지합니다. <br />&lt;Modal&gt; 태그 하위에 있는 태그는 children 값으로 인지합니다.</p>
            <p>여기에 모달 본문 내용이 들어갑니다.</p>
        </>
    )

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
            {/* 
                children 으로 전달되는 내용 
                - args.children 값 있 경우 args.children 값을 최우선 함
                - args.children 값 없을 경우 샘플 있음
            */}
                { args.children || sampleContent }
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
                    <Button onClick={closeModal} variant="sub" label="취소"></Button>
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

export const ChangeContents = {
    args: {
        title: '모달내용 변경되었습니다',

        //children 변경하여 작성
        children : (
            <>
                <p>UI_Template 에서 지정한 children 값을 강제로 변경해 봅니다.</p>
                <p>새롭게 변경한 모달 본문 내용이 들어갑니다.</p>   
            </>
        )
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