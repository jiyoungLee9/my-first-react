/* src/components/Toast.jsx */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Toast.module.scss';

/* ### 일괄 제안 소스로 작성 중 */

/**
 * UX 진행
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
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      // Cleanup: 컴포넌트가 사라지거나 재실행될 때 타이머 제거 (메모리 누수 방지)
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration, onClose]);

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

Toast.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'info']),
  duration: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default Toast;



