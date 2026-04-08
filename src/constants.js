
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaBootstrap, FaLinkedin, FaGithub, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { SiMysql, SiVite, SiCplusplus, SiGoogle } from "react-icons/si";

import weather from "./assets/weather.png";
import tasky from "./assets/tasky.png";
import e_commerce from "./assets/e_commerce.png";
import TicTacToe from "./assets/TicTacToe.png";


export const NAVIGATION_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const HERO_DATA = {
  name: "Vishal",
  roles: ["Web Developer", "Software Developer", "Engineer"],
  description: "Coding with purpose, learning with passion, building for impact.",
  socials: [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/vishal-songara/" },
    { icon: FaGithub, url: "https://github.com/Vishalsongara77" },
  ],
};

export const SKILLS_DATA = [
  { name: "HTML", icon: FaHtml5, color: "#e34c26" },
  { name: "CSS", icon: FaCss3Alt, color: "#264de4" },
  { name: "JavaScript", icon: FaJs, color: "#f7df1e" },
  { name: "React", icon: FaReact, color: "#61dafb" },
  { name: "MySQL", icon: SiMysql, color: "#00758f" },
  { name: "C++", icon: SiCplusplus, color: "#00599C" },
  { name: "Git", icon: FaGitAlt, color: "#f34f29" },
  { name: "Vite", icon: SiVite, color: "#646cff" },
];

export const PROJECTS_DATA = [
  {
    title: "E-commerce",
    description: "A repository of my LeetCode solutions, showcasing problem-solving skills in C++ and JavaScript.",
    img: e_commerce,
    link: "https://github.com/Vishalsongara77/E-Commerce",
    demoLink: "https://e-commerce-ui-drab.vercel.app/",
  },
  {
    title: "Task App",
    description: "A full-stack application for managing tasks using React, Node.js, and MongoDB.",
    img: tasky,
    link: "https://github.com/Vishalsongara77/Task-App",
    demoLink: "https://task-app-ui-rho.vercel.app/",
  },
  {
    title: "Weather App",
    description: "Built using React and OpenWeatherMap API, providing real-time weather updates with a sleek UI.",
    img: weather,
    link: "https://github.com/Vishalsongara77/Weather-App",
    demoLink: "https://vishalsongara77.github.io/Weather-App/",
  },
  {
    title: "Tic-Tac-Toe",
    description: "A fun and interactive game built with React, demonstrating state management and game logic.",
    img: TicTacToe,
    link: "https://github.com/Vishalsongara77/Tic-Tac-Toe",
    demoLink: "https://vishalsongara77.github.io/Tic-Tac-Toe/",
  },
];

export const CONTACT_INFO = [
  { icon: SiGoogle, label: "vishal26songara@gmail.com", link: "mailto:vishal26songara@gmail.com" },
  { icon: FaWhatsapp, label: "+91 9460772077", link: "https://wa.me/919460772077" },
  { icon: FaMapMarkerAlt, label: "Jaipur, Rajasthan, India", link: "#" },
];
