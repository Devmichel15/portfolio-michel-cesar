import { FaGithub } from "react-icons/fa";
import { SiVercel, SiNetlify, SiRender } from "react-icons/si";
import { FaNodeJs, FaCode } from "react-icons/fa";
import { SiExpress, SiFirebase, SiMongodb, SiPrisma } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import { link } from "motion/react-client";

export const projects = [
  {
    id: 1,
    name: "Cadastro de Usuários",
    image: "/project1.png",
    description:
      "Projeto de cadastro de usuários utilizando React e armazenando os dados no Local Storage do navegador.",
    repo: "https://github.com/Devmichel15/cadastro-de-users",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 2,
    name: "SaaS de gestão financeira",
    image: "/project3.png",
    description:
      "Sistema de gestão financeira para pequenas empresas, com funcionalidades de controle de despesas, receitas e geração de relatórios.",
    repo: "https://github.com/Devmichel15/gestao-ativa-app",
    link: "https://gestao-ativa-app.onrender.com",
    techs: ["React", "Node.js", "Firebase", "Tailwind CSS"],
  },

  {
    id: 3,
    name: "Loja de Acessórios Online",
    image: "/project2.png",
    description:
      "Um website de e-commerce para venda de acessórios de moda, com carrinho de compras e integração com API do Whatsapp.",
    repo: "https://github.com/Devmichel15/Acessory-Store",
    techs: ["HTML", "JavaScript", "CSS"],
  },

  {
    id: 4,
    name: "Landing Page para o Restaurante | Café Del Mar",
    image: "/project4.png",
    description:
      "Landing page para o restaurante Café Del Mar, com informações sobre cardápio e localização.",
    repo: "https://github.com/Devmichel15/site-del-mar",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 5,
    name: "Landing Page para o Influencer | Nuno Baio",
    image: "/project6.png",
    description:
      "Landing page para o influencer Nuno Baio, com informações sobre seus serviços e contato.",
    repo: "https://github.com/Devmichel15/website-nuno-baio",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 6,
    name: "Landing Page para a Influencer | Jessi Madalena",
    image: "/project5.png",
    description:
      "Landing page para a influencer Jessi Madalena, com informações sobre seus serviços e contato.",
    repo: "https://github.com/Devmichel15/site-jessi",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 7,
    name: "Biografia - Prodígio",
    image: "/project7.png",
    description:
      "Website biográfico para o artista Prodígio, apresentando sua carreira e obras.",
    repo: "https://github.com/Devmichel15/site-prodigio",
    link: "https://site-prodigio.onrender.com",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 8,
    name: "website para Dona Flor",
    image: "/project8.png",
    description:
      "Website para a Dona Flor, apresentando seus serviços e informações de contato.",
    repo: "https://github.com/Devmichel15/Dona-Flor",
    link: "https://dona-flor.onrender.com",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  }
];

export const skillsFrontend = [
  {
    id: 1,
    name: "HTML",
    level: "Avançado",
    icon: FaHtml5,
    color: "text-orange-500",
  },
  {
    id: 2,
    name: "CSS",
    level: "Avançado",
    icon: FaCss3Alt,
    color: "text-blue-500",
  },
  {
    id: 3,
    name: "JavaScript",
    level: "Avançado",
    icon: FaJsSquare,
    color: "text-yellow-400",
  },
  {
    id: 4,
    name: "React",
    level: "Intermediário",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    id: 5,
    name: "Tailwind CSS",
    level: "Intermediário",
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  {
    id: 6,
    name: "Framer Motion",
    level: "Básico",
    icon: SiFramer,
    color: "text-pink-500",
  },
];

export const skillsBackend = [
  {
    id: 1,
    name: "Node.js",
    level: "Intermediário",
    icon: FaNodeJs,
    color: "text-green-600",
  },
  {
    id: 2,
    name: "Express",
    level: "Intermediário",
    icon: SiExpress,
    color: "text-neutral-800",
  },
  {
    id: 3,
    name: "Firebase / Firestore",
    level: "Intermediário",
    icon: SiFirebase,
    color: "text-yellow-500",
  },
  {
    id: 4,
    name: "MongoDB",
    level: "Iniciante",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    id: 5,
    name: "Prisma",
    level: "Iniciante",
    icon: SiPrisma,
    color: "text-indigo-500",
  },
];

export const skillsTools = [
  {
    id: 1,
    name: "Git & GitHub",
    level: "Intermediário",
    icon: FaGithub,
    color: "text-neutral-800",
  },
  {
    id: 2,
    name: "VS Code",
    level: "Avançado",
    icon: FaCode,
    color: "text-blue-500",
  },
  {
    id: 3,
    name: "Vercel",
    level: "Intermediário",
    icon: SiVercel,
    color: "text-neutral-900",
  },
  {
    id: 4,
    name: "Netlify",
    level: "Intermediário",
    icon: SiNetlify,
    color: "text-teal-400",
  },
  {
    id: 5,
    name: "Render",
    level: "Avançado",
    icon: SiRender,
    color: "text-indigo-600",
  },
];
