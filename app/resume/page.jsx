"use client";

import { Description } from "@radix-ui/react-dialog";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNext,
  FaNodeJs,
  FaNode,
} from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss, SiNextdotjs, SiAntdesign } from "react-icons/si";
import { SiMysql } from "react-icons/si";
const about = {
  title: "About me",
  description:
    "I am a passionate and self-driven Software Engineer with expertise in Frontend development or Backend development and a keen eye for UI/UX design. With hands-on experience in building scalable and responsive web applications, I excel in utilizing modern frameworks and libraries. My goal is to create seamless, user-friendly experiences that blend functionality with aesthetics. I thrive in collaborative environments and continuously strive to learn and implement the latest technologies to deliver innovative solutions.",
  info: [
    { fieldName: "Name", fieldValue: "Yousha Shakeel" },
    { fieldName: "Phone", fieldValue: "(+92) 315 2322 865" },
    { fieldName: "Experience", fieldValue: "1+ Years" },
    { fieldName: "Nationality", fieldValue: "Pakistani" },
    { fieldName: "Freelance ", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Urdu" },
    { fieldName: "LinkedIn", fieldValue: "yousha shakeel" },
    { fieldName: "GitHub", fieldValue: "Yousha2002" },
    { fieldName: "Email", fieldValue: "smyousha2002@gmail.com" },
  ],
};
const experience = {
  icon: "/badge.svg",
  title: "My experience",
  description:
    "As a Developer, I have hands-on experience in designing and developing responsive, user-centric web applications. I specialize in utilizing modern frameworks and libaries like React.js, Next.js, Node.js and MongoDB to create seamless and visually appealing user interfaces.",
  items: [
    {
      company: "BRB Group",
      position: "React JS Developer(Intern)",
      duration: "Aug 2024 - Oct 2024",
    },
    {
      company: "Codes Soft ",
      position: "Frontend Developer(Intern)",
      duration: "May 2024 - June 2024",
    },
    {
      company: "Freelance",
      position: "Frontend Developer",
      duration: "Aug 2023 - Present",
    },
  ],
};
const education = {
  icon: "/cap.svg",
  title: "My education",
  description:
    "I have completed my Bachelor of Software Engineering from Sir Syed University of Engineering and Technology, Karachi, with a CGPA of 3.3/4. During my academic journey Oct 2020 - Aug 2024, I developed a strong foundation in programming, software development methodologies, and problem-solving techniques. My coursework included subjects like Data Structures, Web Development, and Database Management, which equipped me with the skills necessary to excel in real-world software engineering projects. My education has been instrumental in shaping my technical abilities and fostering my passion for innovative software solutions.",
  items: [
    {
      name: "UNIVERSITY",
      institution: "Sir Syed University",
      degree: "BS in Software Engineering ",
      duration: "Oct 2020 - Aug 2024",
      grade: "CGPA 3.3 / 4",
    },
    {
      name: "COLLEGE",
      institution: "Government National College",
      degree: "Intermediate Pre-Engineering",
      duration: "March 2018 - March 2020",
      grade: "Percentage 72%",
    },
    {
      name: "SCHOOL",
      institution: "Bilal Public School",
      degree: "Matriculation Computer Science",
      duration: "March 2016 - March 2018",
      grade: "Percentage 80%",
    },
  ],
};
const skills = {
  title: "My skills",
  description:
    "I possess a strong command of modern web development technologies and tools. My focus on problem-solving, adaptability, and continuous learning allows me to deliver innovative and high-quality solutions.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "ReactJS",
    },
    {
      icon: <SiRedux />,
      name: "Redux",
    },
    {
      icon: <SiNextdotjs />,
      name: "NextJS",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <BsBootstrapFill />,
      name: "Bootstrap",
    },
    {
      icon: <SiAntdesign />,
      name: "Antdesign",
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
    },
    {
      icon: <SiMongodb />,
      name: "Mongodb",
    },
    {
      icon: <SiMysql />,
      name: "MySQL",
    },
  ],
};
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const page = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="min-h-[88vh] flex items-center justify-center py-12 xl:py-0"
      >
        <div className="container mx-auto">
          <Tabs
            defaultValue="experience"
            className="flex flex-col xl:flex-row gap-[60px]"
          >
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            <div className="min-h-[70vh] w-full">
              <TabsContent className="w-full" value="experience">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                  <p className=" text-justify text-white/60 mx-auto xl:mx-0">
                    {experience.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[184px] py-6 px-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[350px] min-h-[60px] text-center lg:text-left">
                              {item.position}
                            </h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent className="w-full " value="education">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                  <p className=" text-justify text-white/60 mx-auto xl:mx-0">
                    {education.description}
                  </p>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#232329] h-[200px] py-6 px-4 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-xl max-w-[350px]  text-center lg:text-left">
                              {item.name}
                            </h3>
                            <h5 className="text-xl max-w-[450px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h5>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              <TabsContent className="w-full " value="skills">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                    <p className=" text-justify text-white/60 mx-auto xl:mx-0">
                      {skills.description}
                    </p>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                      {skills.skillList.map((skill, index) => {
                        return (
                          <li key={index}>
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                  <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                    {skill.icon}
                                  </div>{" "}
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
              {/* <TabsContent className="w-full " value="about">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                      {" "}
                      {about.description}
                    </p>
                  
                  </div>
                </div>
              </TabsContent> */}
              <TabsContent className="w-full " value="about">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl font-bold">{about.title}</h3>
                    <p className=" text-justify text-white/60 mx-auto xl:mx-0">
                      {about.description}
                    </p>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[720px] mx-auto xl:mx-8">
                      {about.info.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="flex items-center justify-center xl:justify-start gap-4"
                          >
                            <span className="text-white/60">
                              {item.fieldName}
                            </span>{" "}
                            <span className="text-xl">{item.fieldValue}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </motion.div>
    </>
  );
};

export default page;
