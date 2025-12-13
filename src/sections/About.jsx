function About() {
  return (
    <section id="about" className="pt-24 pb-16 flex flex-col gap-6 text-center">
      <h2 className="text-3xl font-bold">Sobre mim</h2>

      <div className="flex flex-col md:flex-row w-full items-center justify-evenly gap-6 sm:gap-8 px-4 sm:px-6 lg:px-12">
        
        <p className="max-w-96 text-start tracking-widest text-neutral-700 mt-4">
          Olá! Eu sou Michel César, um desenvolvedor front-end apaixonado por
          criar experiências digitais incríveis. Com habilidades em React e
          Tailwind CSS, eu me dedico a construir interfaces modernas,
          responsivas e fáceis de usar. Meu objetivo é transformar ideias em
          realidade através do código, sempre buscando inovação e excelência em
          cada projeto que realizo.
        </p>

        <img
          src="/michel2.jpeg"
          alt="Michel César"
          className="w-40 h-40 sm:w-52 sm:h-52 rounded-full object-cover object-center border-4 border-blue-400 hover:scale-105 transition-all duration-300 ease-in-out"
        />
      </div>
    </section>
  );
}

export default About;
