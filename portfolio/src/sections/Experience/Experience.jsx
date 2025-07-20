import React, { useEffect, useRef, useState } from 'react';
import './Experience.css';

const Experience = () => {
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
      title: "Frontend Developer",
      company: "ISTE Thapar Chapter",
      duration: "January 2025 - April 2025",
      logo: "/api/placeholder/80/80", // Replace with your logo path
      testimonial: {
        text: "Lakshita played a pivotal role in designing and developing the Colloquium website with great attention to detail and performance. His interactive UI implementations and ability to adapt quickly to requirements significantly enhanced our event's digital presence.",
        rating: 5
      },
      responsibilities: [
        "Developed and deployed a responsive and dynamic website for Colloquium using React.js and Tailwind CSS.",
        "Integrated event registration, speaker line-up, and real-time updates functionalities to enhance user experience.",
        "Led hands-on frontend development workshops for beginners, covering modern web development practices.",
        "Collaborated with the design and logistics teams to ensure accurate and aesthetic representation of the event schedule and branding."
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Tech Solutions Inc",
      duration: "May 2024 - December 2024",
      logo: "/api/placeholder/80/80", // Replace with your logo path
      testimonial: {
        text: "Outstanding technical skills and creative problem-solving abilities. Delivered high-quality solutions that exceeded our expectations and improved our overall development workflow significantly.",
        rating: 5
      },
      responsibilities: [
        "Built scalable web applications using React, Node.js, and MongoDB with focus on performance optimization.",
        "Implemented RESTful APIs and microservices architecture to improve system scalability and maintainability.",
        "Collaborated with cross-functional teams to deliver projects on time and within budget constraints.",
        "Mentored junior developers and conducted code reviews to maintain high coding standards."
      ]
    }
    // Add more experiences as needed
  ];

  return (
    <section className="experience-section" ref={experienceRef}>
      <div className="experience-container">
        <div className="experience-header">
          <p className="experience-subtitle">My Career Overview</p>
          <h2 className="experience-title">Experience</h2>
        </div>
        
        <div className="timeline-container">
          <div 
            className="timeline-line" 
            ref={timelineRef}
            style={{
              '--scroll-progress': scrollProgress
            }}
          >
            <div className="timeline-progress"></div>
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
                      <img src={exp.logo} alt={`${exp.company} logo`} className="testimonial-logo" />
                      <span className="company-name">{exp.company}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline center - Glowing dot */}
                <div className="timeline-center">
                  <div className="timeline-dot"></div>
                </div>

                {/* Right side - Experience details */}
                <div className="experience-details">
                  <div className="experience-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <p className="job-duration">📅 {exp.duration}</p>
                  </div>
                  
                  <div className="responsibilities-section">
                    <h4 className="responsibilities-title">Key Responsibilities</h4>
                    <ul className="responsibilities-list">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
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

export default Experience;