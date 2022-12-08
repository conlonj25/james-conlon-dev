import NavBar from '../components/Navbar.js';
import About from '../components/About.js';
import Projects from '../components/Projects.js';
import Skills from '../components/Skills.js';
import Testimonials from '../components/Testimonials.js';
import Contact from '../components/Contact.js';

export default function Home() {
  return (
    <div>
      <NavBar />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}