import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <span className="icon">👋</span>
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Chamathka Jayodavi, a passionate and results-driven Software Engineering student 
              passionate about creating innovative web solutions. With expertise in both frontend and backend 
              technologies, I bring ideas to life through clean, efficient, and scalable code.
            </p>
          </div>

          <div className="education-section">
            <div className="section-header">
              <span className="icon">🎓</span>
              <h2 className="section-title">Education & Certification</h2>
            </div>

            <div className="education-card">
              <h3>Certificate in Software Engineering</h3>
              <h4 className="institution">National Institute of Business Management (NIBM), Sri Lanka</h4>
              
              <div className="education-details">
                <p className="status"><strong>Status:</strong> <span className="success">Successfully Completed</span></p>
                <p><strong>Duration:</strong> November 2023 - March 2024</p>
                <p><strong>Serial No:</strong> 123675</p>
              </div>

              <p className="description">
                Successfully completed the Certificate in Software Engineering program from NIBM, spanning from June 2023 
                to December 2023. This rigorous program equipped me with cutting-edge skills and knowledge to thrive in 
                the dynamic field of software development. Ready to leverage these skills to build innovative solutions 
                and contribute to the tech industry!
              </p>
            </div>

            <div className="education-card">
              <h3>Diploma in Software Engineering</h3>
              <h4 className="institution">National Institute of Business Management (NIBM), Sri Lanka</h4>
              
              <div className="education-details">
                <p className="status"><strong>Status:</strong> <span className="success">Successfully Completed</span></p>
                <p><strong>Program:</strong> Comprehensive Diploma in Software Engineering</p>
              </div>

              <p className="description">
                Successfully completed a comprehensive Diploma program in Software Engineering, gaining advanced skills 
                in full-stack development, software architecture, database design, and modern web technologies. This 
                program equipped me with industry-standard knowledge and practical experience to excel in software 
                development and engineering roles.
              </p>
            </div>
          </div>
            
          <div className="skills">
            <h3>Technical Skills</h3>
            
            <div className="skills-category">
              <h4 className="category-title">
                <span className="category-icon">🎨</span>
                Frontend Development
              </h4>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-icon">⚛️</span>
                  <span>React.js</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">💻</span>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🎨</span>
                  <span>HTML/CSS</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">📱</span>
                  <span>Responsive Design</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h4 className="category-title">
                <span className="category-icon">⚙️</span>
                Backend Development
              </h4>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-icon">☕</span>
                  <span>Java</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🍃</span>
                  <span>Spring Boot</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🐘</span>
                  <span>PHP</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🗄️</span>
                  <span>MySQL</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🔥</span>
                  <span>Firebase</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🔌</span>
                  <span>REST APIs</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h4 className="category-title">
                <span className="category-icon">💡</span>
                Programming Languages
              </h4>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-icon">☕</span>
                  <span>Java</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">💻</span>
                  <span>JavaScript</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🔷</span>
                  <span>C Programming</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🐘</span>
                  <span>PHP</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">📊</span>
                  <span>SQL</span>
                </div>
              </div>
            </div>

            <div className="skills-category">
              <h4 className="category-title">
                <span className="category-icon">🚀</span>
                Other Technologies
              </h4>
              <div className="skills-grid">
                <div className="skill-item">
                  <span className="skill-icon">🌐</span>
                  <span>Git & GitHub</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">📱</span>
                  <span>IoT Development</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🗄️</span>
                  <span>Database Design</span>
                </div>
                <div className="skill-item">
                  <span className="skill-icon">🎯</span>
                  <span>Software Engineering</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
