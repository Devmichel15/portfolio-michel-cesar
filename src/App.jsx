import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./components/Footer";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
function App(){

  return(
    <div className="">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;