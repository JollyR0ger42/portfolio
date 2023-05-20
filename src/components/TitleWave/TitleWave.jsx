const TitleWave = ({ text }) => {
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
