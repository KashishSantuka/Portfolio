import "./about.scss";
import KashishLogo from "../../assets/KashishPhoto.jpg";

export default function About() {
    return (
        <div className="about">
            <section className="imageContainer">
                <img src={KashishLogo} alt="My Picture"/>
            </section>
            <div className="content">
                <h1>About <span>ME</span></h1>
            <h3>Full Stack Developer</h3>
            <p>Hi, I’m Kashish Santuka, a Full Stack Developer with over 1 year of experience building modern, scalable web applications and delivering reliable solutions with real-world impact.I’ve worked on AI-driven systems, including AI agents, which broadened my perspective on intelligent application design. I’m highly motivated to continuously learn new technologies, explore evolving architectures, and contribute meaningfully to impactful products.I’m always eager to build, learn, and collaborate.</p>
            </div>
         </div>
    )
}