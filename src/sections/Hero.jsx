import Header from "../components/Header";

function Hero() {
  return (
    <section className="relative h-screen w-full">
        <Header></Header>
      <div className="h-full w-full bg-[url('/bg-hero.jpg')] bg-cover bg-top bg-no-repeat flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Olá, eu sou Michel César :)
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-6 text-neutral-700 max-w-2xl">
          Desenvolvedor Front-end | React | Tailwind CSS
        </p>

        <a
          href="#projetos"
          className="bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-blue-500 hover:bg-neutral-100 transition"
        >
          Ver meus projetos
        </a>
      </div>
    </section>
  );
}

export default Hero;
