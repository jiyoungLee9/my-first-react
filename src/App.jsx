// src/App.jsx
import { useState } from 'react';
import MyButton from './components/MyButton'; 
import RadioGroup from './components/RadioGroup';

function App() {

    // RadioGroup(라디오 버튼에 들어갈 데이터 (보통 DB나 API에서 받아오는 데이터 형태))
    const cityOptions = [
        { label: '서울 Special City', value: 'seoul' },
        { label: '경기도 (Gyeonggi)', value: 'gyeonggi' },
        { label: '부산 (Busan)', value: 'busan' },
        { label: '제주 (Jeju)', value: 'jeju' },
    ];
    const sexOption = [
        { label: '남성', value:'M'},
        { label: '여성', value:'F'},
    ];

    //Button
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
        alert("버튼이 클릭되었습니다! 현재 카운트: " + (count + 1));
    };

    return (
        <>
            <h1>UI 컴포넌트 모음</h1>

            <div className={"container_box"}>

                <h2>RadioGroup</h2>
                
                <section className={"section_box"} aria-labelledby="radio-heading1">
                    <h3 id="radio-heading1">기본형</h3>
                    <RadioGroup
                        name="city"
                        itemList={cityOptions}
                        defaultValue="seoul"
                        isVertical=""
                    >
                    </RadioGroup>                    
                </section>

                <section className={"section_box"} aria-labelledby="radio-heading2">
                    <h3 id="radio-heading2">가로형</h3>
                    <RadioGroup
                        name="sex"
                        itemList={sexOption}
                        defaultValue="F"
                        isVertical="vertical"
                    >
                    </RadioGroup>                  
                </section>                
                
            </div>  

            <div className={"container_box"}>
                <h2>Button</h2>
                <h3>클릭 버튼 <span className={"text_default"}>(클릭 횟수: <strong className={"text_bold"}>{count}</strong>)</span></h3>
                <MyButton label="클릭하세요" onClick={handleClick} />
            </div>      
        </>

    )

}

export default App;