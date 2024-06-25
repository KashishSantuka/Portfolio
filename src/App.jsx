import "./app.scss";
import HomePage from "./components/homePage/HomePage";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import About from "./components/about/About";
import Service from "./components/service/service";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";




function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <HomePage />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Services">
        <Service />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
