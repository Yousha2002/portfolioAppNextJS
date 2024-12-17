"use client";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Frontend Development",
    description:
      "Build responsive and dynamic user interfaces using modern frontend technologies like React.js, Next.js.",
    href: "/frontend-development",
  },
  {
    num: "02",
    title: "Backend Development",
    description:
      "Develop robust server-side applications using Node.js, Express.js.",
    href: "/backend-development",
  },
  {
    num: "03",
    title: "MERN Stack Development",
    description:
      "Full-stack web application development using MongoDB, Express.js, React.js, and Node.js.",
    href: "/mern-stack-development",
  },
  {
    num: "04",
    title: "Logo Design",
    description:
      "Create visually appealing and professional logos to represent your brand effectively.",
    href: "/logo-design",
  },
];

const Page = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-4xl font-extrabold group-hover:text-accent transition-all duration-500">
                  {service.num}
                </div>
                {/* <Link
                  href={service.href}
                  className="w-[40px] h-[40px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-2xl" />
                </Link> */}
              </div>
              <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Page;
