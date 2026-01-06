import React from 'react';

function Home() {
  return (
    <div className="page-container">
      <div className="hero">
        <div className="profile-image-container">
          <img 
            src="/images/homephoto.png" 
            alt="Chamathka Jayodavi" 
            className="profile-image"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="profile-placeholder" style={{display: 'none'}}>
            <span>CJ</span>
          </div>
        </div>
        <h1>Chamathka Jayodavi</h1>
        <p className="hero-subtitle">Software Engineering Student | NIBM, Sri Lanka</p>
        <div className="hero-badges">
          <span className="badge">Full Stack Developer</span>
          <span className="badge">React Enthusiast</span>
          <span className="badge">Problem Solver</span>
        </div>
      </div>
      
      <div className="section">
        <h2>🎯 About Me</h2>
        <p>
          Hi! I'm Chamathka Jayodavi, a passionate and results-driven Software Engineering student 
          currently in my 2nd year at NIBM. I have hands-on experience in building, optimizing, and 
          maintaining software applications. I specialize in designing scalable solutions and constantly 
          strive to improve performance, security, and user experience.
        </p>
      </div>

      <div className="section">
        <h2>💻 Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">CSS3</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">PHP</span>
              <span className="skill-tag">REST API</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Database</h3>
            <div className="skill-tags">
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">SQL</span>
            </div>
          </div>
          <div className="skill-category">
            <h3>Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">Maven</span>
              <span className="skill-tag">npm</span>
              <span className="skill-tag">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
