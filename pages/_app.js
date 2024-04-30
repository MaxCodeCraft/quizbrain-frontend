import "../styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>QuizBrain</title>
      </Head>
      <header className="w-screen h-[95px] border-b-4 border-black flex justify-center">
        <div className="headerContainer flex w-8/12 items-center justify-between">
          <motion.div
            className="logoBlock flex w-64 justify-between items-center"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
          >
            <Image src="/logo.svg" width={67} height={67} />
            <Link href="/">
              <div className="logoTitle text-4xl font-extrabold cursor-pointer">
                <p>
                  Quiz
                  <span className="text-[#8D49C3] cursor-pointer">Brain</span>
                </p>
              </div>
            </Link>
          </motion.div>

          <menu className="links w-64 flex justify-end text-xl font-medium hover:text-[#8D49C3]">
            <Link href="/leaderboard">Leaderboard</Link>
          </menu>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
