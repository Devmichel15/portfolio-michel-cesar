import { useRef } from "react";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import { skillsFrontend, skillsBackend, skillsTools } from "../data";

/**
 * Skills Section (Ecosystem)
 * Displays technolgy stack with standardized GSAP scroll animations
 */
function Skills() {
  const containerRef = useRef(null);

  // Apply centralized scroll animation to all items
  useAnimateOnScroll(
    ".skill-item",
    { y: 20, stagger: 0.05, start: "top 90%" },
    containerRef,
  );

  const renderCategory = (title, skills) => (
    <div className="space-y-8">
      <h3 className="text-lg font-black text-white flex items-center gap-3 uppercase tracking-widest">
        <span className="w-1.5 h-6 bg-premium-accent rounded-full" />
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.id}
              className="skill-item group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-premium-accent/30 hover:bg-white/8 transition-all duration-500 hover:scale-105 active:scale-95"
            >
              <div className="p-2 rounded-xl bg-white/5 text-stone-400 group-hover:text-white group-hover:bg-premium-accent/10 transition-all duration-500">
                <Icon className="text-2xl" />
              </div>
              <span className="text-sm font-bold text-stone-500 group-hover:text-white transition-colors tracking-tight">
                {skill.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-32 bg-premium-bg border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter italic">
            Meu Ecossistema
          </h2>
          <p className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Minha stack é focada em ferramentas que garantem{" "}
            <span className="text-white font-medium italic">
              performance, escalabilidade e manutenibilidade
            </span>
            .
          </p>
        </header>

        <div className="grid gap-16 md:grid-cols-3">
          {renderCategory("Frontend", skillsFrontend)}
          {renderCategory("Backend", skillsBackend)}
          {renderCategory("Platform", skillsTools)}
        </div>
      </div>

      {/* Decorative accent blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-premium-accent/5 blur-[120px] rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />
    </section>
  );
}

export default Skills;
