import { useState } from "react";
import Button from "../Button/Button";
import "../NavBar/NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSearch, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <nav className="navbar-content">
        <a className="logo" href="#home">
          nullBrains.
        </a>

        <div className={`menu-container ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-menu">
            <li>
              <a href="#home" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li>
              <a href="#features" onClick={closeMenu}>
                Features
              </a>
            </li>
            <li>
              <a href="#blog" onClick={closeMenu}>
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
            <li>
              <a
                style={{ cursor: "pointer" }}
                onClick={closeMenu}
                role="button"
                aria-label="Search">
                <FontAwesomeIcon icon={faSearch} />
              </a>
            </li>
          </ul>

          <div className="auth-buttons">
            <Button variant="signIn">Sign In</Button>
            <Button variant="signUp">Sign Up</Button>
          </div>
        </div>

        <div className="mobile-menu" onClick={handleMenu}>
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} size="lg" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
