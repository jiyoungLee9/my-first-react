// src/components/MyButton.jsx
// @ts-ignore
import styles from './MyButton.module.scss';

// [전달값]
// props ====
// - label: 버튼텍스트
// - className : (전역) 스타일 확장용
// - variant : btn class 정의용 (btn_primary, btn_sub)
//              .btn_primary : primary / .btn_sub : sub / 미지정 시 .btn 정의됨
// - size : 버튼 사이즈 (.size_sm / .size_lg)
// - disabled : 사용불가 여부 (true/false)
// - onClick : 클릭이벤트

const Button = (props) => {
    //버튼 종류 class .btn_primary / .btn_sub  / (미지정 시 기본 버튼 .btn)    
    const variantClass = styles[`btn_${props.variant}`] || styles.btn;

    //버튼 size class .size_sm / .size_lg
    const sizeClass = styles[`size_${props.size}`] || '';

    //버튼 class 종합
    const buttonClass = [variantClass, sizeClass]
        .filter(Boolean)
        .join(' ');    

    return (    
        <button className={ `${buttonClass}${props.className ? ` ${props.className}` : ``}` }  onClick={props.onClick} {...(props.disabled !== undefined && { disabled: props.disabled })}>
            <span className={styles.btn_txt}>{props.label}</span>
        </button>        
    );
};

export default Button;
