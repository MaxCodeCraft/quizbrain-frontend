import Image from "next/image";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

function Results() {
  return (
    <div className="frame w-screen h-[calc(100vh-95px)] flex flex-col justify-between items-center">
      <h2 className="text-[48px] font-extrabold w-1/2 text-center pt-32 pb-8">
        Félicitations, votre score est de{" "}
        <span className="text-white relative z-10 after:absolute after:h-[60px] after:w-[105%] after:bg-[#8D49C3] after:content-[''] after:top-[10px] after:left-[-2px] after:right-0 after:transform after:rotate-[357deg] after:-z-10">
          8/10
        </span>
      </h2>
      <div className="registerScore flex">
        <input
          type="text"
          placeholder="  Votre nom ? ....Michel ?"
          className="w-[361px] h-[57px] border-[3px] border-[#8D49C3] rounded-l-lg pl-4"
        ></input>
        <button className="w-[361px] h-[57px] bg-[#8D49C3] text-white font-bold text-2xl rounded-r-lg">
          M'enregistrer
        </button>
      </div>
      <Image src="/results.svg" width={761} height={490} />
    </div>
  );
}

export default Results;
