import { motion } from "framer-motion";
import SVG from 'react-inlinesvg';

import { styles } from "../styles";
import { github, web } from "../assets";
import { MotionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import TitleWave from './TitleWave';


const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      whileHover={{ scale: 1.1 }}
      className='bg-tertiary p-5 rounded-2xl w-[360px]'
    >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <SVG
                src={web}
                alt='source code'
                className='w-2/3 h-2/3 object-contain  fill-white-100'
              />
            </div>

            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <SVG
                src={github}
                alt='source code'
                className='w-2/3 h-2/3 object-contain fill-white-100'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className={styles.container}>
      <motion.div variants={textVariant()}>
        <TitleWave text="Pet Projects" />
      </motion.div>

      <div className='w-full flex justify-center'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-center text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects demonstrate my skills and experience through real-world examples. Each project is briefly described and includes links to code repositories and live demos.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-10 items-center justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default MotionWrapper(Works);
