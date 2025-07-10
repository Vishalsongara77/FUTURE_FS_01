import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import weather from "./assets/weather.png";
import library from "./assets/library.png";

const Projects = () => {
  return (
    <div className="projects-container">
      <div id="projects" className="projects-title">
        <h1>Projects</h1>
      </div>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <img src={library} alt="Library Portal" className="project-img" />
          <h3>Library Portal</h3>
          <p>
            A library Portal built using React.js, CSS, and SQL. Includes user-friendly components like book cards, navigation bar and guest access functionality.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Vishalsongara77/local-library-portal"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FontAwesomeIcon icon={faGithub} /> View Code
            </a>
          </div>
        </div>
        <div className="project-card">
          <img src={weather} alt="Weather App" className="project-img" />
          <h3>Weather App</h3>
          <p>
            A responsive weather application built with React.js and CSS. Fetches real-time weather data from a public API, displays current conditions and forecasts, and allows users to search for any city worldwide.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/Vishalsongara77/Future_FS-01"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FontAwesomeIcon icon={faGithub} /> View Code
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
