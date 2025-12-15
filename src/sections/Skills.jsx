import { skillsFrontend } from "../data";
import { skillsBackend } from "../data";
import { skillsTools } from "../data";
import { motion } from "motion/react"

function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Habilidades</h2>
          <p className="text-neutral-500 mt-2">
            Tecnologias que utilizo no desenvolvimento front-end
          </p>
        </div>

        {/* Frontend */}
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Desenvolvimento Front-end
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skillsFrontend.map((skill) => {
            const Icon = skill.icon;

            return (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ transition: 0.5, delay: 0.5, ease: "easeInOut" }}
                key={skill.id}
                className="p-6 rounded-2xl border bg-neutral-50
                           hover:shadow-lg hover:-translate-y-1
                           transition-all duration-300"
              >
                <Icon className={`text-4xl mb-4 ${skill.color}`} />

                <h4 className="text-lg font-semibold">{skill.name}</h4>

                <span className="text-sm text-neutral-500">{skill.level}</span>
              </motion.div>
            );
          })}
        </div>

        {/* Backend */}
        <h3 className="text-2xl font-semibold mb-8 text-center mt-16">
          Desenvolvimento Backend
        </h3>

        <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ transition: 0.5, delay: 0.5, ease: "easeInOut" }}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skillsBackend.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.id}
                className="p-6 rounded-2xl border bg-neutral-50
                           hover:shadow-lg hover:-translate-y-1
                           transition-all duration-300"
              >
                <Icon className={`text-4xl mb-4 ${skill.color}`} />

                <h4 className="text-lg font-semibold">{skill.name}</h4>

                <span className="text-sm text-neutral-500">{skill.level}</span>
              </div>
            );
          })}
        </motion.div>

        {/* Ferramentas */}
        <h3 className="text-2xl font-semibold mb-8 text-center mt-16">
          Ferramentas e Plataformas
        </h3>
        <motion.div 
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ transition: 0.5, delay: 0.5, ease: "easeInOut" }}
        className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {skillsTools.map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.id}
                className="p-6 rounded-2xl border bg-neutral-50
                           hover:shadow-lg hover:-translate-y-1
                           transition-all duration-300"
              >
                <Icon className={`text-4xl mb-4 ${skill.color}`} />

                <h4 className="text-lg font-semibold">{skill.name}</h4>

                <span className="text-sm text-neutral-500">{skill.level}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
