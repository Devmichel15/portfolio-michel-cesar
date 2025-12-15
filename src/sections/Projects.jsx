import { projects } from "../data";
import { FaGithub } from "react-icons/fa6";
import { motion } from "motion/react"

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
      <p className="text-lg text-gray-700">
        Aqui estão alguns dos meus projectos recentes. Sinta-se à vontade para
        explorá-los!
      </p>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ transition: 0.5, delay: 0.5, ease: "easeInOut" }}
            key={project.id}
            className="w-full h-full max-w-80 text-center bg-white rounded-lg shadow-md p-6 m-3 flex flex-col items-center hover:scale-105 transition-all duraction-300 ease-in-out"
          >
            <div>
                <img className="w-64 h-52 rounded-lg object-cover object-center" src={project.image} alt={project.name} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">{project.name}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a href={project.link} target="_blank" className="bg-blue-500 text-neutral-700 rounded-3xl p-3 hover:underline flex items-center justify-evenly">
                Ver Repositório {""}
                {""}<FaGithub className="text-neutral-900 font-bold scale-105"/> 
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
