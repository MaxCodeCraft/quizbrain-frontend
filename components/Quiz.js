import Image from "next/image";
import QuestionBox from "./QuestionBox";
import { motion } from "framer-motion";

function Quiz(props) {
  return (
    <div className="frame w-full h-[calc(100vh-95px)] flex overflow-hidden">
      <div className={`imgBox w-5/12`}>
        <Image src="/linux.svg" width={1000} height={1500} objectFit="cover" />
      </div>
      <div className={`questionBox w-7/12 flex flex-col justify-around p-16`}>
        <div className="advancement flex justify-end">
          <p className="text-[#8D49C3] font-semibold text-3xl">1/10</p>
        </div>
        <div className="quizCategory w-full flex justify-center">
          <div className="bg-[#8D49C3] h-[29px] w-[150px] flex justify-center items-center rounded-full">
            <p className="text-white font-semibold text-xl">Linux</p>
          </div>
        </div>
        <div className="titleBox flex justify-center">
          <h2 className="font-extrabold text-5xl text-center">
            What is the correct way to end a Linux statement?
          </h2>
        </div>
        <motion.div
          className="questionBox flex justify-center flex-wrap gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
          <QuestionBox />
        </motion.div>
        <motion.div
          className="validateBox flex justify-end"
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <motion.div
            className="validateBtn w-[280px] h-[50px] bg-[#8D49C3] flex justify-center items-center rounded-lg cursor-pointer"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 4px rgb(50, 50, 50)",
            }}
          >
            <p className="text-white text-2xl font-medium">Valider</p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Quiz;
