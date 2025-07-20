import React, { useState } from "react";
import "./Education.css";

const educationData = [
  {
    title: "B.E. Computer Engineering",
    institution: "Thapar Institute of Engineering & Technology",
    location: "Patiala, India",
    duration: "Aug 2021 - Present",
    description:
      "Focused on core computer science subjects including Data Structures, Machine Learning, and Software Development.",
    current: true,
    details: [
      "Coursework: Data Structures, Machine Learning, Software Development",
      "CGPA: 8.5/10",
      "Relevant Projects: AI Healthcare System, Web Development Portfolio"
    ]
  },
  {
    title: "Class XII - CBSE",
    institution: "XYZ Public School",
    location: "Delhi, India",
    duration: "2019 - 2021",
    description:
      "Studied Physics, Chemistry, Mathematics, and Computer Science. Secured 95% overall.",
    current: false,
    details: [
      "Subjects: Physics, Chemistry, Mathematics, Computer Science",
      "Percentage: 95%",
      "Achievements: School Topper in Computer Science"
    ]
  },
  {
    title: "Class X - CBSE",
    institution: "ABC High School",
    location: "Delhi, India",
    duration: "2017 - 2019",
    description: "Basic foundational education with focus on Science and Math.",
    current: false,
    details: [
      "Subjects: Science, Mathematics, English, Hindi, Social Studies",
      "Percentage: 92%",
      "Achievements: Merit Certificate in Mathematics"
    ]
  },
];

const Education = () => {
  const [selected, setSelected] = useState(
    educationData.find((e) => e.current) || educationData[0]
  );

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