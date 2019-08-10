import React from 'react';
import About from './about/about.js'
import Footer from './footer/footer.js'
import Header from './header/header.js'
import Resume from './resume/resume.js'
import Logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Footer />
    </div>
  );
}

export default App;
