"use client";
import React, { useState, useEffect } from "react";

const expertiseList = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Tailwind CSS",
  "Bootstrap",
  "ReactJS",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
];
const Counter = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % expertiseList.length);
    }, 2000); // 2 seconds delay

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <>
      <div>
        <h2 className="text-xl">
          Expertise:{" "}
          <span className="text-xl text-accent">
            {expertiseList[currentIndex]}
          </span>
        </h2>
      </div>
    </>
  );
};

export default Counter;
