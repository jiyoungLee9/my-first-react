// src/components/RadioGroup.jsx
import PropTypes from 'prop-types';
import styles from './radioGroup.module.scss';

// UX진행
// <p> 태그내 <input radio>로 다수 존재하는 group 정의 됨

const RadioGroup = ({ grpName, itemList, defaultValue, isVertical, ...rest }) => {
    return (
        // className 다중화 정의
        //  isVertical 값 true  들어오면 다중 class "type_vertical"을 추가로 작성해 줍니다.
        <div className={` ${styles.radioGroup} ${isVertical ? styles.type_vertical : ""}`} { ...(grpName !== undefined && { name : grpName}) }>

            {/* [반복문 로직] 
                itemList 배열의 개수만큼 아래 코드를 반복해서 생성합니다.
            */}         

            {  
                itemList.map( (item, index) => {
                    return (
                        <p className={styles.radioItem} key={item.value}>
                            <input type="radio" 
                                {...rest}
                                //id={props.id} //단건
                                // itemList 갯수에 맞게 id 정의 : idValue0 , idValue1, idValue2 ... 방식
                                id={`${rest.id}${index}`}
                                value={item.value}                                
                                defaultChecked={defaultValue === item.value}
                            />
                            {/* itemList 갯수에 맞게 name, id 정의 */}
                            <label htmlFor={`${rest.id}${index}`} >
                                <span>{item.label}</span> 
                            </label>
                        </p>
                    );
                })
            }
        </div>
    );
};


// [전달값]
// - grpName: 라디오그룹 이름
// - itemList :  라디오 버튼으로 만들 데이터 배열 (예: [{ label: '서울', value: 'seoul' }, ...])
// - defaultValue : 처음선택값
// - isVertical : 그룹가로형 구분 (true/false)
// - className : 전역 스타일 확장용
// - onChange : onchange 이벤트
// ...reset (input요소들) ====
// - name: 라디오 name
// - id : 고유id값 // test 값일 경우 뒤에 연번이 붙는 방식으로 지정 
// - disabled : 사용불가 여부 (true/false)
// - readonly : readonly 여부 (true/false)
// - required : required 여부 (true/false)

RadioGroup.propTypes = {
    grpName : PropTypes.string, //라디오그룹 다수 존재할것을 감안하여 각 별도 이름
    itemList : PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, //value (string, number)
        })    
    ),
    defaultValue : PropTypes.string, //기본 선택값 (itemList 내 특정 list value값과 동일해야 함)
    isVertical : PropTypes.bool,
    className: PropTypes.string,
    onChange : PropTypes.func, //change 이벤트

    //props (input radio 요소정의)
    name : PropTypes.string,
    id : PropTypes.string,
    disabled : PropTypes.bool,
    readonly : PropTypes.bool,
    required : PropTypes.bool,
};

// 기본값
RadioGroup.defaultProps = {
    grpName: "radioGroup",
    onChange: () => {},
    className: '',
};

export default RadioGroup;
