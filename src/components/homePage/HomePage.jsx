import { animate, motion } from "framer-motion";
import MouseImg from "../../assets/scroll.png";
import "./homePage.scss";
import "../sidebar/links/Links";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// const slideVariants = {
//     initial: {
//         x: 0,
//     },
//     animate: {
//         x: "-220",
//         transition: {
//             repeat: Infinity,
//             repeatType: "mirror",
//             duration: 20,
//         },
//     },
// };
// const handleResumeClick = () => {
//   console.log(handleResumeClick);
//   window.open(
//     "https://drive.google.com/file/d/1GNYfhYwUuMnc3YzMRvqPGFfJFvgT2Qg2/view?usp=sharing",
//     "_blank"
//   );
// };

const handleResumeClick = () => {
  console.log(handleResumeClick);
  window.open(
    "https://drive.google.com/file/d/1zO3q2EmSOn0SNFmIYnyC7yrpo2LrZqV2/view?usp=drive_link",
    "_blank"
  );
};

const handleContactClick = () => {
  const contactSection = document.getElementById("Contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HomePage() {
  return (
    <div className="homePage">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>KASHISH SANTUKA</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack & Agentic AI Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button  variants={textVariants} onClick={handleResumeClick}>Resume</motion.button>
            <motion.button variants={textVariants} onClick={handleContactClick}>
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={MouseImg}
            alt=""
          />
        </motion.div>
        <div className="slidingTextContainer">Developer</div>
      </div>
      {/* <div className="imageContainer">
                <img src={}/>
            </div> */}
    </div>
  );
}
