import { useRef } from "react";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

function Contact() {
  const containerRef = useRef(null);

  useAnimateOnScroll(".contact-anim", { y: 30, stagger: 0.1 }, containerRef);

  return (
    <section
      id="contact"
      ref={containerRef}
      className="relative py-20 px-4 sm:px-6 md:py-32 bg-premium-bg border-t border-white/5 overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 md:w-150 md:h-150 bg-premium-accent/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="contact-anim text-center mb-16 md:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 tracking-tighter uppercase italic">
            Vamos Conversar?
          </h2>
          <p className="text-stone-400 text-sm sm:text-base md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Interessado em escalar sua visão digital?{" "}
            <span className="text-white font-medium">
              Vamos construir algo memorável.
            </span>
          </p>
        </header>

        {/* Channels */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch md:items-center justify-between">
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
              className="group w-full flex items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-white/5 border border-white/5 transition-all duration-500 hover:border-premium-accent/30 hover:shadow-2xl hover:shadow-premium-accent/5"
            >
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl sm:rounded-2xl bg-white/5 text-stone-500 transition-all duration-500 ${item.color} group-hover:scale-110 group-hover:bg-white/10`}
              >
                <item.icon size={22} />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-stone-600 font-black">
                  Dúvidas ou Propostas?
                </p>
                <p className="text-white font-bold tracking-tight text-sm sm:text-base md:text-xl truncate">
                  {item.val}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Footer */}
        <footer className="contact-anim mt-20 md:mt-32 pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
          <p className="text-stone-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-center md:text-left">
            © {new Date().getFullYear()} Michel César — Built with Precision
          </p>

          <div className="flex gap-8">
            <a
              href="https://github.com/devmichel15"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-transform hover:scale-125"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.instagram.com/dev_angolano1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-transform hover:text-pink-500 hover:scale-125"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
