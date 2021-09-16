import './App.css';
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
      <>
          <NavBar/>
        <Home/>
        <Education id="education"/>
        <Projects id="projects"/>
        <Resume id="resume"/>
        <Contact id="contact"/>
          <Footer/>
      </>
  );
}

export default App;
