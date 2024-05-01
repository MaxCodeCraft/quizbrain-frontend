import { useEffect, useState } from "react";

function Leaderboard() {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const getLeaderboard = async () => {
      const res = await fetch("http://localhost:3000/scores");
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
        className={`line w-full h-[55px] ${bgColor} grid grid-cols-4 px-5 items-center`}
      >
        <span className="pseudo text-2xl font-medium">{e.user}</span>
        <span className="score text-2xl font-medium">{e.score}/10</span>
        <span className="category text-2xl font-medium">{e.category}</span>
        <span className="date text-2xl font-medium">
          {date.toLocaleDateString()}
        </span>
      </div>
    );
  });

  return (
    <div className="frame w-screen h-[calc(100vh-95px)] flex flex-col justify-around items-center">
      <h1 className="text-[54px] font-extrabold">
        Voici la crème de la{" "}
        <span className="text-white relative z-10 after:absolute after:h-[60px] after:w-[105%] after:bg-[#8D49C3] after:content-[''] after:top-[10px] after:left-[-5px] after:right-0 after:transform after:rotate-[357deg] after:-z-10">
          crème
        </span>
      </h1>
      <div className="leaderboard">
        <div className="headerTable w-[1200px] h-[55px] border-[3px] border-[#8D49C3] rounded-t-xl grid grid-cols-4 px-5 items-center overflow-auto">
          <span className="text-2xl text-[#8D49C3] font-bold">Pseudo</span>
          <span className="text-2xl text-[#8D49C3] font-bold">Score</span>
          <span className="text-2xl text-[#8D49C3] font-bold">Catégorie</span>
          <span className="text-2xl text-[#8D49C3] font-bold">Date</span>
        </div>
        <div className="tableContent w-[1200px] h-[330px] border-[3px] border-t-0 border-[#8D49C3] overflow-auto">
          {results}
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
