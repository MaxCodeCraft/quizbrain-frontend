import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { removeScoreCategory } from "../reducers/scores";

function Results() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [category, setCategory] = useState("");
  const [score, setScore] = useState("");
  const temp1 = useSelector((state) => state.scores.value[0]);
  const temp2 = useSelector((state) => state.scores.value[1]);

  useEffect(() => {
    setCategory(temp1);
    setScore(temp2);
    removeScoreCategory();
  }, []);

  let text = "";

  if (score < 5) {
    text = "Un petit score, grand sourire ! Ton score est de";
  } else if (score >= 5 && score <= 7) {
    text = "Pas mal, continue ainsi ! Ton score est de";
  } else {
    text = "Félicitations, ton score est de";
  }

  const handleClick = async () => {
    const scoreData = {
      user: username,
      score: score,
      category: category,
    };

    const res = await fetch("http://localhost:3000/scores/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(scoreData),
    });
    const data = await res.json();
    router.push({
      pathname: "/leaderboard",
    });
  };

  return (
    <div className="frame w-screen h-[calc(100vh-95px)] flex flex-col justify-between items-center">
      <h2 className="lg:text-[48px] text-3xl font-extrabold lg:w-1/2 px-2 text-center pt-5 md:pt-16 lg:pt-32 pb-8 md:pb-20 md:leading-tight">
        {text}{" "}
        <span className="text-white relative z-10 after:absolute  lg:after:h-[55px] sm:after:h-[40px] after:h-[35px] after:w-[105%] after:bg-[#8D49C3] after:content-[''] after:top-[5px] after:left-[-2px] after:right-0 after:transform after:rotate-[357deg] after:-z-10">
          {score}/10
        </span>
      </h2>
      <div className="registerScore flex flex-col md:flex-row">
        <input
          type="text"
          placeholder="Votre pseudo ...?"
          className="lg:w-[361px] md:w-[340px] w-[310px] h-[45px] md:h-[57px] border-[3px] border-[#8D49C3] rounded-t-lg md:rounded-none md:rounded-l-lg pl-4"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
        <button
          className="lg:w-[361px] md:w-[340px] w-[310px] h-[45px] md:h-[57px] bg-[#8D49C3] text-white font-bold text-2xl rounded-b-lg md:rounded-none md:rounded-r-lg"
          onClick={() => handleClick()}
        >
          M'enregistrer
        </button>
      </div>
      <Image src="/results.svg" width={761} height={490} />
    </div>
  );
}

export default Results;
