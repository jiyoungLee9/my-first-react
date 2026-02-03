// src/components/RadioGroup.jsx
import styles from './radioGroup.module.scss';

// [Props 설명]
// 1. name: 라디오 그룹을 묶어주는 이름 (HTML name 속성)
// 2. itemList: 라디오 버튼으로 만들 데이터 배열 (예: [{ label: '서울', value: 'seoul' }, ...])
// 3. defaultValue: 처음에 선택되어 있을 값 (옵션)
// 4. isType : 그룹가로형 구분

const RadioGroup = ({ name, itemList, defaultValue, isType }) => {
    return (
        // className 다중화 정의
        //  isType 값에 "vertical"이 들어오면 다중 class "type_vertical"을 추가로 작성해 줍니다.
        <div className={` ${styles.radioGroup} ${isType === "vertical" ? styles.type_vertical : ""}`}>            

            {/* [반복문 로직] 
                itemList 배열의 개수만큼 아래 코드를 반복해서 생성합니다.
            */}         

            {  
                itemList.map( (item) => {
                    return (
                        <p className={styles.radioItem} key={item.value}>
                            <input type="radio" 
                                name={name} 
                                id={item.value} 
                                value={item.value}
                                // className={"hdn"} //강제 미노출
                                defaultChecked={defaultValue === item.value}
                            />
                            <label htmlFor={item.value}>
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
