import { motion } from "framer-motion";

import { MotionWrapper } from "../hoc";
import { technologies } from "../constants";

const flyIn = (delay) => {
  return {
    hidden: {
      y: 100,
      opacity: 0,
      rotate: 360,
      borderRadius: "100px",
    },
    show: {
      borderRadius: "10px",
      y: 0,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay,
        duration: 2,
        ease: "easeOut",
      },
    },
  };
};

const circ2Rect = (delay) => {
  return {
    hidden: {
      borderRadius: "100px",
    },
    show: {
      borderRadius: "10px",
      transition: {
        type: "spring",
        delay: delay,
        duration: 2,
        ease: "easeOut",
      },
    },
  };
}

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div key={index}>
          <motion.div
            variants={flyIn(0.5 + index * 0.05)}
            className='w-full blue-yellow-gradient p-[1px] shadow-card overflow-hidden'
          >
            <motion.div
              variants={circ2Rect(0.5 + index * 0.05)}
              className='md:w-28 w-20 md:h-28 h-20 bg-tertiary flex justify-evenly items-center flex-col'
              key={technology.name}
            >
              <img className="w-16 h-16 object-contain" src={technology.icon} />
            </motion.div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default MotionWrapper(Tech);
