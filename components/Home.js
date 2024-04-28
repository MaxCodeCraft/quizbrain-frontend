import CategoryButton from "./CategoryButton";

function Home() {
  const buttonsData = [
    { id: 1, btnName: "Linux", icon: "/cat-linux.svg", cat: "linux" },
    { id: 2, btnName: "Bash", icon: "/cat-bash.svg", cat: "bash" },
    { id: 3, btnName: "Docker", icon: "/cat-docker.svg", cat: "docker" },
    {
      id: 4,
      btnName: "JavaScript",
      icon: "/cat-javascript.svg",
      cat: "javascript",
    },
    { id: 5, btnName: "HTML", icon: "/cat-html.svg", cat: "html" },
    { id: 6, btnName: "PHP", icon: "/cat-php.svg", cat: "php" },
    { id: 7, btnName: "SQL", icon: "/cat-sql.svg", cat: "sql" },
    { id: 8, btnName: "Code", icon: "/cat-code.svg", cat: "code" },
    { id: 9, btnName: "Python", icon: "/cat-python.svg", cat: "python" },
  ];

  const buttons = buttonsData.map((button, i) => (
    <CategoryButton
      key={i}
      name={button.btnName}
      icon={button.icon}
      cat={button.cat}
    />
  ));

  return (
    <div className="frame flex justify-center mt-32 h-screen">
      <div className="categoryContainer flex flex-col items-center">
        <h1 className="text-[54px] font-extrabold">
          Sur quel thème tu veux{" "}
          <span className="text-white relative z-10 after:absolute after:h-[60px] after:w-[105%] after:bg-[#8D49C3] after:content-[''] after:top-[10px] after:left-[-5px] after:right-0 after:transform after:rotate-[357deg] after:-z-10">
            bûcher
          </span>{" "}
          ?
        </h1>
        <div className="categories mt-10 grid gap-5 grid-cols-3">{buttons}</div>
      </div>
    </div>
  );
}

export default Home;
