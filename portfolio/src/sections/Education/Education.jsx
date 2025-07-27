import React, { useState, useEffect } from "react";
import "./Education.css";

const educationData = [
  {
    title: "B.E. Computer Engineering",
    institution: "Thapar Institute of Engineering & Technology",
    location: "Patiala, Punjab, India",
    duration: "Aug 2021 - Present",
    description:
      "Pursuing core subjects like Data Structures, Machine Learning, and Full-Stack Development.",
    current: true,
    details: [
      "Coursework: Data Structures, Machine Learning, Full-Stack Development",
      "CGPA: 8.95/10 (till current semester)",
      "Relevant Projects: Portfolio Website, Chatbot"
    ]
  },
  {
    title: "Class XII - CBSE",
    institution: "MCM Dav Public School",
    location: "Pathankot, India",
    duration: "2021 - 2023",
    description:
      "Studied PCM with Computer Science, secured 95% overall with distinction in Computer Science.",
    current: false,
    details: [
      "Subjects: Physics, Chemistry, Mathematics, English",
      "Percentage: 95%",
      "Achievements: Topper in school"
    ]
  },
  {
    title: "Class X - CBSE",
    institution: "St. Joseph's Convent Sec. School",
    location: "Pathankot, India",
    duration: "2010 - 2021",
    description: "Basic foundational education with focus on Science and Math.",
    current: false,
    details: [
      "Subjects: Science, Mathematics, English, Hindi, Social Studies",
      "Percentage: 97.4%",
      "Achievements: Merit Certificate in Mathematics"
    ]
  }
];

const Education = () => {
  const [selected, setSelected] = useState(
    educationData.find((e) => e.current) || educationData[0]
  );
  const [isMobile, setIsMobile] = useState(false);
  const [expandedItems, setExpandedItems] = useState(new Set());

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Toggle expanded state for mobile cards
  const toggleExpanded = (index) => {
    const newExpandedItems = new Set(expandedItems);
    if (newExpandedItems.has(index)) {
      newExpandedItems.delete(index);
    } else {
      newExpandedItems.add(index);
    }
    setExpandedItems(newExpandedItems);
  };

  // Mobile/Tablet Grid Layout
  if (isMobile) {
    return (
      <section className="education-section" id="education">
        <div className="education-header">
          <p className="section-subtitle">ACADEMIC JOURNEY</p>
          <h2 className="section-title">Education</h2>
        </div>
        
        <div className="education-mobile-grid">
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className={`education-mobile-card ${edu.current ? 'current' : ''} ${expandedItems.has(index) ? 'expanded' : ''}`}
            >
              <div className="education-card-header">
                <div className="education-card-title-section">
                  <h3 className="education-card-title">{edu.title}</h3>
                  <span className="education-card-duration">{edu.duration}</span>
                  {edu.current && <span className="current-badge">Current</span>}
                </div>
              </div>
              
              <div className="education-card-institution">
                <h4 className="education-card-institution-name">
                  🏛️ {edu.institution}
                </h4>
                <p className="education-card-location">📍 {edu.location}</p>
              </div>
              
              <div className="education-card-description">
                <p>{edu.description}</p>
              </div>
              
              {/* Expandable Details Section */}
              <div className={`education-card-details ${expandedItems.has(index) ? 'visible' : 'hidden'}`}>
                <div className="education-card-details-content">
                  <h5>Key Details:</h5>
                  <ul className="education-card-details-list">
                    {edu.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Toggle Button */}
              <button 
                className="education-toggle-btn"
                onClick={() => toggleExpanded(index)}
                aria-expanded={expandedItems.has(index)}
              >
                <span>{expandedItems.has(index) ? 'Show Less' : 'View More Details'}</span>
                <svg 
                  className={`toggle-icon ${expandedItems.has(index) ? 'rotated' : ''}`}
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop Layout (Original)
  return (
    <section className="education-section" id="education">
      <div className="education-header">
        <p className="section-subtitle">ACADEMIC JOURNEY</p>
        <h2 className="section-title">Education</h2>
      </div>
      
      <div className="education-container">
        {/* Sidebar with education list */}
        <div className="education-sidebar">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`education-item ${selected === edu ? "active" : ""}`}
              onClick={() => setSelected(edu)}
            >
              <div className="education-item-header">
                <h4 className="education-title">{edu.title}</h4>
                <span className="education-duration">{edu.duration}</span>
              </div>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-date">📅 {edu.duration}</p>
            </div>
          ))}
        </div>

        {/* Main content area */}
        <div className="education-main">
          <div className="education-details">
            <div className="education-header-main">
              <h3 className="education-main-title">{selected.title}</h3>
              <span className="education-main-duration">{selected.duration}</span>
            </div>
            
            <div className="education-institution-info">
              <h4 className="institution-name">
                🏛️ {selected.institution}
              </h4>
              <p className="education-location">📍 {selected.location}</p>
            </div>

            <div className="education-description">
              <p>{selected.description}</p>
            </div>

            <div className="education-key-details">
              <h5>Key Details:</h5>
              <ul className="education-details-list">
                {selected.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;