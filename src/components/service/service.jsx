import Article from "./Article.jsx";
import "./service.scss";
import BrushLogo from "../../assets/PaintBrush.png"; 
import FrontEndLogo from "../../assets/frontImage.png";
import BackEndLogo from "../../assets/BackEndLogo.png";
import aiAgentLogi from "../../assets/ai-agent.png";
import systemDesign from "../../assets/systemDesign.png";




export default function Service() {

 const agenticAISkills = [
  { name: "Agentic AI Systems", level: "Beginner–Intermediate" },
  { name: "LangChain", level: "Intermediate" },
  { name: "RAG (Retrieval-Augmented Generation)", level: "Intermediate" },
  { name: "Tool Calling & Function Execution", level: "Intermediate" },
  { name: "Prompt Engineering", level: "Intermediate" },
  { name: "LLM Orchestration", level: "Beginner" },
 ];

 const frontendSkills = [
  { name: "HTML", level: "Experienced" },
  { name: "CSS", level: "Intermediate" },
  { name: "JavaScript", level: "Experienced" },
  { name: "TypeScript", level: "Intermediate" },
  { name: "Tailwind CSS", level: "Experienced" },
  { name: "React", level: "Experienced" },
  { name: "Next.js", level: "Intermediate" },      // SSR, routing, SEO
  { name: "Vue.js", level: "Beginner" },
  { name: "Browser DevTools", level: "Experienced" } // Debugging, performance
];

 const backendSkills = [
  { name: "Node JS", level: "Intermediate" },
  { name: "Express JS", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },      // API routes, SSR backend
  { name: "JWT Authentication", level: "Intermediate" },
  { name: "OAuth 2.0", level: "Beginner" },
  { name: "Redis", level: "Beginner" },
  { name: "MongoDB", level: "Experienced" },
  { name: "MySQL", level: "Intermediate" },
  { name: "Docker", level: "Beginner" },            // Containerization
];

// const systemDesignSkills = [
//   { name: "High-Level System Design (HLD)", level: "Intermediate" },
//   { name: "Scalable Backend Architecture", level: "Intermediate" },
//   { name: "API Design & Data Flow", level: "Experienced" },
//   { name: "Microservices vs Monolith", level: "Intermediate" },
//   { name: "Caching Strategies", level: "Intermediate" },
//   { name: "Event-driven Architecture (Basics)", level: "Beginner" },
// ];

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
          <Article title="Agentic AI" skills={agenticAISkills} image={aiAgentLogi}/> 
          <Article title="Frontend Developer" skills={frontendSkills} image={FrontEndLogo}/>
          <Article title="Backend Developer" skills={backendSkills} image={BackEndLogo}/>
          {/* <Article title="System Design" skills={systemDesignSkills} image={systemDesign}/> */}

        </div>
      </div>
    </section>
  );
}
