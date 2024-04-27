import { useState } from "react";

function QuestionBox(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }

  let selectedStyle = "";

  isClicked
    ? (selectedStyle = "border-[6px] border-[#8D49C3]")
    : (selectedStyle = "border border-black");

  return (
    <div
      className={`questionBox w-[280px] h-[127px] bg-[#E7E7E7] ${selectedStyle} flex justify-center items-center cursor-pointer rounded-lg`}
      onClick={() => handleClick()}
    >
      <p className="answer">New line</p>
    </div>
  );
}

export default QuestionBox;
