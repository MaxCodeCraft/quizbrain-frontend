import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useState } from "react";

function Quiz() {
  const router = useRouter();

  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userResponse, setUserResponse] = useState({});
  const [userScore, setUserScore] = useState(0);

  useEffect(() => {
    const getQuestions = async () => {
      const response = await fetch(
        `http://localhost:3000/${router.query.slug}`
      );
      const data = await response.json();
      setQuestions(data);
    };
    getQuestions();
  }, []);

  useEffect(() => {
    console.log(userResponse);
  }, [userResponse]);

  useEffect(() => {
    console.log(userScore);
  }, [userScore]);

  if (questionNumber === 10) {
    checkUserResponse();
    router.push({
      query: { score: userScore, category: router.query.slug },
      pathname: "/results",
    });
  }

  let formattedData = [];

  if (questions.length) {
    formattedData = questions.map((item) => {
      const question = item.question;
      const answers = [];

      Object.keys(item.answers).forEach((key) => {
        if (item.answers[key]) {
          const answerText = item.answers[key];
          const isCorrect = item.correct_answers[key + "_correct"] === "true";
          answers.push({ answer: answerText, isCorrect: isCorrect });
        }
      });

      return {
        question: question,
        answers: answers,
      };
    });
  }

  const answers = formattedData[questionNumber]?.answers.map((e, i) => {
    let selectedStyle = "border border-black";
    if (e.answer === userResponse.answer) {
      selectedStyle = "border-[6px] border-[#8D49C3]";
    }

    return (
      <motion.div
        key={i}
        className={`questionBox ${selectedStyle} w-[260px] h-[117px] bg-[#E7E7E7] flex justify-center flex-wrap items-center cursor-pointer rounded-lg overflow-hidden`}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 4px rgb(50, 50, 50)",
        }}
        onClick={() => {
          setUserResponse(e);
        }}
      >
        <p className="answer font-medium text-xl text-center">{e.answer}</p>
      </motion.div>
    );
  });

  function checkUserResponse() {
    userResponse.isCorrect === true
      ? setUserScore(userScore + 1)
      : setUserScore(userScore);

    setQuestionNumber(questionNumber + 1);
  }

  return (
    <div className="frame w-full h-[calc(100vh-95px)] flex overflow-hidden">
      <div className={`imgBox w-5/12`}>
        <Image
          src="/bg-linux.svg"
          width={1000}
          height={1500}
          objectFit="cover"
        />
      </div>
      <div className={`questionBox w-7/12 flex flex-col justify-around p-16`}>
        <div className="advancement flex justify-end">
          <p className="text-[#8D49C3] font-semibold text-3xl">
            {questionNumber + 1}/10
          </p>
        </div>
        <div className="quizCategory w-full flex justify-center">
          <div className="bg-[#8D49C3] h-[29px] w-[150px] flex justify-center items-center rounded-full">
            <p className="text-white font-semibold text-xl">
              {questions[questionNumber]?.tags[0].name}
            </p>
          </div>
        </div>
        {formattedData[questionNumber]?.question ? (
          <div className="titleBox flex justify-center">
            <h2 className="font-extrabold text-4xl text-center">
              {formattedData[questionNumber]?.question}
            </h2>
          </div>
        ) : (
          <div className="loadingDiv flex justify-center w-full h-[90px]">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
        {answers ? (
          <motion.div
            className="questionBox flex justify-center flex-wrap gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {answers}
          </motion.div>
        ) : (
          <div className="loadingDiv flex justify-center w-full h-[250px]">
            <span className="loading loading-bars loading-lg"></span>
          </div>
        )}
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
            onClick={() => {
              checkUserResponse();
              console.log(userScore);
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
