"use client";
import Counter from "@/components/Counter";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const page = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/yousha.pdf"; // Replace with the actual path to your CV file
    link.download = "Yousha_Shakeel_CV.pdf"; // Name of the file to be downloaded
    link.click();
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl ">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />
              <span className="text-accent">Yousha Shakeel</span>
            </h1>
            <Counter />
            <p className="max-w-[650px] text-justify mb-9 text-white/80">
              I am a passionate and self-driven Software Engineer with expertise
              in Frontend development or Backend development and a keen eye for
              UI/UX design. With hands-on experience in building scalable and
              responsive web applications, I excel in utilizing modern
              frameworks and libraries. My goal is to create seamless,
              user-friendly experiences that blend functionality with
              aesthetics. I thrive in collaborative environments and
              continuously strive to learn and implement the latest technologies
              to deliver innovative solutions.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleDownload}
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default page;
