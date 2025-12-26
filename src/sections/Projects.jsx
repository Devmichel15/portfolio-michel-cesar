import { projects } from "../data";
import { FaGithub } from "react-icons/fa6";
import { motion } from "motion/react";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center p-4 bg-white mt-14"
    >
      <motion.h2
        initial={{ opacity: 1, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ transition: 0.5, delay: 0.5, ease: "easeInOut" }}
        className="text-3xl font-bold mb-8 mt-8"
      >
        Meus Projectos
      </motion.h2>
      <p className=" text-gray-700 mb-8 text-2xl">
        Aqui estão alguns dos meus projectos recentes. Sinta-se à vontade para
        explorá-los!
      </p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-3">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            {/* Imagem do projeto */}
            <div className="w-full h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>

            {/* Conteúdo */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-3">{project.name}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3 mt-4">
                <a
                  href={project.repo}
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-blue-500 text-white rounded-full px-4 py-2 hover:bg-blue-600 transition"
                >
                  Repositório <FaGithub className="scale-105" />
                </a>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center justify-center bg-green-500 text-white rounded-full px-4 py-2 hover:bg-green-600 transition"
                  >
                    Visitar Site
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
