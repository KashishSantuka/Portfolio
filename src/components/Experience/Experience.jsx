import React, { useEffect, useRef } from 'react';
import './Experience.scss';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'AppEQ',
    period: 'December 2024 – March 2026',
    techs: ['React.js', 'Next.js', 'Vue.js', 'SQL', 'MongoDB'],
    bullets: [
      {
        highlight: 'AI-powered real-time voice & communication',
        text: 'At HuskyVoice, built and operated AI-powered real-time voice and communication across frontend and backend, implementing LiveKit-based calling infrastructure, SIP trunk management, and real-time routing to deliver reliable low-latency experiences and reduce call setup latency by 40%.',
        metric: '40% latency reduction',
      },
      {
        highlight: 'Credit-based access control',
        text: 'Developed credit-based access control system with MongoDB, featuring credit deduction on call start, participant verification, and real-time balance checks for voice AI services.',
        metric: null,
      },
      {
        highlight: 'Phone number management',
        text: 'Built phone number management service supporting search, purchase, agent allocation, and inbound/outbound call routing, with error recovery mechanisms.',
        metric: null,
      },
      {
        highlight: 'WhatsApp Business API',
        text: 'Integrated WhatsApp Business API enabling automated messaging workflows, template management, and multi-user session handling across multi-tenant systems.',
        metric: null,
      },
      {
        highlight: 'PhonePe payment gateway',
        text: 'Integrated PhonePe payment gateway to enable secure UPI and wallet-based transactions.',
        metric: null,
      },
      {
        highlight: 'Dashboard & embedded views',
        text: 'Integrated dashboard and embedded views to improve performance and in-app decision-making.',
        metric: null,
      },
      {
        highlight: 'Backend operations',
        text: 'Supported backend operations including data migration, API integrations, and automation scripting to improve reliability and reduce manual effort.',
        metric: null,
      },
      {
        highlight: 'Cross-functional collaboration',
        text: 'Collaborated closely with cross-functional teams (product, customer success, and operations) to streamline customer workflows directly within the Gmail interface.',
        metric: null,
      },
      {
        highlight: 'Scalable codebases',
        text: 'Assisted in maintaining scalable and maintainable codebases, following best engineering practices, code reviews, and modular design principles.',
        metric: null,
      },
    ],
  },
];

export const Experience = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience" ref={sectionRef}>
      {/* Background text watermark */}
      <span className="experience__watermark" aria-hidden="true">
        Experience
      </span>

      <div className="experience__container">
        {/* Section label */}
        <div className="experience__label">
          <span className="experience__label-line" />
          <span className="experience__label-text">Professional Experience</span>
        </div>

        {/* Section heading */}
        <h2 className="experience__heading">
          Where I've
          <em>built things</em>
        </h2>

        {/* Timeline */}
        <div className="experience__timeline">
          {experiences.map((exp, expIdx) => (
            <div
              className="experience__card"
              key={expIdx}
              ref={(el) => (itemsRef.current[expIdx] = el)}
            >
              {/* Card header */}
              <div className="experience__card-header">
                <div className="experience__card-meta">
                  <span className="experience__company">{exp.company}</span>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <h3 className="experience__role">{exp.role}</h3>

                {/* Tech stack pills */}
                <div className="experience__tech-stack">
                  {exp.techs.map((t) => (
                    <span className="experience__tech-pill" key={t}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="experience__divider" />

              {/* Bullet list */}
              <ul className="experience__bullets">
                {exp.bullets.map((b, i) => (
                  <li
                    className="experience__bullet"
                    key={i}
                    ref={(el) => (itemsRef.current[experiences.length + i] = el)}
                    style={{ '--delay': `${i * 60}ms` }}
                  >
                    <span className="experience__bullet-dot" aria-hidden="true" />
                    <div className="experience__bullet-content">
                      <span className="experience__bullet-highlight">{b.highlight} — </span>
                      <span className="experience__bullet-text">
                        {b.text.replace(b.highlight, '').replace(' — ', '').trim()}
                      </span>
                      {b.metric && (
                        <span className="experience__metric">{b.metric}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;