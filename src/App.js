import './App.css';
import About from './components/About';
import Codepayment from './components/Codepayment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Codepayment/>
      <Footer />
    </div>
  );
}

export default App;
