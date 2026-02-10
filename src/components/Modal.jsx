// src/components/Modal.jsx
import React, { useEffect }  from "react";
import { createPortal }  from "react-dom";
import styles from './Modal.module.scss';

// [전달값]
// props ====
// - isOpen : modal 오픈여부 (true/false)
// - title :  modal 제목
// - content : modal 내용
// - footer :  modal 하단 버튼
// - className : 스타일 확장용 (최상위)
// - onClose : modal 닫기이벤트 
// ...props : 기타

const Modal = ({
    isOpen, title, content, footer, className, onClose, ...props
}) => {

    // 1. 모달이 열려있을 때 body 스크롤 막기 (필수!)
    // .is_modal_open 사용
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

    // 3. Portal을 이용해 document.body 바로 아래에 렌더링
    return createPortal(
        <div className={styles.modal_wrap}>
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
                    {content}
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

export default Modal;