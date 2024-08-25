
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Expertise from './components/expertise/Expertise';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Coming from './components/comingSoon/ComingSoon';

function App() {
  return (
   <>
    <Header />
    <main className="pt-16"> {/* Adds padding to avoid overlap with fixed header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comingSoon" element={<Coming />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </main>
   </>
  );
}

export default App;
