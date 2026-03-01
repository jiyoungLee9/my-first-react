/* src/components/Toast.jsx */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Toast.module.scss';

/**
 * UX 진행
 * 화면기준 우측 위치에 body 태그에 노출 후 사라짐 (Toast 외부 또는 x버튼 클릭 시 사라짐)
 */

const Toast = ({
    isOpen = false,
    message,
    type = 'info', // success, error, info
    duration = 3000, // 3초 뒤 자동 종료
    onClose,
}) => {

  // 1. 자동 종료 타이머 (Side Effect 처리)
  useEffect(() => {
    if (isOpen) {

        //타이머
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        // Cleanup: 컴포넌트가 사라지거나 재실행될 때 타이머 제거 (메모리 누수 방지)
        return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]); //열림, 자동종료시간, 닫힐 때 작동됨

  if (!isOpen) return null;

  // 2. Portal 생성 위치 지정
  const toastRoot = document.getElementById('toast-root') || document.body;

  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
        <div 
            className={`${styles.toast} ${styles[type]}`}
            role="alert" // 중요: 스크린 리더가 즉시 읽어줌
            aria-live="assertive"
        >
            <span className={styles.message}>{message}</span>
            <button 
                type="button" 
                className={styles.closeButton} 
                onClick={onClose}
                aria-label="닫기"
            >
                &times;
            </button>
        </div>
    </div>,
    toastRoot
  );
};

// [전달값]
// - isOpen: 열림여부 (true/false)
// - message : 토스메세지
// - type : 토스타입 (success, error, info) : 성공, 에러, 알림
// - duration : 유지시간
// - onClose : 닫기 이벤트

Toast.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['success', 'error', 'info']),
    duration: PropTypes.number,
    onClose: PropTypes.func.isRequired,
};

export default Toast;



