function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo / Nome */}
        <div className="text-xl font-semibold tracking-tight text-neutral-900">
          Michel César
        </div>

        {/* Navegação */}
        <nav className="hidden gap-8 md:flex">
          <a
            href="#about"
            className="text-sm font-medium text-neutral-700 transition hover:text-neutral-900"
          >
            Sobre
          </a>
          <a
            href="#projects"
            className="text-sm font-medium text-neutral-700 transition-all duraction-300 ease-in-out hover:text-neutral-900"
          >
            Projetos
          </a>
          <a
            href="#skills"
            className="text-sm font-medium text-neutral-700 transition-all duraction-300 ease-in-out hover:text-neutral-900"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-neutral-700 transition-all duraction-300 ease-in-out hover:text-neutral-900"
          >
            Contato
          </a>
        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/244928536339?text=Olá%20Michel,%20vi%20seu%20portfólio"
          target="_blank"
          className="rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-all duraction-300 ease-in-out hover:bg-neutral-800 hover:scale-105 "
        >
          Fale comigo
        </a>
      </div>
    </header>
  );
}

export default Header;
