"use client";
import CountUp from "react-countup";

const stats = [
  {
    name: "1",
    text: "Years of experience",
  },
  {
    name: "10",
    text: "Projects completed",
  },
  {
    name: "8",
    text: "Technologies Mastered",
  },
  {
    name: "16",
    text: "Years of education",
  },
];

const Stats = () => {
  return (
    <div className="container mx-auto px-4 pb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item, index) => (
          <div key={index} className="text-center">
            <CountUp
              end={parseInt(item.name, 10)}
              duration={5}
              delay={2}
              className="text-4xl md:text-5xl xl:text-6xl font-extrabold"
            />
            <p className="text-lg md:text-xl font-medium mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
