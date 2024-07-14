import "../styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import scores from "../reducers/scores";

const store = configureStore({
  reducer: { scores },
});

function App({ Component, pageProps }) {
  const lightTheme = {
    ...DefaultTheme,
    dark: false,
  };

  const theme = lightTheme;
  return (
    <Provider store={store} theme={theme}>
      <Head>
        <title>QuizBrain</title>
        <meta name="color-scheme" content="light only"></meta>
      </Head>
      <header className="w-screen sm:h-[95px] h-[70px] border-b-4 border-black flex justify-center">
        <div className="headerContainer flex w-8/12 items-center justify-between">
          <motion.div
            className="logoBlock flex w-64 justify-between items-center"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
          >
            <Image src="/logo.svg" width={67} height={67} />
            <Link href="/">
              <div className="logoTitle md:text-4xl text-lg font-extrabold cursor-pointer">
                <p>
                  Quiz
                  <span className="text-[#8D49C3] cursor-pointer">Brain</span>
                </p>
              </div>
            </Link>
          </motion.div>

          <menu className="links w-64 flex justify-end md:text-xl font-medium hover:text-[#8D49C3]">
            <Link href="/leaderboard">Leaderboard</Link>
          </menu>
        </div>
      </header>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
