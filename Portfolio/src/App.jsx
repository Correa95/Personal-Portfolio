import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <div className="navigation">
        <SideBar />
      </div>
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
