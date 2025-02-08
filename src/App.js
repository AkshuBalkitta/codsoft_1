import Navbar from "./components/NavBar/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import Projects from './components/Projects/project';
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/project" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      </Router>
      <Footer/>
    </div>
  );
}
export default App;
