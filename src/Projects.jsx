
import { PROJECTS_DATA } from "./constants";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {PROJECTS_DATA.map((project, index) => (
          <div key={index} className="project-card glass">
            <div className="project-img-wrapper">
              <img src={project.img} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> View Code
                  </a>
                  {project.demoLink && project.demoLink !== "#" && (
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="project-info">
              <h3 className="project-name">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
