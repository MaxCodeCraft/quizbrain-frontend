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
      <header className="w-screen border-b-4 border-black">
        <div className="headerContainer flex w-8/12 items-center flex-wrap">
          <Link href="/">
            <div className="logo flex w-64 justify-between items-center m-auto py-3 cursor-pointer">
              <Image src="/logo.svg" width={67} height={67} />
              <div className="logoTitle text-4xl font-extrabold">
                <p>
                  Quiz<span className="text-[#8D49C3]">Brain</span>
                </p>
              </div>
            </div>
          </Link>

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
