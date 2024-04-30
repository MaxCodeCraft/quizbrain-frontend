import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addCategoryToStore } from "../reducers/category";
import { addQuestionsToStore } from "../reducers/questions";

function CategoryButton(props) {
  const dispatch = useDispatch();

  const addCategory = (category) => {
    dispatch(addCategoryToStore(category));
  };

  return (
    <>
      <Link href={`/quiz/${props.cat}`}>
        <motion.div
          className="categoryButton w-72 h-16 flex justify-center items-center bg-[#E7E7E7] border border-black rounded-xl cursor-pointer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 160,
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

export default CategoryButton;
