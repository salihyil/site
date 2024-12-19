import aiImageGeneratorImg from "@/public/aiImageGenerator.png";
import miroCloneImg from "@/public/miroClone.png";
import pokemonImg from "@/public/pokemon.png";
import polarisImg from "@/public/polaris.png";
import restaurantImg from "@/public/restaurant.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Back-end .Net Developer Bootcamp",
    location: "Istanbul, TR",
    description:
      "I graduated after 4 months of studying. I learned the basics of .NET Core and C# programming. I also learned the basics of Microsoft SQL Server and Entity Framework Core.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2024 - January 2025",
  },
  {
    title: "Intime Info Software Solutions Inc., Front-End Developer",
    location: "Istanbul, TR",
    description:
      "Created frontend components using Vue.js, Vuetify, and Pinia while integrating RESTful web services. Extended functionality with third-party Vue libraries and improved UI, resulting in 15% increase in customer satisfaction. Actively participated in code reviews and developed responsive applications using Vue Router.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - November 2023",
  },
  {
    title: "Getir, Front-End Developer",
    location: "Istanbul, TR",
    description:
      "Developed front-end applications using React.js and Next.js, integrating RESTful services with Axios and implementing Jest testing. Enhanced load times by 30% through responsive design optimization for 10+ mobile devices. Actively participated in agile development processes including sprint planning and daily stand-ups.",
    icon: React.createElement(FaReact),
    date: "September 2021 - June 2023",
  },
  {
    title: "BilgeAdam, Application Development with HTML, CSS, JavaScript and React.js",
    location: "Istanbul, TR",
    description:
      "Completed an intensive 200-hour program focused on mastering modern web development technologies, including React.js, with hands-on projects and industry-standard practices. I immediately found a job as a front-end developer.",
    icon: React.createElement(FaReact),
    date: "2021",
  },
] as const;

export const projectsData = [
  {
    title: "AI Image Generator",
    description:
      "A full-stack application that generates images using Stability AI's API. Features include user authentication, dashboard for managing generated images, and email system for notifications.",
    tags: ["React", "Next.js", "PostgreSQL", "Tailwind", "DrizzleORM", "TypeScript"],
    imageUrl: aiImageGeneratorImg,
    link: "https://image-generatorss.vercel.app/",
  },
  {
    title: "Miro Clone",
    description:
      "A collaborative whiteboard application with real-time features. Includes tools for drawing, shapes, sticky notes, and text with multi-user support, live cursor tracking, and team collaboration capabilities.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Liveblocks", "Convex", "Clerk"],
    imageUrl: miroCloneImg,
    link: "https://next14-miro-clonee.vercel.app/",
  },
  {
    title: "Restaurant Theme",
    description:
      "A modern restaurant website featuring an elegant UI with custom animations, interactive menu sections, and table reservations. Built with performance and accessibility in mind.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Framer", "Radix UI"],
    imageUrl: restaurantImg,
    link: "https://timberandsalt.vercel.app/",
  },
  {
    title: "Polaris Football Academy",
    description:
      "A modern football academy website built with Next.js and TypeScript. Features internationalization support and responsive design using Tailwind CSS.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "SCSS", "i18n"],
    imageUrl: polarisImg,
    link: "https://polarisfootballacademy.vercel.app/en",
  },
  {
    title: "Pokemon App",
    description:
      "A Pokemon web application built with React and Redux Saga. Features include Pokemon listing with dynamic loading, state management, and animated transitions using Framer Motion.",
    tags: ["React", "Redux", "Redux Saga", "Framer Motion", "CSS", "React Router"],
    imageUrl: pokemonImg,
    link: "https://github.com/salihyil/pokemon",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Vue.js",
  "React",
  "Next.js",
  "Node.js",
  "ASP.NET Core",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
