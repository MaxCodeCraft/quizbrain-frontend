import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function categoryButton(props) {
  return (
    <>
      <Link href={`/quiz`}>
        <motion.div
          className="categoryButton w-72 h-16 flex justify-center items-center bg-[#E7E7E7] border border-black rounded-xl cursor-pointer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ rotate: 360, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.2,
          }}
        >
          <div className="line flex items-center">
            <Image src={`${props.icon}`} width={44} height={46} />
            <p className="title pl-3 text-4xl font-bold">{props.name}</p>
          </div>
        </motion.div>
      </Link>
    </>
  );
}

export default categoryButton;
