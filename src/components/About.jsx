import { styles } from "../styles";
import { about, education } from "../constants";
import { MotionWrapper } from "../hoc";

import { motion } from "framer-motion";
import SideInitial from "./SideInitial";

export const textVariant = (delay) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        delay: delay,
      },
    },
  };
};


const About = () => {
  return (
    <section className={`${styles.container} relative w-full mx-auto flex flex-col justify-center items-center`}>
      <p className="p-anchor" id="about">&nbsp;</p>
      <div
        className={`inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start`}
      >
        <SideInitial />
        <div>
          <motion.div
            initial={textVariant().hidden}
            animate={textVariant().show}
            className={`${styles.heroHeadText} text-white`}
          >
            <span className='text-[#915EFF]'>Summary</span>
          </motion.div>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={textVariant(0.1).hidden}
            animate={textVariant(0.1).show}
          >
            {about}
            <br/>
            <br/>
            {education}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MotionWrapper(About);
