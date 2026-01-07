// src/components/MyButton.jsx

const sampleButton = (props) => {
    const buttonStyle2 = {
        padding:"16px 20px;",
        backgroundColor : "#ff8800ff",
        color : "#fff",
        border : "none",
        borderRadius : "8px",
        cursor : "pointer",
        fontSize : "20px",
        lineHiehgt : "30px"
    };

    return (
        <button style={buttonStyle2} onClick={props.onClick}>
            {props.label}
        </button>
    );
};

export default sampleButton;

/*
const MyButton = (props) => {
  
  // 버튼 스타일 정의 (JSP의 style 태그와 비슷하지만 객체 형태입니다)
  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px"
  };

  return (
    // HTML과 똑같아 보이지만 className, onClick 등을 씁니다.
    // {props.label}은 JSP의 <%= label %>과 같은 변수 출력입니다.
    <button style={buttonStyle} onClick={props.onClick}>
      {props.label}
    </button>
  );
};

export default MyButton; // 다른 파일에서 쓸 수 있게 내보내기
*/