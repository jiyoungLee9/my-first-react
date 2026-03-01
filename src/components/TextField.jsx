// src/components/TextField.jsx
import PropTypes from 'prop-types';
import styles from './TextField.module.scss';

const TextField = ({ label, error, errorMsg, className, props}) => {
    return (
        <div className={ `${styles.inp_wrap}${ className ? ` ${className}` : ""}${ error ? " " + styles.is_error : ""}` }>
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


// [전달값]
// - label: 입력창 위의 제목
// - error: 에러 발생 여부 (true/false)
// - errorMsg : 에러 메세지
// - className : 스타일 확장용 (최상위)
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

TextField.propTypes = {
    label: PropTypes.string, //입력창 위의 제목
    error:PropTypes.bool, //에러 표시 여부
    errorMsg:PropTypes.string, // error true 일때 필요한 메세지
    className: PropTypes.string,

    //props <input>요소 
    name:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired, // input type 정의 값
    id: PropTypes.string,
    value:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    required: PropTypes.bool,
    onChange : PropTypes.func, //change 이벤트
};

// 기본값
TextField.defaultProps = {
    label: "Input Text",
    type : "text",
    onChange: () => {},
    className: '',
};

export default TextField;