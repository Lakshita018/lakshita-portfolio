import React, { useState } from 'react';
import './Project.css';
import DatesheetImg from './datesheet.jpeg';
import Coll from './coll.jpg';
import Web from './web.jpeg';
import ai from './ai.jpeg';
import ml from './ml.jpeg';
import com from './com.jpeg';
const Project = () => {
  const [activeFilter, setActiveFilter] = useState('Featured');

  const projects = [
    {
    id: 1,
    title: 'Datesheet Generator',
    description: 'A system that automates the creation of exam datesheets, seating plans, and teacher duty allocations using Python and Flask.',
    image: DatesheetImg,
    featured: true,
    tags: ['Python', 'Flask', 'Jinja2', '+3 more'],
    // icon: '📚',
    color: 'purple'
  },
  {
    id: 2,
    title: 'Colloquium Website',
    description: 'Developed the official website for the national Colloquium event, featuring registration, schedule, and results management.',
    image: Coll,
    featured: true,
    tags: ['HTML', 'CSS', 'JavaScript', '+1 more'],
    // icon: '🌐',
    color: 'blue'
  },
  {
    id: 3,
    title: 'Web VIDA Quiz Platform',
    description: 'Built an interactive quiz platform for students to test knowledge and get instant feedback, deployed on the Web VIDA portal.',
    image: Web,
    featured: true,
    tags: ['React', 'Node.js', 'Firebase', '+2 more'],
    // icon: '📝',
    color: 'green'
  },
  {
    id: 4,
    title: 'AI Chatbot',
    description: 'Designed a conversational AI chatbot capable of answering FAQs and providing personalized support using NLP techniques.',
    image: ai,
    featured: false,
    tags: ['Python', 'NLP', 'Machine Learning'],
    // icon: '🤖',
    color: 'red'
  },
  {
    id: 5,
    title: 'E-Commerce Platform',
    description: 'Full-stack online shopping solution with secure payment integration, product catalog, and order management system.',
    image: com,
    featured: false,
    tags: ['React', 'Node.js', 'MongoDB'],
    // icon: '🛒',
    color: 'orange'
  },
  {
    id: 6,
    title: 'Diabetes Prediction using Fundus Images',
    description: 'Developed a deep learning model to predict Type 2 Diabetes Mellitus from retinal fundus images, demonstrating practical ML application in healthcare.',
    image: ml,
    featured: false,
    tags: ['Python', 'Deep Learning', 'TensorFlow'],
    // icon: '🔬',
    color: 'cyan'
  }
];
  const filteredProjects = activeFilter === 'All Projects' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className="section-label">RECENT WORK</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="filter-tabs">
          <button 
            className={`filter-tab ${activeFilter === 'All Projects' ? 'active' : ''}`}
            onClick={() => setActiveFilter('All Projects')}
          >
            All Projects
          </button>
          <button 
            className={`filter-tab ${activeFilter === 'Featured' ? 'active' : ''}`}
            onClick={() => setActiveFilter('Featured')}
          >
            Featured
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className={`corner-decoration ${project.color}`}></div>
              
              {project.featured && (
                <div className="featured-badge">
                  Featured
                </div>
              )}

              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="image-overlay">
                  <span className="project-icon">{project.icon}</span>
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                      href="https://github.com/Lakshita018"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-btn github-btn"
                    >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                     </a>
                 
                  <button className="action-btn demo-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                    </svg>
                  </button>
                  <button className="action-btn code-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14.6,16.6L19.2,12L14.6,7.4L13.2,8.8L16.4,12L13.2,15.2L14.6,16.6M9.4,16.6L10.8,15.2L7.6,12L10.8,8.8L9.4,7.4L4.8,12L9.4,16.6Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;