// src/components/TextField.jsx
import styles from './TextField.module.scss';

// [전달값]
// - label: 입력창 위의 제목
// - error: 에러 발생 여부 (true/false)
// - errorMsg : 에러 메세지
// props ====
// - name: input name
// - type : input type
// - value : 값
// - id : 고유id값
// - placeholder : placeholder
// - disabled : 사용불가 여부 (true/false)
// - readonly : readonly 여부 (true/false)
// - required : required 여부 (true/false)
// - onChange :  event change

const TextField = ({ label, error, errorMsg, props}) => {
    return (
        <div className={ `${styles.inp_wrap} ${ error === true ? styles.is_error : ""}` }>
            <div className={styles.inp_label}>
                <label htmlFor={props.id} className={props.required === true ? styles.is_req : ""}>{label}</label>
            </div>
            {
                //기존에 속성값 길게 정의하는 것을 ...(스프레드) 연산으로 처리하함
                //<input type={props.type} name={props.name} id={props.id} value={props.value} placeholder={props.placeholder} disabled={props.disabled} readOnly={props.readonly} required={props.required} onChange={props.onChange}  />
            }
            <input  {...props}  />
            {
                // error
                // css로 처리하지 않고, 정확히 값에 의해 처리되도록 정의함
            }
            { error == true && errorMsg.length > 0  && (
                <p className={styles.msg_error}>{errorMsg}</p>
            )}

        </div>
    )
}

export default TextField;