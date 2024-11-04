import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import SideBar from "./Components/SideBar";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import HamburgerMenu from "./Components/HamburgerMenu"; // Assume this is a component for the hamburger menu

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <div className={`navigation ${isSidebarOpen ? "open" : ""}`}>
        <HamburgerMenu toggleSidebar={toggleSidebar} />
        <SideBar />
      </div>
      <div className={`mainContent ${isSidebarOpen ? "shift" : ""}`}>
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
