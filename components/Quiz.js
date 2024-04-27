import Image from "next/image";
import QuestionBox from "./QuestionBox";

function Quiz(props) {
  return (
    <div className="frame w-full max-h-full flex overflow-hidden">
      <div className="imgBox">
        <Image
          src="/linux.svg"
          className="imgBox object-cover w-5/12 h-screen"
          width={1000}
          height={2000}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="questionBox h-screen w-7/12 flex flex-col justify-around p-16  ">
        <div className="advancement flex justify-end">
          <p className="text-[#8D49C3] font-semibold text-3xl">1/10</p>
        </div>
        <div className="quizCategory w-full flex justify-center">
          <div className="bg-[#8D49C3] h-[29px] w-[150px] flex justify-center items-center rounded-full">
            <p className="text-white font-semibold text-xl">Linux</p>
          </div>
        </div>
        <div className="titleBox flex justify-center">
          <h2 className="font-extrabold text-5xl">
            What is the correct way to end a Linux statement?
          </h2>
        </div>
        <div className="questionBox flex justify-center flex-wrap gap-8">
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
        </div>
        <div className="validateBox flex justify-end">
          <div className="validateBtn w-[280px] h-[50px] bg-[#8D49C3] flex justify-center items-center rounded-lg cursor-pointer">
            <p className="text-white text-2xl font-medium">Valider</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
