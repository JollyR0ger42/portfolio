import { styles } from "../styles";
import { about } from "../constants";
import { MotionWrapper } from "../hoc";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import Tech from './Tech';
import SideInitial from "./SideInitial";

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
            variants={textVariant()}
            className={`${styles.heroHeadText} text-white`}
          >
            <span className='text-[#915EFF]'>Hi</span>
          </motion.div>
          <motion.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            variants={textVariant(0.25)}
          >
            {about}
          </motion.p>
        </div>
      </div>
      <div className={`mt-10 ${styles.paddingX}`}>
        <Tech />
      </div>
    </section>
  );
};

export default MotionWrapper(About);
