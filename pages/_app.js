import "../styles/globals.css";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>QuizBrain</title>
      </Head>
      <header className="w-screen border-b-4 border-black flex justify-center">
        <div className="headerContainer flex w-8/12 items-center justify-between">
          <div className="logoBlock flex w-64 justify-between items-center py-3">
            <Image src="/logo.svg" width={67} height={67} />
            <Link href="/">
              <div className="logoTitle text-4xl font-extrabold cursor-pointer">
                <p>
                  Quiz
                  <span className="text-[#8D49C3] cursor-pointer">Brain</span>
                </p>
              </div>
            </Link>
          </div>

          <menu className="links w-64 flex justify-end text-xl">
            <Link href="/leaderboard">Leaderboard</Link>
          </menu>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
