import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Project from "./components/Project";

function App() {
  return (
    <div className="App" id="App">
      <Intro />
      <About />
      <Project />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
