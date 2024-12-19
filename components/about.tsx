"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in <span className="font-medium">Chemistry</span>, I
        transitioned into <span className="font-medium">software development</span> to pursue my
        passion for technology. I completed rigorous training programs such as the Patika+ Backend
        Web Development Program and BilgeAdam's intensive bootcamp, where I gained hands-on
        experience in <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">What excites me most about programming</span> is solving complex
        problems and delivering impactful solutions. My core stack includes{" "}
        <span className="font-medium">
          React.js, Next.js, Vue.js, Node.js, ASP.NET Core, and MongoDB
        </span>
        , and I am also proficient in <span className="font-medium">TypeScript and Prisma</span>. I
        am constantly exploring new technologies and currently seeking a{" "}
        <span className="font-medium">full-time position</span> as a software developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing video games, watching
        movies, and spending time with my dog. I am also passionate about{" "}
        <span className="font-medium">learning new things</span>, including{" "}
        <span className="font-medium">history and philosophy</span>.
      </p>
    </motion.section>
  );
}
