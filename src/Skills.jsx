
import { SKILLS_DATA } from "./constants";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid-container">
        {SKILLS_DATA.map((skill, index) => (
          <div key={index} className="skill-card-grid glass">
            <div className="skill-icon-grid">
              <skill.icon color={skill.color} />
            </div>
            <p className="skill-name-grid">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
