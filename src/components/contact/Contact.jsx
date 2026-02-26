import "./contact.scss";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
  name: "",
  email: "",
  message: "",
});
  const [error, setError] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if(success){
setTimeout(() => {
    setSuccess(false)
},4000)
    }
      
  }, [success])

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_fxbqske", "template_4tbr02r", formRef.current, {
        publicKey: "vfWCLb3dG3-y2-5T8",
      })
     .then(
  (result) => {
    setSuccess(true);
    formRef.current.reset();

    setTimeout(() => {
      setSuccess(false);
    }, 3000); // ← just put it right here
  },
  (error) => {
    setError(error);
    console.log("Hi, I am the error", error);
  }
);
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Work Together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>kashusantuka11@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>Cuttack,Odisha</span>
        </motion.div>
        {/* <motion.div className="item" variants={variants}>
          <h2>PhoneNo</h2>
          <span>+1 234 5678</span>
        </motion.div> */}
      </motion.div>
      <div className="formContainer">
        <form ref={formRef} onSubmit={sendEmail}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
          {error}
          {success && "Success"}
        </form>
      </div>
    </motion.div>
  );
}
