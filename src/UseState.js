import { useState } from "react";

export default function Text() {
    const [text, setText] = useState("기본값입니다.");

    const handleButtonClick = () => {
        setText('수정된값');
      };
    
      return (
        <div>
          <div>{text}</div>
          <button onClick={handleButtonClick}>수정</button>
        </div>
      );
}