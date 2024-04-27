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
      className={`questionBox w-[280px] h-[127px] bg-[#E7E7E7] ${selectedStyle} flex justify-center flex-wrap items-center cursor-pointer rounded-lg overflow-hidden`}
      onClick={() => handleClick()}
    >
      <p className="answer font-medium text-2xl text-center">New line</p>
    </div>
  );
}

export default QuestionBox;
