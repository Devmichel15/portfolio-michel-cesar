import { useRef } from "react";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import {
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

/**
 * Contact Section
 * Refined form with standardized GSAP scroll animations and premium interactions
 */
function Contact() {
  const containerRef = useRef(null);

  // Apply centralized scroll animation
  useAnimateOnScroll(".contact-anim", { y: 30, stagger: 0.1 }, containerRef);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-32 px-6 bg-premium-bg border-t border-white/5 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-premium-accent/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <header className="contact-anim text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tighter uppercase italic">
            Vamos Conversar?
          </h2>
          <p className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Interessado em escalar sua visão digital?{" "}
            <span className="text-white font-medium">
              Vamos construir algo memorável.
            </span>
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Channels */}
          <div className="space-y-10 contact-anim">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Canais Diretos
            </h3>

            {[
              {
                icon: FaWhatsapp,
                label: "WhatsApp",
                val: "(+244) 928 536 339",
                href: "https://wa.me/244928536339",
                color: "group-hover:text-green-500",
              },
              {
                icon: FaEnvelope,
                label: "Email",
                val: "httpmichel15cesar@gmail.com",
                href: "mailto:httpmichel15cesar@gmail.com",
                color: "group-hover:text-blue-500",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-premium-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-premium-accent/5"
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-stone-500 transition-all duration-500 ${item.color} group-hover:scale-110 group-hover:bg-white/10`}
                >
                  <item.icon size={26} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-stone-600 font-black mb-1.5">
                    Dúvidas ou Propostas?
                  </p>
                  <p className="text-white font-bold tracking-tight text-lg md:text-xl">
                    {item.val}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form className="contact-anim bg-premium-card p-10 md:p-12 rounded-[40px] border border-white/5 shadow-2xl space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  label: "Seu Nome",
                  type: "text",
                  placeholder: "Como se chama?",
                },
                {
                  label: "Seu Email",
                  type: "email",
                  placeholder: "exemplo@email.com",
                },
              ].map((field, i) => (
                <div key={i} className="group">
                  <label className="block text-[10px] uppercase tracking-[0.3em] text-stone-600 font-black mb-3 group-focus-within:text-premium-accent transition-colors">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-premium-bg border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-premium-accent transition-all placeholder:text-stone-800 font-medium"
                  />
                </div>
              ))}
            </div>

            <div className="group">
              <label className="block text-[10px] uppercase tracking-[0.3em] text-stone-600 font-black mb-3 group-focus-within:text-premium-accent transition-colors">
                Sua Mensagem
              </label>
              <textarea
                rows="4"
                placeholder="Fale brevemente sobre seu projeto ou ideia..."
                className="w-full bg-premium-bg border border-white/10 rounded-2xl p-5 text-white outline-none focus:border-premium-accent transition-all resize-none placeholder:text-stone-800 font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black font-black py-6 rounded-2xl hover:bg-premium-accent hover:text-white transition-all duration-500 flex items-center justify-center gap-4 active:scale-95 group relative overflow-hidden"
            >
              <span className="relative z-10 italic tracking-widest text-xs flex items-center gap-3">
                ENVIAR MENSAGEM{" "}
                <FaPaperPlane
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </span>
              <div className="absolute inset-0 bg-premium-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </form>
        </div>

        {/* Footer-like closer */}
        <footer className="contact-anim mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40">
          <p className="text-stone-500 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Michel César — Built with Precision
          </p>
          <div className="flex gap-10">
            <a
              href="https://github.com/devmichel15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:scale-125 transition-transform"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.instagram.com/dev_angolano1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 hover:scale-125 transition-transform"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
