// src/components/Switch.jsx
import React from "react";
import PropTypes from 'prop-types';
import styles from "./Switch.module.scss";


const Switch = ({ label, id, className, checked=false, disabled=false, onChange, ...props}) => {

    //id 값 없을 경우 임의 지정
    const inputId = id || `switch-${Math.random().toString(36).slice(2, 11)}`;

    return (
        <div className={ `${styles.switch_wrap}${className ? ` ${className}` : ``}${disabled ? ` ${styles.is_disabled}` : ``}` }>
            <input type="checkbox" 
                id={inputId}
                checked={checked}
                disabled={disabled}
                onChange={onChange}
                role="switch"
                {...props} />                
            <label className={styles.label_wrap} htmlFor={inputId}>
                <span className={styles.label_track}></span>
                {label && <span className={styles.label_txt}>{label}</span>}
            </label>
        </div>
    )
}


// [전달값]
// - label: 제목
// - id : 고유id값
// - className : 전역 스타일 확장용
// - checked : 체크여부 (true/false)
// - required : required 여부 (true/false)
// - disabled : 사용불가 여부 (true/false)
// - onChange : 클릭이벤트
// props ====
// - name: input name
// - value : 내용

Switch.propTypes = {
    label: PropTypes.string.isRequired, //제목 (필수)
    id: PropTypes.string,
    className: PropTypes.string,
    checked: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,

    //props (input 내 선언요소)
    name:PropTypes.string, //input check name
    value:PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

// 기본값
Switch.defaultProps = {
    label: "Switch",
    onChange: () => {},
    className: '',
};

export default Switch;