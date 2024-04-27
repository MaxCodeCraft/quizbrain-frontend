import Image from "next/image";

function Quiz(props) {
  return (
    <div className="frame w-full max-h-screen flex">
      <div className="imgBox w-5/12">
        <img src="/linux.svg" className="imgBox object-cover" />
      </div>
      <div className="advancementBox flex justify-end">
        <span className="advancement">1/10</span>
      </div>
      <div className="questionBox w-7/12 flex flex-col items-center"></div>
    </div>
  );
}

export default Quiz;
