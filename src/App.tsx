import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Cursor from './components/Cursor';

export default function App() {
  return (
    <div>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <CommandPalette />
    </div>
  );
}
