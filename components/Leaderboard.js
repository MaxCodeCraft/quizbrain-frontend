import { useEffect, useState } from "react";

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getLeaderboard = async () => {
      const res = await fetch("https://quizbrain-backend.vercel.app/scores");
      const data = await res.json();
      setScores(data.result);
    };
    getLeaderboard();
  }, []);

  const comparaisonScore = (a, b) => {
    if (a.score < b.score) {
      return 1;
    } else if (a.score > b.score) {
      return -1;
    } else {
      return 0;
    }
  };

  const results = scores.sort(comparaisonScore).map((e, index) => {
    const bgColor =
      index % 2 === 0 ? "bg-[#8D49C3]/[.18]" : "bg-[#8D49C3]/[.50]";
    const date = new Date(e.date);
    return (
      <div
        className={`line w-full h-[55px] ${bgColor} grid sm:grid-cols-4 grid-cols-3 px-5 items-center`}
      >
        <span className="pseudo lg:text-2xl font-medium">{e.user}</span>
        <span className="score lg:text-2xl font-medium">{e.score}/10</span>
        <span className="category lg:text-2xl font-medium">{e.category}</span>
        <span className="date lg:text-2xl font-medium hidden sm:block">
          {date.toLocaleDateString()}
        </span>
      </div>
    );
  });

  return (
    <div className="frame w-screen sm:h-[calc(100vh-95px)] h-[calc(100vh-70px)] flex flex-col justify-around items-center">
      <h1 className="text-[54px] font-extrabold">
        Voici la crème de la{" "}
        <span className="text-white relative z-10 after:absolute after:h-[60px] after:w-[105%] after:bg-[#8D49C3] after:content-[''] after:top-[10px] after:left-[-5px] after:right-0 after:transform after:rotate-[357deg] after:-z-10">
          crème
        </span>
      </h1>
      <div className="leaderboard">
        <div className="headerTable xl:w-[1200px] lg:w-[900px] md:w-[700px] h-[55px] border-[3px] border-[#8D49C3] rounded-t-xl grid sm:grid-cols-4 grid-cols-3 px-5 items-center overflow-auto">
          <span className="sm:text-2xl text-[#8D49C3] font-bold">Pseudo</span>
          <span className="sm:text-2xl text-[#8D49C3] font-bold">Score</span>
          <span className="sm:text-2xl text-[#8D49C3] font-bold">
            Catégorie
          </span>
          <span className="sm:text-2xl text-[#8D49C3] font-bold hidden sm:block">
            Date
          </span>
        </div>
        <div className="tableContent xl:w-[1200px] lg:w-[900px] md:w-[700px] sm:h-[330px] mb-5 border-[3px] border-t-0 border-[#8D49C3] overflow-auto">
          {results}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
