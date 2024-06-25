import "./service.scss";
import { FaCheckCircle } from "react-icons/fa";

export default function Article({ title, skills, image }) {
  return (
    <article className="services">
      <div className="service_top">
        <div className="icon_container">
          <img src={image} alt={`${title} icon`} />
        </div>
        <h3 className="title">{title}</h3>
      </div>
      <div className="service_middle">
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <FaCheckCircle className="check-icon" />
              <div className="skill_info">
                <p className="skill_name">{skill.name}</p>
                <p className="skill_level">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="service_bottom">
         <button className="btn btn_primary">Read more</button>
      </div> */}
    </article>
  );
}
