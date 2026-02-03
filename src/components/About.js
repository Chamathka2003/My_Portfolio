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
              Hello! I’m Chamathka Jayodavi, a passionate and results-driven Software Engineering student with a strong interest in creating innovative and user-centered web solutions. With expertise in both frontend and backend technologies, I enjoy bringing ideas to life through clean, efficient, and scalable code. I have hands-on experience working with modern development tools and frameworks, and I am constantly learning to stay updated with emerging technologies. I am motivated by problem-solving, collaboration, and the opportunity to build impactful digital solutions that make a real difference.
            </p>
          </div>

          <div className="tech-stack-banner">
            <h3>Languages & Tools</h3>
            
            <div className="tech-categories">
              {/* Frontend */}
              <div className="tech-category-box">
                <h4 className="tech-category-title">
                  <span className="tech-icon-title">💻</span> Frontend
                </h4>
                <div className="tech-icons">
                  <div className="tech-icon html-icon" title="HTML5">
                    <span>HTML</span>
                  </div>
                  <div className="tech-icon css-icon" title="CSS3">
                    <span>CSS</span>
                  </div>
                  <div className="tech-icon js-icon" title="JavaScript">
                    <span>JavaScript</span>
                  </div>
                  <div className="tech-icon react-icon" title="React">
                    <span>React</span>
                  </div>
                  <div className="tech-icon tailwind-icon" title="Tailwind CSS">
                    <span>Tailwind CSS</span>
                  </div>
                  <div className="tech-icon bootstrap-icon" title="Bootstrap">
                    <span>Bootstrap</span>
                  </div>
                </div>
              </div>

              {/* Backend */}
              <div className="tech-category-box">
                <h4 className="tech-category-title">
                  <span className="tech-icon-title">⚙️</span> Backend
                </h4>
                <div className="tech-icons">
                  <div className="tech-icon node-icon" title="Node.js">
                    <span>Node.js</span>
                  </div>
                  <div className="tech-icon python-icon" title="Python">
                    <span>Python</span>
                  </div>
                  <div className="tech-icon php-icon" title="PHP">
                    <span>PHP</span>
                  </div>
                  <div className="tech-icon java-icon" title="Java">
                    <span>Java</span>
                  </div>
                  <div className="tech-icon mysql-icon" title="MySQL">
                    <span>MySQL</span>
                  </div>
                  <div className="tech-icon sqlite-icon" title="SQLite">
                    <span>SQLite</span>
                  </div>
                  <div className="tech-icon oracle-icon" title="Oracle">
                    <span>Oracle</span>
                  </div>
                  <div className="tech-icon postgres-icon" title="PostgreSQL">
                    <span>PostgreSQL</span>
                  </div>
                  <div className="tech-icon git-icon" title="GitHub">
                    <span>GitHub</span>
                  </div>
                </div>
              </div>

              {/* Other */}
              <div className="tech-category-box">
                <h4 className="tech-category-title">
                  <span className="tech-icon-title">🔧</span> Other
                </h4>
                <div className="tech-icons">
                  <div className="tech-icon c-icon" title="C">
                    <span>C</span>
                  </div>
                  <div className="tech-icon csharp-icon" title="C# (.NET)">
                    <span>C# (.NET)</span>
                  </div>
                  <div className="tech-icon kotlin-icon" title="Kotlin">
                    <span>Kotlin</span>
                  </div>
                  <div className="tech-icon android-icon" title="Android">
                    <span>Android</span>
                  </div>
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
