import React, { useState } from 'react';
import ImageModal from './ImageModal';
import './Certificates.css';

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    {
      id: 1,
      title: 'Diploma in Software Engineering',
      issuer: 'NIBM - The City University',
      date: '2024 - 2026',
      image: '/images/certificates/diploma-software-engineering.jpg',
      description: 'Comprehensive diploma program covering full-stack development, database management, and software engineering principles',
      skills: ['Full Stack Development', 'Java', 'React', 'MySQL', 'Software Engineering']
    },
    {
      id: 2,
      title: 'Certificate in Software Engineering',
      issuer: 'NIBM - The City University',
      date: '2023 - 2024',
      image: '/images/certificates/certificate-software-engineering.jpg',
      description: 'Foundation certificate program in software development and programming fundamentals',
      skills: ['Programming Fundamentals', 'Web Development', 'Database Design']
    },
    {
      id: 3,
      title: 'TechWaves 2025 - Tech Exhibitor',
      issuer: 'NIBM - The City University',
      date: 'August 2025',
      image: '/images/certificates/techwaves-2025.jpg',
      description: 'Certificate of Participation as Tech Exhibitor at TechWaves 2025'
    },
    {
      id: 4,
      title: 'Generative AI for Business Leaders',
      issuer: 'LinkedIn Learning',
      date: 'May 2025',
      image: '/images/certificates/generative-ai-business.jpg',
      skills: ['Artificial Intelligence for Business', 'Generative AI for Management', 'Generative AI']
    },
    {
      id: 5,
      title: 'Microsoft Security Essentials',
      issuer: 'LinkedIn Learning',
      date: 'May 2025',
      image: '/images/certificates/microsoft-security.jpg',
      skills: ['Microsoft Security', 'Governance, Risk Management, and Compliance (GRC)', 'Cloud Security']
    },
    {
      id: 6,
      title: 'Microsoft Azure AI Essentials',
      issuer: 'LinkedIn Learning',
      date: 'May 2025',
      image: '/images/certificates/azure-ai-essentials.jpg',
      skills: ['Machine Learning', 'Microsoft Azure', 'Azure AI Foundry']
    },
    {
      id: 7,
      title: 'Sustainability Foundations: Core Concepts',
      issuer: 'LinkedIn Learning',
      date: 'May 2025',
      image: '/images/certificates/sustainability-foundations.jpg',
      skills: ['Environmental Sustainability']
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <div className="section-header">
          <span className="icon">🏆</span>
          <h2 className="section-title">Certificates & Achievements</h2>
          <p className="section-description">
            Professional certifications and recognitions
          </p>
        </div>

        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div 
                className="certificate-image-wrapper"
                onClick={() => setSelectedImage(cert.image)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="certificate-image"
                />
                <div className="certificate-overlay">
                  <span className="view-icon">🔍 View Certificate</span>
                </div>
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">
                  <span className="issuer-icon">🎓</span>
                  {cert.issuer}
                </p>
                <p className="certificate-date">
                  <span className="date-icon">📅</span>
                  {cert.date}
                </p>
                
                {cert.skills && (
                  <div className="certificate-skills">
                    {cert.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
                
                {cert.description && (
                  <p className="certificate-description">{cert.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <ImageModal 
          imageSrc={selectedImage} 
          onClose={() => setSelectedImage(null)} 
        />
      )}
    </section>
  );
}

export default Certificates;
