import { useState } from "react";
import { motion } from "framer-motion";

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
    <motion.div
      className={`questionBox w-[280px] h-[127px] bg-[#E7E7E7] ${selectedStyle} flex justify-center flex-wrap items-center cursor-pointer rounded-lg overflow-hidden`}
      onClick={() => handleClick()}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 0px 4px rgb(50, 50, 50)",
      }}
    >
      <p className="answer font-medium text-2xl text-center">
        {props.question}
      </p>
    </motion.div>
  );
}

export default QuestionBox;
