import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { experiences } from "../constants";
import { MotionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import TitleWave from './TitleWave';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let resizeEventId;
    const loadStyles = async () => {
      await import("react-vertical-timeline-component/style.min.css");
      setLoaded(true);
      resizeEventId = setTimeout(() => window.dispatchEvent(new Event('resize')), 100)
    };

    loadStyles();

    return () => clearTimeout(resizeEventId);
  }, []);

  return (
    <div className={styles.container}>
      <p className="p-anchor" id="work">&nbsp;</p>
      <motion.div variants={textVariant()}>
        <TitleWave text="Work Experience" />
      </motion.div>

      {loaded ?
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline>
        </div>
        : <h1>Loading...</h1>
      }
    </div>
  );
};

export default MotionWrapper(Experience);
