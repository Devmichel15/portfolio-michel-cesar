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

export const projects = [
  
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
    link: "https://acessory-store.onrender.com",
    techs: ["Reactjs", "Tailwindcss", "AppWrite"],
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
    name: "Webstart Academy | plataforma de cursos online",
    image: "/project5.png",
    description:
      "Plataforma de cursos online desenvolvida para a Webstart Academy, oferecendo uma experiência de aprendizado interativa e acessível, com recursos de inscrição, acompanhamento de progresso e suporte ao aluno.",
    repo: "",
    link: "https://webstart-academy.onrender.com/",
    techs: ["React", "JavaScript", "Tailwind CSS", "FireBase"],
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

  {
    id: 12,
    name: "Sistema de Tradução de idiomas",
    image: "/project12.png",
    description: "Sistema de tradução de idiomas desenvolvido com React e Tailwindcss, utilizando a API do My Memory API para fornecer traduções precisas e rápidas. O sistema apresenta uma interface intuitiva, permitindo que os usuários insiram texto e selecionem os idiomas de origem e destino, facilitando a comunicação global de forma eficiente.",
    repo: "https://github.com/Devmichel15/google-translate",
    link: "https://google-translate-aqqr.onrender.com",
    techs: ["React", "JavaScript", "TailwindCss"]
  },

  {
    id: 13,
    name: "TeenAviva",
    image: "/project13.png",
    description: "TeenAviva é uma aplicação mobile desenvolvida para proporcionar uma experiência digital moderna e interativa para jovens. O projeto foi desenvolvido com foco em uma interface intuitiva, navegação fluida e uma experiência mobile otimizada.",
    repo: "",
    link: "https://teenaviva-app.onrender.com/",
    techs: ["React Native", "Expo", "Expo Go", "JavaScript"]
  },

  {
    id: 14,
    name: "NeonWave",
    image: "/project14.png",
    description: "NeonWave é um website moderno desenvolvido com uma abordagem visual criativa e futurista. O projeto destaca-se pela sua identidade visual, interface dinâmica e experiência imersiva, explorando elementos modernos de web design.",
    repo: "",
    link: "https://website-neonwave.onrender.com/",
    techs: ["React", "JavaScript", "Tailwindcss", "Firebase"]
  },

  {
    id: 15,
    name: "XE Homem",
    image: "/project15.png",
    description: "XE Homem é uma plataforma web desenvolvida com foco em apresentar uma experiência digital moderna, organizada e responsiva. O projeto prioriza uma interface intuitiva, design visual e boa experiência de navegação.",
    repo: "",
    link: "https://xe-homem.onrender.com/",
    techs: ["React", "JavaScript", "Tailwindcss", "Firebase"]
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
  {
    id: 8,
    name: "PHP",
    level: "Iniciante",
    icon: FaCode, // Usando um ícone genérico para PHP
    color: "text-purple-600",
  }
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
