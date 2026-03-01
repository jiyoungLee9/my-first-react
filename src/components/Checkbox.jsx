// components/Checkbox.jsx
import PropTypes from 'prop-types';
import styles from "./Checkbox.module.scss";

const Checkbox = ({label, checked, disabled, className, ...props}) => {    
    return (
        <div className={`${styles.check_wrap}${className ? ` ${className}` : ''}`}>
            <div className={styles.checkItem}>
                <input type="checkbox" checked={checked} disabled={disabled} {...props} />
                <label htmlFor={props.id}>
                    <span>{label}</span>
                </label>
            </div>
        </div>
    );
}

// [전달값]
// - label: 입력창 위의 제목
// - checked: check여부 (true/false)
// - disabled : 사용불가 여부 (true/false)
// - onChange :  event change
// - className : 스타일 확장용 (최상위)
// props ====
// - name: input name
// - value : 값
// - id : 고유id값
// - readOnly : readonly 여부 (true/false)
// - required : required 여부 (true/false)

Checkbox.propTypes = {
    label : PropTypes.string.isRequired, //label (필)
    checked : PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,

    //...props
    name : PropTypes.string,
    value : PropTypes.string,
    id : PropTypes.string,
    readOnly : PropTypes.bool,
    required : PropTypes.bool
};

// 기본값
Checkbox.defaultProps = {
    label: "체크박스",
    name : "checkbox_sample1",
    id : "checkbox_sample1",
    onChange: () => {},
    className: '',
};

export default Checkbox;