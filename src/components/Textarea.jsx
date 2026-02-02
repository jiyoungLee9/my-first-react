// src/components/Textarea.jsx
import styles from './Textarea.module.scss';

// [전달값]
// - label: 입력창 위의 제목
// - error: 에러 발생 여부 (true/false)
// - errorMsg : 에러 메세지
// props ====
// - name: input name
// - id : 고유id값
// - rows : 값 (number)
// - cols : 값 (number)
// - value : 내용
// - maxLength : 최대값 (number)
// - required : required 여부 (true/false)
// - disabled : 사용불가 여부 (true/false)

const Textarea = ({ label, error, errorMsg, props}) => {
    return (
        <div className={ `${styles.textarea_wrap} ${ error === true ? styles.is_error : ""}` }>
            <div className={styles.textarea_label}>
                <label htmlFor={props.id} className={props.required === true ? styles.is_req : ""}>{label}</label>
                {
                    //<label htmlFor={props.id} className={props.required === true ? styles.is_req : ""}>{label}</label>
                }
            </div>
            <textarea {...props} />
            { error == true && errorMsg.length > 0  && (
                <p className={styles.msg_error}>{errorMsg}</p>
            )}

        </div>
    )
}

export default Textarea;