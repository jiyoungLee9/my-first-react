// src/components/MyButton.jsx
// @ts-ignore
import styles from './MyButton.module.scss';

// [전달값]
// props ====
// - label: 버튼텍스트
// - className : (전역) 스타일 확장용
// - disabled : 사용불가 여부 (true/false)
// - onClick : 클릭이벤트

const sampleButton = (props) => {
    return (    
        <button className={ `${styles.btn}${props.className ? ` ${props.className}` : ``}` }  onClick={props.onClick} {...(props.disabled !== undefined && { disabled: props.disabled })}>
            <span className={styles.btn_txt}>{props.label}</span>
        </button>        
    );
};

export default sampleButton;
