import "./navbar.scss";
import GitHubLogo from "../../assets/GitHub.png";
// import DiscordLogo from "../../assets/DiscordLogo.png";
import LinkedInLogo from "../../assets/LinkedIn.png";
import TwitterLogo from "../../assets/Twitter.png";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

export default function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Kashish Santuka */}
        </motion.span>
        <div className="social">
        <a href="https://x.com/santukaKashish">
            <img src={TwitterLogo} alt="" />
          </a>
          <a href="https://github.com/KashishSantuka">
            <img src={GitHubLogo} alt="" />
          </a>
          <a href="https://linkedin.com/in/kashishsantuka">
            <img src={LinkedInLogo} alt="" />
          </a>
         
          {/* <a href="https://discordapp.com/users/.759478326137585720">
            <img src={DiscordLogo} alt="" />
          </a> */}
        </div>
      </div>
    </div>
  );
}
