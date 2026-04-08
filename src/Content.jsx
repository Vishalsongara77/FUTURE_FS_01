
import { HERO_DATA } from "./constants";
import vishal_resume from "./assets/vishal_resume.pdf";
import Orb from "./Orb.jsx";

const Content = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1 className="home-content-heading">
          Hi, It's <span className="gradient-text">{HERO_DATA.name}</span>
        </h1>
        <h3 className="home-text">
          I'm a{" "}
          <span className="word-switch">
            {HERO_DATA.roles.map((role, index) => (
              <span key={index} className="word gradient-text">
                {role}
              </span>
            ))}
          </span>
        </h3>
        <p>{HERO_DATA.description}</p>

        <div className="resume-icon-container">
          <div className="resume-wrapper">
            <a href={vishal_resume} target="_blank" rel="noopener noreferrer">
              <button className="resume-button">
                <span className="default-text">My Resume</span>
                <span className="hover-text">Download</span>
              </button>
            </a>
          </div>
          <div className="social-icons">
            {HERO_DATA.socials.map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon color="white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="home-img-container">
        <Orb hoverIntensity={0.5} rotateOnHover={true} hue={0} forceHoverState={false} />
      </div>
    </section>
  );
};

export default Content;
