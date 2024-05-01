function Leaderboard() {
  return (
    <div className="frame w-screen h-[calc(100vh-95px)] flex flex-col justify-around items-center">
      <h1 className="text-[54px] font-extrabold">
        Voici la crème de la{" "}
        <span className="text-white relative z-10 after:absolute after:h-[60px] after:w-[105%] after:bg-[#8D49C3] after:content-[''] after:top-[10px] after:left-[-5px] after:right-0 after:transform after:rotate-[357deg] after:-z-10">
          crème
        </span>
      </h1>
      <div className="leaderboard">
        <div className="headerTable w-[1200px] h-[55px] border-[3px] border-[#8D49C3] rounded-t-xl grid grid-cols-4 px-5 items-center">
          <span className="text-2xl text-[#8D49C3] font-bold">Pseudo</span>
          <span className="text-2xl text-[#8D49C3] font-bold">Score</span>
          <span className="text-2xl text-[#8D49C3] font-bold">Catégorie</span>
          <span className="text-2xl text-[#8D49C3] font-bold">Date</span>
        </div>
        <div className="tableContent w-[1200px] h-[330px] border-[3px] border-t-0 border-[#8D49C3] overflow-auto">
          <div className="line w-full h-[55px] bg-white grid grid-cols-4 px-5 items-center">
            <span className="pseudo text-2xl font-medium">Michel 36</span>
            <span className="score text-2xl font-medium">8/10</span>
            <span className="category text-2xl font-medium">Linux</span>
            <span className="date text-2xl font-medium">24/04/2024</span>
          </div>
          <div className="line w-full h-[55px] bg-[#8D49C3]/[.18] grid grid-cols-4 px-5 items-center">
            <span className="pseudo text-2xl font-medium">Michel 36</span>
            <span className="score text-2xl font-medium">8/10</span>
            <span className="category text-2xl font-medium">Linux</span>
            <span className="date text-2xl font-medium">24/04/2024</span>
          </div>
          <div className="line w-full h-[55px] bg-[#8D49C3]/[.50] grid grid-cols-4 px-5 items-center">
            <span className="pseudo text-2xl font-medium">Michel 36</span>
            <span className="score text-2xl font-medium">8/10</span>
            <span className="category text-2xl font-medium">Linux</span>
            <span className="date text-2xl font-medium">24/04/2024</span>
          </div>
          <div className="line w-full h-[55px] bg-[#8D49C3]/[.18] grid grid-cols-4 px-5 items-center">
            <span className="pseudo text-2xl font-medium">Michel 36</span>
            <span className="score text-2xl font-medium">8/10</span>
            <span className="category text-2xl font-medium">Linux</span>
            <span className="date text-2xl font-medium">24/04/2024</span>
          </div>
          <div className="line w-full h-[55px] bg-[#8D49C3]/[.50] grid grid-cols-4 px-5 items-center">
            <span className="pseudo text-2xl font-medium">Michel 36</span>
            <span className="score text-2xl font-medium">8/10</span>
            <span className="category text-2xl font-medium">Linux</span>
            <span className="date text-2xl font-medium">24/04/2024</span>
          </div>
          <div className="line w-full h-[55px] bg-[#8D49C3]/[.18] grid grid-cols-4 px-5 items-center">
            <span className="pseudo text-2xl font-medium">Michel 36</span>
            <span className="score text-2xl font-medium">8/10</span>
            <span className="category text-2xl font-medium">Linux</span>
            <span className="date text-2xl font-medium">24/04/2024</span>
          </div>
          <div className="line w-full h-[55px] bg-[#8D49C3]/[.50] grid grid-cols-4 px-5 items-center">
            <span className="pseudo text-2xl font-medium">Michel 36</span>
            <span className="score text-2xl font-medium">8/10</span>
            <span className="category text-2xl font-medium">Linux</span>
            <span className="date text-2xl font-medium">24/04/2024</span>
          </div>
          <div className="line w-full h-[55px] bg-[#8D49C3]/[.18] grid grid-cols-4 px-5 items-center">
            <span className="pseudo text-2xl font-medium">Michel 36</span>
            <span className="score text-2xl font-medium">8/10</span>
            <span className="category text-2xl font-medium">Linux</span>
            <span className="date text-2xl font-medium">24/04/2024</span>
          </div>
          <div className="line w-full h-[55px] bg-[#8D49C3]/[.50] grid grid-cols-4 px-5 items-center">
            <span className="pseudo text-2xl font-medium">Michel 36</span>
            <span className="score text-2xl font-medium">8/10</span>
            <span className="category text-2xl font-medium">Linux</span>
            <span className="date text-2xl font-medium">24/04/2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
