import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import taskifyLogo from "../../assets/Taskify.png";
import QuizLogo from "../../assets/quizphoto.jpg";
import MovieLogo from "../../assets/MovieLogo.png";
import UrlImage from "../../assets/UrlLogo.jpg";

const items = [
    {
        id: 1,
        title: "URL Shortner",
        img: UrlImage,
        desc: "A URL shortener application was developed using MongoDB, Express, Node.js, and JavaScript. This application allows users to input a valid URL and receive a shortened URL in return. It features a carefully designed model schema that efficiently stores short IDs, original URLs, and visit history. The application dynamically generates shortened URLs and redirects users to the original URLs. Additionally, it tracks and displays the visit history for each shortened URL, allowing for the monitoring of total visits or clicks on each URL.",
        link:"https://github.com/KashishSantuka/url-shortner"
      },
      {
        id: 2,
        title: "Brain Buzz",
        img: QuizLogo,
        desc: "This React-based quiz app combines dynamic functionality with a responsive CSS design. It features timed questions, shuffled answers, and real-time feedback. Leveraging React Hooks and custom JavaScript, the app ensures efficient state management and smooth performance. With accessibility features and customizable themes, it offers an engaging, inclusive experience across devices.",
         link:"https://github.com/KashishSantuka/BrainBuzz"
      },
      {
        id: 3,
        title: "Movie Search",
        img: MovieLogo,
        desc: "This web application showcases the top 20 movies ranked by rating. Developed using HTML, CSS, and JavaScript, it features a search functionality allowing users to find movies by name. The app provides a user-friendly interface to explore highly-rated films and quickly locate specific titles within the curated list.",
       link:"https://github.com/KashishSantuka/search-movies"
      },
      {
        id: 4,
        title: "Taskify",
        img: taskifyLogo,
        desc: "This ReactJS-based project management application offers robust task and project tracking capabilities. Featuring an intuitive interface built with TailwindCSS, it allows users to efficiently create, edit, and delete projects and tasks. The app streamlines workflow management, providing a comprehensive solution for project oversight and task organization",
       link:"https://github.com/KashishSantuka/Taskify"
      },
];

const Single = ({ item }) => {

    const ref=useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
      });

      const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

      const handleSelectorFunction = (link) => {
        window.open(link, '_blank');
    }


  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => handleSelectorFunction(item.link)}>See Demo</button>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};
