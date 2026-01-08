import "./App.css";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AccordionItem from './AccordionItem'
function App() {
  return (
    <div className="container">
      <div className="left-container">
        <img src="" alt="me" />
      </div>
      <div className="right-container">
        <AccordionItem title="About Me">
        <AboutMe/>
        </AccordionItem>
        <AccordionItem title="Skills and Technology">
        <Skills/>
        </AccordionItem>
        <AccordionItem title="Featured Projects">
        <Projects/>
        </AccordionItem>
        <AccordionItem title="Get In Touch">
        <Contact/>
        </AccordionItem>
      </div>
    </div>
  );
}
export default App;