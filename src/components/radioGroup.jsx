// src/components/RadioGroup.jsx
import styles from './radioGroup.module.scss';

// [전달값]
// - grpName: 라디오그룹 이름
// - itemList :  라디오 버튼으로 만들 데이터 배열 (예: [{ label: '서울', value: 'seoul' }, ...])
// - defaultValue : 처음선택값
// - isVertical : 그룹가로형 구분 (true/false)
// - className : 스타일 확장용 (최상위)
// props ====
// - name: 라디오 name
// - id : 고유id값
// - disabled : 사용불가 여부 (true/false)
// - readonly : readonly 여부 (true/false)
// - required : required 여부 (true/false)


const RadioGroup = ({ grpName, itemList, defaultValue, isVertical, props }) => {
    return (
        // className 다중화 정의
        //  isVertical 값 true  들어오면 다중 class "type_vertical"을 추가로 작성해 줍니다.
        <div className={` ${styles.radioGroup} ${isVertical ? styles.type_vertical : ""}`} { ...(grpName !== undefined && { name : grpName}) }>

            {/* [반복문 로직] 
                itemList 배열의 개수만큼 아래 코드를 반복해서 생성합니다.
            */}         

            {  
                itemList.map( (item) => {
                    return (
                        <p className={styles.radioItem} key={item.value}>
                            <input type="radio" 
                                name={props.name} 
                                id={props.id} 
                                value={item.value}                                
                                defaultChecked={defaultValue === item.value}
                            />
                            <label htmlFor={props.id}>
                                <span>{item.label}</span>
                            </label>
                        </p>
                    );
                })
            }
        </div>
    );
};

export default RadioGroup;
