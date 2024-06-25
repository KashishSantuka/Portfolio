import "./about.scss";
import KashishLogo from "../../assets/KashishLogo.jpg";

export default function About() {
    return (
        <div className="about">
            <section className="imageContainer">
                <img src={KashishLogo} alt="My Picture"/>
            </section>
            <div className="content">
                <h1>About <span>ME</span></h1>
            <h3>Frontened Developer</h3>
            <p>Hi there! My name is Kashish Santuka and I'm a Frontend React Developer. With a strong foundation in web development, I thrive on tackling complex challenges and delivering high-quality results. Let's connect and explore how we can collaborate to drive impactful projects forward.</p>
            </div>
         </div>
    )
}