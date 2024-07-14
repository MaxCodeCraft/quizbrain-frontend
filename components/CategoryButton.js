import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addScoreCategory } from "../reducers/scores";

function CategoryButton(props) {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addScoreCategory(props.name));
  }

  return (
    <>
      <Link href={`/quiz/${props.cat}`}>
        <motion.div
          className="categoryButton lg:w-72 lg:h-16 sm:w-64 w-56 h-14 flex justify-center items-center bg-[#E7E7E7] border border-black rounded-xl cursor-pointer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 160,
            duration: 1.2,
          }}
          onClick={() => handleClick()}
        >
          <div className="line flex items-center">
            <Image src={`${props.icon}`} width={44} height={46} />
            <p className="title pl-3 lg:text-4xl text-2xl font-bold">
              {props.name}
            </p>
          </div>
        </motion.div>
      </Link>
    </>
  );
}

export default CategoryButton;
