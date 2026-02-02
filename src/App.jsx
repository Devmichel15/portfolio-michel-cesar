import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";

function App() {
  return (
    <main className="relative min-h-screen bg-premium-bg selection:bg-premium-accent selection:text-white">
      {/* Global Animated Grid Background */}
      <div className="bg-grid fixed inset-0 pointer-events-none z-0" />

      <div className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
}

export default App;
