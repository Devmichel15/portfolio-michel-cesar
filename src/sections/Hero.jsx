import Header from "../components/Header";
import { motion } from "motion/react";
import { FaGithub, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section className="relative h-screen w-full">
      <Header />

      <div className="h-full w-full bg-[url('/bg-hero.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
        >
          Olá, eu sou Michel César :)
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.75 }}
          className="text-base sm:text-lg md:text-xl mb-6 text-neutral-700 max-w-2xl"
        >
          Desenvolvedor Front-end | React | Tailwind CSS
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          href="#projects"
          className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-blue-500 hover:bg-neutral-100 transition"
        >
          Ver meus projetos
        </motion.a>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.25 }}
          className="flex gap-6 justify-center mt-6"
        >
          <a
            href="https://github.com/devmichel15"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-gray-900 hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/dev_angolano1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-neutral-900 hover:scale-110 transition-transform"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
