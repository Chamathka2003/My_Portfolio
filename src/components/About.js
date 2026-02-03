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

          {/* Certificate Section */}
          <div className="certificate-section" style={{ margin: '2rem 0', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '1rem' }}>Certification</h3>
            {/* IBM Certificate */}
            <div style={{ display: 'inline-block', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', background: '#fafbfc', boxShadow: '0 2px 8px rgba(0,0,0,0.04)', marginBottom: '2rem' }}>
              <img
                src={process.env.PUBLIC_URL + '/images/certificates/ibm-ml-python-certificate.png'}
                alt="IBM Machine Learning with Python Certificate"
                style={{ maxWidth: '400px', width: '100%', borderRadius: '4px', marginBottom: '0.5rem' }}
              />
              <div style={{ fontSize: '1rem', fontWeight: 500, marginTop: '0.5rem' }}>
                <span>IBM Machine Learning with Python</span>
              </div>
              <div style={{ fontSize: '0.95rem', color: '#555' }}>
                <span>Issued by IBM SkillsBuild &mdash; January 30, 2026</span>
              </div>
              <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                <a href="https://courses.yl-ptech.skillsnetwork.site/certificates/36efd65102c24d8eb8bfd86761b14f7c2" target="_blank" rel="noopener noreferrer" style={{ color: '#0072c3', textDecoration: 'underline' }}>
                  Verify Certificate
                </a>
              </div>
            </div>

            {/* CES1 Certificate */}
            <div style={{ display: 'inline-block', border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', background: '#fafbfc', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
              <img
                src={process.env.PUBLIC_URL + '/images/certificates/ces1.png'}
                alt="Certificate CES1"
                style={{ maxWidth: '400px', width: '100%', borderRadius: '4px', marginBottom: '0.5rem' }}
              />
              <div style={{ fontSize: '1rem', fontWeight: 500, marginTop: '0.5rem' }}>
                <span>Certificate Title</span>
              </div>
              <div style={{ fontSize: '0.95rem', color: '#555' }}>
                <span>Certificate Description or Issuer</span>
              </div>
              {/* Add a link or more info if available */}
            </div>
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
