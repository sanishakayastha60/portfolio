import "./App.css";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <div className="container">
      <div className="left-container">
        <img src="" alt="me" />
      </div>
      <div className="right-container">
        <AboutMe/>
        <div>Skills and Technology</div>
        <div>Featured Projects</div>
        <div>Get In Touch</div>
      </div>
    </div>
  );
}
export default App;