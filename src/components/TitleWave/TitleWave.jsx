import { useEffect } from "react";

const TitleWave = ({ text }) => {
  useEffect(() => {
    let resizeEventId;
    const loadStyles = async () => {
      await import("./styles.css");
      resizeEventId = setTimeout(() => window.dispatchEvent(new Event('resize')), 100)
    };
    loadStyles();
    return () => clearTimeout(resizeEventId);
  }, []);

  return (
    <div className="font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] wave-container flex justify-center">
      <div className="relative">
        <h2>{text}</h2>
        <h2>{text}</h2>
      </div>
    </div>
  )
}

export default TitleWave;
