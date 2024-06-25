import Article from "./Article.jsx";
import "./service.scss";
import BrushLogo from "../../assets/PaintBrush.png"; 
import FrontEndLogo from "../../assets/frontImage.png";
import BackEndLogo from "../../assets/BackEndLogo.png";


export default function Service() {

  const frontendSkills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Intermediate" },
    { name: "JavaScript", level: "Experienced" },
    { name: "Tailwind", level: "Experienced" },
    { name: "React", level: "Experienced" },
  ];

  const backendSkills = [
    { name: "Node JS", level: "Intermediate" },
    { name: "Express Js", level: "Intermediate" },
    { name: "MySQL", level: "Intermediate"},
    { name: "MongoDB", level: "Experienced" },
  ];

  return (
    <section id="services">
      <div className="services_wrapper">
        <div className="section_header center">
          <h2 className="prim">Services</h2>
          <p className="description">
            I transform your ideas, and consequently your desires, into a
            distinctive web project that both inspires you and captivates your
            consumers
          </p>
        </div>
        <div className="service_group">
          <Article title="UI/UX" skills={backendSkills} image={BrushLogo}/> 
          <Article title="Frontend Developer" skills={frontendSkills} image={FrontEndLogo}/>
          <Article title="Backend Developer" skills={backendSkills} image={BackEndLogo}/>
        </div>
      </div>
    </section>
  );
}
