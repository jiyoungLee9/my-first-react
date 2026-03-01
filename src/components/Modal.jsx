// src/components/Modal.jsx
import React, { useEffect }  from "react";
import PropTypes from 'prop-types';
import { createPortal }  from "react-dom";
import styles from './Modal.module.scss';

/**
 * UX 진행
 * <body> 태그 마지막에 .modal_wrap 을 생성함
 * .is_modal_open 을 통해서 열림 처리 정의 / .is_modal_open 삭제 시 컴포넌트 사라짐
 */

const Modal = ({
    isOpen, title, children, footer, className, onClose, ...props
}) => {

    // 1. 모달이 열려있을 때 body 스크롤 막기 (필수!)
    // body.is_modal_open
    useEffect(() => {
        if(isOpen){            
            document.body.classList.add('is_modal_open');
        }else{
            document.body.classList.remove('is_modal_open');
        }

        // 컴포넌트가 사라질 때(Unmount) 스크롤 복구 안전장치
        return () => {
            document.body.classList.remove('is_modal_open');
        };        
    }, [isOpen]);

    // 2. 모달이 닫혀있으면 아무것도 렌더링하지 않음
    if (!isOpen) return null;

    // 3. createPortal을 이용해 document.body 바로 아래에 렌더링
    return createPortal(
        <div className={styles.modal_wrap} onClick={onClose}> 
            <div 
                className={` ${styles.modal_inner}${className ? ` ${className}` : ``}`}
                onClick={(e) => e.stopPropagation()} //모달 내부 클릭 시 닫힘 방지
                role="dialog" aria-modal="true" aria-labelledby="modal-title" // 접근성
                {...props}
            >
                <header className={styles.m_header}>
                    <h2>{title}</h2>
                    <button type="button" className={styles.btn_close} onClick={onClose} aria-label="Close modal"> 
                        <span className="hdn">모달 닫기</span>
                    </button>
                </header>
                <main className={styles.m_body}>
                    {children}
                </main>
                {
                    // footer 있을 때만 노출
                }
                { footer &&  <footer className={styles.m_footer}>{footer}</footer> } 
            </div>
        </div>,
        document.body //modal 랜더링 위치
    );
}

// [전달값]
// props ====
// - isOpen : modal 오픈여부 (true/false)
// - title :  modal 제목
// - children : modal 내용 (react 기본예약어)
// - footer :  modal 하단 버튼
// - className : 스타일 확장용 (최상위)
// - onClose : modal 닫기이벤트 
// ...props : 기타

Modal.propTypes = {
    isOpen : PropTypes.bool,
    title : PropTypes.string.isRequired, //modal 제목 (필수)
    children : PropTypes.node.isRequired, //modal 컨텐츠 (필수)
    footer : PropTypes.node, //modal 하단버튼 (html 태그 정의)
    onClose : PropTypes.func, //modal 닫기이벤트 
    className: PropTypes.string,
};

// 기본값
Modal.defaultProps = {
    title: "Modal title",
    children : "Modal Contents",
    onClose: () => {},
    className: '',
};

export default Modal;