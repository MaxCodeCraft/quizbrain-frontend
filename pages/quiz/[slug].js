import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addScoreCategory } from "../../reducers/scores";
import { useSelector } from "react-redux";

function Quiz() {
  const router = useRouter();

  const [questions, setQuestions] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userResponse, setUserResponse] = useState({});
  const [userScore, setUserScore] = useState(0);

  const dispatch = useDispatch();
  const category = useSelector((state) => state.scores.value[0]);

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

  useEffect(() => {}, [userResponse]);

  useEffect(() => {}, [userScore]);

  if (questionNumber === 10) {
    checkUserResponse();
    dispatch(addScoreCategory(userScore));
    router.push({
      // query: { score: userScore, category: router.query.slug },
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
        className={`questionBox ${selectedStyle} w-[260px] lg:w-[220px] h-[117px] lg:h-[99px] bg-[#E7E7E7] flex justify-center flex-wrap items-center cursor-pointer rounded-lg overflow-auto`}
        whileHover={{
          scale: 1.1,
          boxShadow: "0px 0px 4px rgb(50, 50, 50)",
        }}
        onClick={() => {
          setUserResponse(e);
        }}
      >
        <p className="answer font-medium text-lg lg:text-lg text-center">
          {e.answer}
        </p>
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
    <div className="frame w-full h-[calc(100vh-95px)] flex lg:overflow-hidden">
      <div className={`imgBox lg:w-5/12 lg:block hidden`}>
        <Image
          src="/bg-linux.svg"
          width={1000}
          height={1700}
          objectFit="cover"
        />
      </div>
      <div
        className={`questionBox lg:w-7/12 w-full flex flex-col justify-around lg:p-16`}
      >
        <div className="advancement flex justify-end pt-2 pr-2">
          <p className="text-[#8D49C3] font-semibold sm:text-xl lg:text-2xl xl:text-3xl">
            {questionNumber + 1}/10
          </p>
        </div>
        <div className="quizCategory w-full flex justify-center">
          <div className="bg-[#8D49C3] h-[29px] w-[150px] flex justify-center items-center rounded-full">
            <p className="text-white font-semibold text-xl">{category}</p>
          </div>
        </div>
        {formattedData[questionNumber]?.question ? (
          <div className="titleBox flex justify-center">
            <h2 className="font-extrabold xl:text-4xl md:text-3xl text-xl text-center px-2">
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
            className="questionBox py-4 flex justify-center flex-wrap gap-5"
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
          className="validateBox flex xl:justify-end justify-center pb-2"
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <motion.div
            className="validateBtn xl:w-[280px] w-[250px] xl:h-[50px] h-[45px] bg-[#8D49C3] flex justify-center items-center rounded-lg cursor-pointer"
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 4px rgb(50, 50, 50)",
            }}
            onClick={() => {
              checkUserResponse();
              setUserResponse({});
            }}
          >
            <p className="text-white xl:text-2xl text-xl font-medium">
              Valider
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Quiz;
