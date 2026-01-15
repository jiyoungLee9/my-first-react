// src/components/MyButton.jsx
// @ts-ignore
import styles from './MyButton.module.scss';

const sampleButton = (props) => {
    return (
        //className 'MyButton.module.scss' 에 선언된 .btn, .btn_txt를 이용해서 style 적용
        <button className={styles.btn} onClick={props.onClick}>
            <span className={styles.btn_txt}>{props.label}</span>
        </button>        
    );
};

export default sampleButton;
