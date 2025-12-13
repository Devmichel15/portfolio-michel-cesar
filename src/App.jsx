import Hero from "./sections/Hero";
import About from "./sections/About";
import Footer from "./components/Footer";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App(){

  return(
    <div className="">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;