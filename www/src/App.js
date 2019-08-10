import React from 'react';
import About from './about/about.js'
import Contact from './contact/contact.js'
import Footer from './footer/footer.js'
import Header from './header/header.js'
import Portfolio from './portfolio/portfolio.js'
import Resume from './resume/resume.js'
import Testimonials from './testimonials/testimonials.js'
import Logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Contact />
      <Resume />
      <Portfolio />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
