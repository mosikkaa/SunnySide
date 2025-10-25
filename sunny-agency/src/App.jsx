import React from 'react';
import './App.css'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Client from './components/client.jsx'
import Projects from "./components/projects.jsx";
import Footer from "./components/footer.jsx";

function App() {

  return (
      <>
          <Home/>
          <About/>
          <Client/>
          <Projects/>
          <Footer/>
      </>
  )
}

export default App
