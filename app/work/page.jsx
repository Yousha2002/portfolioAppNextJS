"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import "swiper/css";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Project 1",
    description:
      "I developed an e-commerce application using React.js that integrates with a third-party API (FakeAPI) to fetch and display product data dynamically. The app features a Product Listing Page showcasing all products, a Product Detail Page providing in-depth information about individual items, and a Category Page allowing users to browse products by category. Additionally, the Add to Cart Page enables users to add items to their cart, view cart summaries, and manage their selections seamlessly. This project demonstrates my skills in building scalable React components, API integration, and creating an intuitive, user-friendly interface.",
    stack: ["React.js", "Tailwind.css"],
    image: "/pic123.png",
    live: "https://super-dusk-da5993.netlify.app/",
    github: "https://github.com/Yousha2002/EcommerceAPP",
  },
  {
    num: "02",
    category: "MERN",
    title: "Project 2",
    description:
      "I developed a MERN stack project featuring complete CRUD operations with user authentication and authorization implemented using JWT (JSON Web Tokens) and bcrypt for secure password hashing. The project allows users to register, log in, and perform role-based actions while ensuring data integrity and security. The backend is powered by Node.js and Express.js, with a MongoDB database for seamless data management. The frontend, built with React.js, offers a responsive and user-friendly interface to interact with the system. This project demonstrates my expertise in creating secure, scalable, and efficient full-stack applications.",
    stack: ["React.js", "Nodejs ", "MongoDB", "Tailwind.css"],
    image: "/pic1.png",
    live: "",
    github: "https://github.com/Yousha2002/BlogAppMERN",
  },
  {
    num: "03",
    category: "MERN",
    title: "Project 2",
    description:
      "A job posting app built using the MERN stack (MongoDB, Express.js, React.js, Node.js) enables seamless job management with CRUD operations. Employers can create, read, update, and delete job postings, while job seekers can browse and apply for opportunities. The app features a responsive UI built with React.js, a secure backend powered by Node.js and Express.js, and a MongoDB database for efficient data storage. This robust system ensures smooth functionality, real-time updates, and an intuitive user experience.",
    stack: ["React.js", "Nodejs ", "MongoDB", "Tailwind.css"],
    image: "/pic9.png",
    live: "https://job-mern-app.vercel.app/",
    github: "https://github.com/Yousha2002/FindJobApp",
  },
  {
    num: "04",
    category: "frontend",
    title: "Project 3",
    description:
      "I developed a movie application using React.js and Tailwind CSS, featuring a modern and responsive user interface. The app integrates with a movie API to dynamically fetch and display data for upcoming movies, trending movies, and popular movies. Users can explore a wide range of films through these categories. Additionally, the app includes a movie detail page that provides in-depth information about each movie, such as its synopsis, release date, cast, and ratings. This project showcases my ability to work with external APIs, implement dynamic routing, and design visually appealing and user-friendly interfaces.",
    stack: ["React.js", "Tailwind.css"],
    image: "/pic4.png",
    live: "https://gregarious-parfait-797dbe.netlify.app/",
    github: "https://github.com/Yousha2002/MovieAPP",
  },
  {
    num: "05",
    category: "frontend",
    title: "Project 2",
    description:
      "A travel website landing page designed using HTML and CSS serves as the initial point of interaction for visitors seeking travel-related services or information. This landing page is crafted with a visually appealing design that captures the essence of adventure and exploration, ensuring a user-friendly experience.",
    stack: ["HTML", "CSS"],
    image: "/pic2.png",
    live: "https://ubiquitous-toffee-0fd7ce.netlify.app/",
    github: "https://github.com/example2",
  },

  {
    num: "06",
    category: "frontend",
    title: "Project 5",
    description:
      "A landing page designed using HTML and CSS is a visually engaging and brand-focused web page aimed.",
    stack: ["React", "Tailwind.css"],
    image: "/pic11.png",
    live: "https://tourmaline-frangipane-836310.netlify.app/",
    github: "https://github.com/example3",
  },
  {
    num: "07",
    category: "frontend",
    title: "Project 5",
    description:
      "A Pepsi landing page designed using HTML and CSS is a visually engaging and brand-focused web page aimed at capturing the attention of Pepsi enthusiasts and promoting the brand's image. The page is styled with vibrant colors, predominantly Pepsi's signature blue, red, and white, to ensure strong brand recognition.",
    stack: ["HTML", "CSS"],
    image: "/pic3.png",
    live: "https://example3.com",
    github: "https://github.com/example3",
  },
  {
    num: "08",
    category: "frontend",
    title: "Project 5",
    description:
      "A Lays landing page designed using HTML and CSS serves as a visually engaging platform to showcase the brand's identity, products, and appeal to snack lovers. This landing page captures the essence of the Lays brand with its vibrant colors, high-quality imagery, and user-friendly layout, creating an immersive experience for visitors.",
    stack: ["HTML", "CSS"],
    image: "/pic6.png",
    live: "https://example3.com",
    github: "https://github.com/example3",
  },
  {
    num: "09",
    category: "frontend",
    title: "Project 5",
    description:
      "A KFC landing page designed using HTML and CSS showcases a vibrant and appetizing interface to attract food lovers. The page features a hero section with mouthwatering images of signature dishes like crispy chicken and burgers, complemented by a bold tagline and a call-to-action button for ordering online.",
    stack: ["HTML", "CSS"],
    image: "/pic10.png",
    live: "https://example3.com",
    github: "https://github.com/example3",
  },
];

const Page = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setProjectIndex(swiper.activeIndex);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-8"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {projects[projectIndex].num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {projects[projectIndex].category} Project
              </h2>
              <p className="text-white/60">
                {projects[projectIndex].description}
              </p>
              <ul className="flex gap-4">
                {projects[projectIndex].stack.map((item, idx) => (
                  <li key={idx} className="text-xl text-accent">
                    {item}
                    {idx !== projects[projectIndex].stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <Link href={projects[projectIndex].live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={projects[projectIndex].github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]  xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={project.image}
                    alt={`Project ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="text-black "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Page;
