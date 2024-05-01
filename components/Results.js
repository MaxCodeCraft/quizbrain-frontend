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
      <h2 className="text-[48px] font-extrabold w-1/2 text-center pt-32 pb-8">
        {text}{" "}
        <span className="text-white relative z-10 after:absolute after:h-[60px] after:w-[105%] after:bg-[#8D49C3] after:content-[''] after:top-[5px] after:left-[-2px] after:right-0 after:transform after:rotate-[357deg] after:-z-10">
          {score}/10
        </span>
      </h2>
      <div className="registerScore flex">
        <input
          type="text"
          placeholder="Votre pseudo ...?"
          className="w-[361px] h-[57px] border-[3px] border-[#8D49C3] rounded-l-lg pl-4"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        ></input>
        <button
          className="w-[361px] h-[57px] bg-[#8D49C3] text-white font-bold text-2xl rounded-r-lg"
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
