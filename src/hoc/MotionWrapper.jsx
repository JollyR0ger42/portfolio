import { motion } from "framer-motion";

import { staggerContainer } from "../utils/motion";

const Wrapper = (Component) =>
  function HOC() {
    return (
      <motion.div
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >

        <Component />
      </motion.div>
    );
  };

export default Wrapper;
