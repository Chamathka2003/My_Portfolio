import React from 'react';

function About() {
  return (
    <div className="page-container">
      <div className="section">
        <h2>👋 About Me</h2>
        <p>
          Hello! I'm Chamathka Jayodavi, a passionate and results-driven Software Engineering student 
          passionate about creating innovative web solutions. With expertise in both frontend and backend 
          technologies, I bring ideas to life through clean, efficient, and scalable code.
        </p>
      </div>

    

      <div className="section">
        <h2>🎓 Education & Certification</h2>
        <div className="education-card featured-cert">
          <div className="cert-badge"></div>
          <h3>Diploma in Software Engineering</h3>
          <h4 style={{ color: '#00ccff', marginTop: '0.5rem' }}>
            National Institute of Business Management (NIBM), Sri Lanka
          </h4>
          <div style={{ marginTop: '1rem', lineHeight: '1.8' }}>
            <p><strong>Status:</strong> <span style={{ color: '#00ff88', fontWeight: 'bold' }}>Successfully Completed</span></p>
            <p><strong>Program:</strong> Comprehensive Diploma in Software Engineering</p>
          </div>
          <p style={{ marginTop: '1rem' }}>
            Successfully completed a comprehensive Diploma program in Software Engineering, gaining advanced skills 
            in full-stack development, software architecture, database design, and modern web technologies. 
            This program equipped me with industry-standard knowledge and practical experience to excel in 
            software development and engineering roles.
          </p>
        </div>

        <div className="education-card" style={{ marginTop: '1.5rem' }}>
          <div className="cert-badge">🏆</div>
          <h3>Certificate in Software Engineering</h3>
          <h4 style={{ color: '#00ccff', marginTop: '0.5rem' }}>
            National Institute of Business Management (NIBM), Sri Lanka
          </h4>
          <div style={{ marginTop: '1rem', lineHeight: '1.8' }}>
            <p><strong>Duration:</strong> November 2023 - March 2024</p>
            <p><strong>Certificate No:</strong> CSE23360</p>
            <p><strong>Date of Award:</strong> July 23, 2024</p>
          </div>
          <p style={{ marginTop: '1rem' }}>
            Successfully completed a rigorous program in Software Engineering, gaining cutting-edge skills 
            and knowledge in software development, database management, and building enterprise applications 
            to thrive in the dynamic field of technology.
          </p>
        </div>
      </div>

      <div className="section">
        <h2>📜 Certifications</h2>
        <div className="certifications-grid">
          <div className="cert-card">
            <div className="cert-icon">🔐</div>
            <h4>Microsoft Security Essentials</h4>
            <p className="cert-subtitle">Concepts, Solutions, and AI-Powered Protection</p>
            <p className="cert-date">LinkedIn Learning - May 26, 2025</p>
            <p className="cert-skills">Microsoft Security • Cloud Security • GRC • AI-driven threat protection</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">☁️</div>
            <h4>Microsoft Azure AI Essentials</h4>
            <p className="cert-subtitle">Workloads and Machine Learning on Azure</p>
            <p className="cert-date">LinkedIn Learning - May 25, 2025</p>
            <p className="cert-skills">Machine Learning • Microsoft Azure • Azure AI Foundry</p>
          </div>

          <div className="cert-card">
            <div className="cert-icon">🌱</div>
            <h4>Sustainability Foundations</h4>
            <p className="cert-subtitle">Core Concepts</p>
            <p className="cert-date">LinkedIn Learning - May 26, 2025</p>
            <p className="cert-skills">Environmental Sustainability</p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>🛠️ Technical Skills</h2>
        <div className="skills-detail-grid">
          <div className="skill-detail-card">
            <div className="skill-icon">🎨</div>
            <h4>Frontend Development</h4>
            <p>React, JavaScript (ES6+), HTML5, CSS3, Responsive Design</p>
          </div>
          
          <div className="skill-detail-card">
            <div className="skill-icon">⚙️</div>
            <h4>Backend Development</h4>
            <p>Java, Spring Boot, Spring MVC, RESTful APIs, PHP</p>
          </div>
          
          <div className="skill-detail-card">
            <div className="skill-icon">🗄️</div>
            <h4>Database</h4>
            <p>MySQL, Database Design, SQL Queries, Data Modeling</p>
          </div>
          
          <div className="skill-detail-card">
            <div className="skill-icon">🔧</div>
            <h4>Tools & Technologies</h4>
            <p>Git, Maven, npm, Postman, VS Code, IntelliJ IDEA</p>
          </div>
        </div>
      </div>
      
      <div className="section">
        <h2>🌟 Interests & Focus</h2>
        <div className="interests-grid">
          <div className="interest-badge">Performance Optimization</div>
          <div className="interest-badge">Security Best Practices</div>
          <div className="interest-badge">User Experience</div>
          <div className="interest-badge">Clean Code</div>
          <div className="interest-badge">Continuous Learning</div>
        </div>
      </div>
    </div>
  );
}

export default About;
