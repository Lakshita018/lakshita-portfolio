import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Education from './sections/Education/Education';
import Skills from './sections/Skills/Skills';
import Experience from './sections/Experience/Experience';
import Project from './sections/Projects/Project';
import NeuralNetworkBG from './components/NeuralNetworkBG'; 
import Contact from './sections/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      {/* Full-screen animated background */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <NeuralNetworkBG />
      </div>

      {/* Foreground content */}
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <Project/>
        <Education />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </Router>
  );
}

export default App;
