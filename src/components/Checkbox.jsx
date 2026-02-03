// components/Checkbox.jsx
import styles from "./Checkbox.module.scss";

// [전달값]
// - label: 입력창 위의 제목
// - checked: check여부 (true/false)
// - disabled : 사용불가 여부 (true/false)
 // - onChange :  event change
// props ====
// - name: input name
// - value : 값
// - id : 고유id값
// - disabled : 사용불가 여부 (true/false)
// - readonly : readonly 여부 (true/false)
// - required : required 여부 (true/false)

const Checkbox = ({label, checked, disabled, ...props}) => {
    return (
        <div className={styles.check_wrap}>
            <div className={styles.checkItem}>
                <input type="checkbox" checked={checked} disabled={disabled} {...props} />
                <label htmlFor={props.id}>
                    <span>{label}</span>
                </label>
            </div>
        </div>
    );
}

export default Checkbox;