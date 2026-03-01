// src/components/Textarea.jsx
import PropTypes from 'prop-types';
import styles from './Textarea.module.scss';


const Textarea = ({ label, error, errorMsg, className, props}) => {
    return (        
        <div className={ `${styles.textarea_wrap}${className ? ` ${className}` : ''}${ error ? " " + styles.is_error : ""} ` }>
            <div className={styles.textarea_label}>
                <label htmlFor={props.id} 
                 {...(props.required !== undefined && { class: `is_req`}) }
                >{label}</label>
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


// [전달값]
// - label: 입력창 위의 제목
// - error: 에러 발생 여부 (true/false)
// - errorMsg : 에러 메세지
// - className : 전역 스타일 확장용
// props ====
// - name: input name
// - id : 고유id값
// - rows : 값 (number)
// - cols : 값 (number)
// - value : 내용
// - maxLength : 최대값 (number)
// - required : required 여부 (true/false)
// - disabled : 사용불가 여부 (true/false)

Textarea.propTypes = {
    label: PropTypes.string, //입력창 위의 제목
    error:PropTypes.bool, //에러 표시 여부
    errorMsg:PropTypes.string, // error true 일때 필요한 메세지

    //props <textarea>요소 
    name:PropTypes.string.isRequired,
    id: PropTypes.string,
    rows : PropTypes.number,//rows
    cols : PropTypes.number,//rows
    maxLength : PropTypes.number,
    value:PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    required: PropTypes.bool,
    disabled: PropTypes.bool,    
};

// 기본값
Textarea.defaultProps = {
    label: "Textarea",
    rows : 0, // <textarea> css내 width, height 값 지정되고 style정의 되어 해당 영역 제거처리함
    cols : 0,
    className: '',
};

export default Textarea;