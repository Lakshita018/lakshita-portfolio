import React from "react";
import "./Skills.css";

const skillsData = [
  // Row 1 - scrolls left
  [
    // { name: "Flutter", icon: "📱", color: "#42A5F5" },
    { name: "UI/UX", icon: "🎨", color: "#AB47BC" },
    { name: "Responsive Design", icon: "📱", color: "#E91E63" },
    { name: "Web Design", icon: "🌐", color: "#3F51B5" },
    { name: "HTML/CSS", icon: "🔧", color: "#FF5722" },
    { name: "JavaScript", icon: "⚡", color: "#FFC107" },
    // { name: "TypeScript", icon: "📝", color: "#2196F3" },
    { name: "React.js", icon: "⚛️", color: "#00BCD4" },
  ],
  // Row 2 - scrolls right
  [
    { name: "C/C++", icon: "💻", color: "#2196F3" },
    // { name: "PHP", icon: "🐘", color: "#673AB7" },
    { name: "REST APIs", icon: "🔗", color: "#4CAF50" },
    // { name: "GraphQL", icon: "📊", color: "#E91E63" },
    { name: "Python", icon: "🐍", color: "#3F51B5" },
    { name: "Java", icon: "☕", color: "#FF9800" },
    { name: "Node.js", icon: "💚", color: "#4CAF50" },
    { name: "Express.js", icon: "🔗", color: "#607D8B" },
  ],
  // Row 3 - scrolls left
  [
    { name: "SQL", icon: "🗃️", color: "#2196F3" },
    // { name: "Redis", icon: "🔴", color: "#F44336" },
    { name: "Machine Learning", icon: "🤖", color: "#9C27B0" },
    { name: "Data Visualization", icon: "👁️", color: "#009688" },
    { name: "Tableau", icon: "📊", color: "#2196F3" },
    // { name: "Security", icon: "🔒", color: "#FF5722" },
    { name: "Cloud Services", icon: "☁️", color: "#03A9F4" },
    { name: "MySQL", icon: "🗄️", color: "#2196F3" },
    { name: "MongoDB", icon: "🍃", color: "#4CAF50" },
  ],
];

const Skills = () => {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <p className="section-subtitle">TECHNICAL PROFICIENCIES</p>
        <h2 className="section-title">Skills & Expertise</h2>
      </div>
      
      <div className="skills-container">
        {skillsData.map((row, rowIndex) => (
          <div 
            key={rowIndex} 
            className={`skills-row ${rowIndex % 2 === 0 ? 'scroll-left' : 'scroll-right'}`}
          >
            <div className="skills-track">
              {/* Duplicate the skills for seamless scrolling */}
              {[...row, ...row].map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-card"
                  style={{ '--accent-color': skill.color }}
                >
                  <div className="skill-icon">{skill.icon}</div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;