// src/App.jsx
import { useState } from 'react'; // React의 상태 관리 도구
import MyButton from './components/MyButton'; // 아까 만든 버튼 가져오기

function App() {
  // [개념 비교]
  // JSP/jQuery: var count = 0; 하고 $('#cnt').text(count)로 직접 변경
  // React: setCount를 쓰면 화면이 알아서 다시 그려짐
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    alert("버튼이 클릭되었습니다! 현재 카운트: " + (count + 1));
    };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React 첫 화면입니다</h1>
      <p>아래 버튼을 클릭해보세요.</p>
      
      {/* 우리가 만든 컴포넌트 사용 
        label="클릭하세요" -> props.label로 전달됨
        onClick={handleClick} -> props.onClick으로 전달됨
      */}
      <MyButton label="클릭하세요" onClick={handleClick} />
      
      <div style={{ marginTop: "20px", fontSize: "20px" }}>
        클릭 횟수: <strong>{count}</strong>
      </div>
    </div>
  );
}

export default App;