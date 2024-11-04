import "./HamburgerMenu.css";

function HamburgerMenu({ toggleSidebar }) {
  return (
    <div className="hamburger" onClick={toggleSidebar}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
}

export default HamburgerMenu;
