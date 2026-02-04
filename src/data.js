import { FaGithub } from "react-icons/fa";
import { SiVercel, SiNetlify, SiRender, SiSupabase } from "react-icons/si";
import { FaNodeJs, FaCode } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiGit,
  SiGreensock,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";
import { img } from "motion/react-client";

export const projects = [
  {
    id: 1,
    name: "Cadastro de Usuários",
    image: "/project1.png",
    description:
      "Aplicação full-stack para cadastro e gestão de usuários, com autenticação, persistência de dados em tempo real e integração com banco de dados PostgreSQL via Supabase. Ideal para sistemas que exigem controle e segurança de informações.",
    repo: "https://github.com/Devmichel15/cadastro-de-users",
    link: "https://cadastro-de-users.onrender.com",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 2,
    name: "SaaS de Gestão Financeira",
    image: "/project3.png",
    description:
      "Plataforma SaaS desenvolvida para pequenas empresas controlarem despesas, receitas e desempenho financeiro. O sistema gera relatórios claros para apoiar decisões estratégicas e melhorar a saúde financeira do negócio.",
    repo: "https://github.com/Devmichel15/gestao-ativa-app",
    link: "https://gestao-ativa-app.onrender.com",
    techs: ["React", "Node.js", "Firebase", "Tailwind CSS"],
  },

  {
    id: 3,
    name: "Loja de Acessórios Online",
    image: "/project2.png",
    description:
      "E-commerce moderno para venda de acessórios, com catálogo organizado, carrinho de compras e integração direta com WhatsApp para facilitar pedidos e aumentar a taxa de conversão.",
    repo: "https://github.com/Devmichel15/Acessory-Store",
    techs: ["HTML", "JavaScript", "CSS"],
  },

  {
    id: 4,
    name: "Landing Page | Restaurante Café Del Mar",
    image: "/project4.png",
    description:
      "Landing page profissional criada para fortalecer a presença digital do restaurante, destacando cardápio, localização e identidade visual, com foco em atrair clientes e aumentar reservas.",
    repo: "https://github.com/Devmichel15/site-del-mar",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 5,
    name: "Landing Page | Influencer Nuno Baio",
    image: "/project6.png",
    description:
      "Website pessoal desenvolvido para posicionar o influencer como marca, apresentando serviços, propostas comerciais e canais de contato de forma clara e estratégica.",
    repo: "https://github.com/Devmichel15/website-nuno-baio",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 6,
    name: "Landing Page | Influencer Jessi Madalena",
    image: "/project5.png",
    description:
      "Landing page focada em conversão, criada para apresentar serviços, fortalecer a imagem pessoal da influencer e facilitar o contato com marcas e parceiros.",
    repo: "https://github.com/Devmichel15/site-jessi",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 7,
    name: "Biografia Digital | Prodígio",
    image: "/project7.png",
    description:
      "Website biográfico desenvolvido para o artista Prodígio, destacando sua trajetória, obras e identidade cultural, com um design moderno e responsivo.",
    repo: "https://github.com/Devmichel15/site-prodigio",
    link: "https://site-prodigio.onrender.com",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 8,
    name: "Website Institucional | Dona Flor",
    image: "/project8.png",
    description:
      "Website institucional criado para apresentar serviços, transmitir credibilidade e facilitar o contato com clientes, reforçando a presença online do negócio.",
    repo: "https://github.com/Devmichel15/Dona-Flor",
    link: "https://dona-flor.onrender.com",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    id: 9,
    name: "Website | Restaurante Pôr do Sol",
    image: "/project9.png",
    description:
      "Website moderno e responsivo para restaurante, focado em apresentar o ambiente, cardápio e localização, ajudando a atrair clientes e fortalecer a marca.",
    repo: "https://github.com/Devmichel15/por-do-sol",
    link: "https://por-do-sol.onrender.com",
    techs: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 10,
    name: "Site Artístico | Ghost Arte",
    image: "/project10.png",
    description:
      "Ghost Artes é um site experimental focado em arte urbana e digital, com design moderno, layout responsivo e animações suaves que reforçam a experiência visual. Desenvolvido com React, Tailwind CSS e GSAP, priorizando performance e mobile-first.",
    repo: "https://github.com/Devmichel15/site-ghost-art",
    link: "https://site-ghost-art.onrender.com/",
    techs: ["React", "JavaScript", "TailwindCss", "Framer motion", "Gsap"],
  },
  {
    id: 11,
    name: "Ecommerce | Mateia",
    image: "/project11.png",
    description:
      "Mateia E-commerce é uma loja online desenvolvida com foco em experiência de compra intuitiva, design responsivo e navegação fluida em todas as telas. A plataforma permite que usuários explorem produtos, visualizem detalhes e interajam com um fluxo de compra otimizado, seguindo boas práticas de e-commerce moderno. Tecnologias aplicadas incluem React, Tailwind CSS e princípios de mobile-first design, garantindo performance, acessibilidade e usabilidade consistentes em dispositivos móveis e desktops.",
    repo: "https://github.com/Devmichel15/mateia-ecommerce",
    link: "https://mateia-ecommerce.onrender.com/",
    techs: ["React", "JavaScript", "TailwindCss"]
  },
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
    level: "Avançado",
    icon: SiFramer,
    color: "text-pink-500",
  },
  {
    id: 7,
    name: "GSAP",
    level: "Intermediário",
    icon: SiGreensock,
    color: "text-[#88CE02]",
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
    name: "PostgreSQL",
    level: "Iniciante",
    icon: SiPostgresql,
    color: "text-blue-600",
  },
  {
    id: 3,
    name: "Express",
    level: "Intermediário",
    icon: SiExpress,
    color: "text-neutral-800",
  },
  {
    id: 4,
    name: "Firebase / Firestore",
    level: "Intermediário",
    icon: SiFirebase,
    color: "text-yellow-500",
  },
  {
    id: 5,
    name: "MongoDB",
    level: "Iniciante",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    id: 6,
    name: "Prisma",
    level: "Iniciante",
    icon: SiPrisma,
    color: "text-indigo-500",
  },
  {
    id: 7,
    name: "Supabase",
    level: "Intermediário",
    icon: SiSupabase, // se estiver usando os ícones do react-icons
    color: "text-green-500",
  },
];

export const skillsTools = [
  {
    id: 1,
    name: "GitHub",
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
  {
    id: 6,
    name: "Git",
    level: "Intermediário",
    icon: SiGit,
    color: "text-red-500",
  },
];
