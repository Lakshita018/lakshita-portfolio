import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const WorkAchievements = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const experienceRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (experienceRef.current && timelineRef.current) {
        const rect = experienceRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;
        const sectionTop = rect.top;
        
        // Calculate scroll progress within the section
        const scrollableHeight = sectionHeight - windowHeight;
        const scrolled = Math.max(0, -sectionTop);
        const progress = Math.min(scrolled / scrollableHeight, 1);
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      id: 1,
      title: "General Secretary",
      company: "ISTE - Indian Society for Technical Education",
      duration: "May 2025 - Present",
      location: "Patiala, Punjab",
      type: "Leadership Role",
      logo: "🏛️",
      testimonial: {
        text: "Lakshita demonstrated exceptional leadership skills in managing technical divisions and organizing large-scale events. Her ability to deliver secure platforms and manage multiple workshops simultaneously showcased remarkable organizational capabilities.",
        rating: 5
      },
      responsibilities: [
        "Led the technical division, building robust platforms that successfully supported 1000+ event registrations with seamless user experience.",
        "Delivered the Web Vida Quiz Platform featuring secure authentication and real-time functionality for 100+ live participants.",
        "Successfully managed and coordinated 20+ technical workshops and competitive programming competitions.",
        "Engaged and mentored 200+ students across various technical domains, fostering a collaborative learning environment."
      ]
    },
    {
      id: 2,
      title: "Data Analytics Specialist",
      company: "Deloitte Forage Virtual Experience",
      duration: "June 2025",
      location: "Virtual Program",
      type: "Professional Certification",
      logo: "📊",
      testimonial: {
        text: "Successfully completed comprehensive data analytics tasks demonstrating proficiency in forensic technology and practical data analysis techniques. Showed strong analytical thinking and attention to detail in complex problem-solving scenarios.",
        rating: 5
      },
      responsibilities: [
        "Completed intensive practical tasks in data analysis using industry-standard tools and methodologies.",
        "Applied forensic technology techniques to analyze complex datasets and extract meaningful insights.",
        "Demonstrated proficiency in data visualization and reporting using advanced analytics tools.",
        "Gained hands-on experience with Deloitte's data analytics workflow and best practices in a simulated professional environment."
      ]
    }
  ];

  return (
    <section className="experience-section" ref={experienceRef}>
      <div className="experience-container">
        <div className="experience-header">
          <p className="experience-subtitle">Professional Journey</p>
          <h2 className="experience-title">Work & Achievements</h2>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line" ref={timelineRef}>
            <div 
              className="timeline-progress" 
              style={{ height: `${scrollProgress * 100}%` }}
            ></div>
          </div>
          
          <div className="experience-items">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="experience-item">
                {/* Left side - Testimonial */}
                <div className="testimonial-side">
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="rating">
                        {[...Array(exp.testimonial.rating)].map((_, i) => (
                          <span key={i} className="star">★</span>
                        ))}
                      </div>
                    </div>
                    <p className="testimonial-text">{exp.testimonial.text}</p>
                    <div className="testimonial-footer">
                      <div className="testimonial-logo">{exp.logo}</div>
                      <span className="company-name">{exp.company}</span>
                    </div>
                    
                    {/* Floating trophy in empty area */}
                    <div className="floating-trophy">
                      {index === 0 ? '🏆' : '🥇'}
                    </div>
                  </div>
                </div>

                {/* Timeline center - Glowing dot */}
                <div className="timeline-center">
                  <div className="timeline-dot"></div>
                </div>

                {/* Right side - Experience details */}
                <div className="experience-details">
                  <div className="experience-header-details">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="job-meta">
                      <p className="job-duration">📅 {exp.duration}</p>
                      <p className="job-location">📍 {exp.location}</p>
                      <span className="job-type">{exp.type}</span>
                    </div>
                  </div>
                  
                  <div className="responsibilities-section">
                    <h4 className="responsibilities-title">Key Responsibilities & Achievements</h4>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="responsibility-item">
                          <span className="responsibility-arrow">→</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAchievements;
