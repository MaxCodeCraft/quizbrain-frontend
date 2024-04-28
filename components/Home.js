import CategoryButton from "./CategoryButton";
import { motion } from "framer-motion";

function Home() {
  const buttonsData = [
    { id: 1, name: "Linux", icon: "/cat-linux.svg" },
    { id: 2, name: "Bash", icon: "/cat-bash.svg" },
    { id: 3, name: "Docker", icon: "/cat-docker.svg" },
    { id: 4, name: "JavaScript", icon: "/cat-javascript.svg" },
    { id: 5, name: "HTML", icon: "/cat-html.svg" },
    { id: 6, name: "PHP", icon: "/cat-php.svg" },
    { id: 7, name: "SQL", icon: "/cat-sql.svg" },
    { id: 8, name: "Code", icon: "/cat-code.svg" },
    { id: 9, name: "Python", icon: "/cat-python.svg" },
  ];

  const buttons = buttonsData.map((button) => (
    <CategoryButton name={button.name} icon={button.icon} />
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
