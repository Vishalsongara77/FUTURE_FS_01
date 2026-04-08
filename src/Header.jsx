
import { useEffect, useState } from "react";
import { NAVIGATION_LINKS } from "./constants";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`header ${scrolled ? "header-bg" : ""}`}>
      <nav className="nav-bar">
        <ul className={`navigation-list ${isMenuOpen ? "active" : ""}`}>
          {NAVIGATION_LINKS.map((link) => (
            <li key={link.href} onClick={() => setIsMenuOpen(false)}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="connect-wrapper">
        <a href="#contact" className="connect">
          Connect With Me
        </a>
      </div>

      <div className={`hamburger ${isMenuOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
