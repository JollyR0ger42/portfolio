import { motion } from "framer-motion";
import { MotionWrapper } from '../hoc';

const circleVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0, 0.71, 0.2, 1.5],
      duration: 0.2,
      delay: 0.5,
    }
  },
}

const sideVariants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(100% 0 0 0)",
  },
  show: {
    opacity: 1,
    clipPath: "inset(0)",
    transition: { duration: 0.5 }
  },
}

const SideInitial = () => {
  return (
    <motion.div variants={sideVariants} className='flex flex-col justify-center items-center mt-5 pt-5 min-w-[75px] side-initial-mask'>
      <motion.div variants={circleVariants} className='w-5 h-5 rounded-full violet-neon z-[1]' />
      <motion.div className='w-1 sm:h-80 h-40 violet-neon z-0' />
    </motion.div>
  )
};

export default MotionWrapper(SideInitial);