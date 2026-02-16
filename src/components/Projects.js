import React, { useState } from 'react';
import './Projects.css';
import ImageModal from './ImageModal';

function Projects() {
  const [activeSlide, setActiveSlide] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ url: '', name: '' });

  const projects = [
    {
      id: 1,
      title: '🌸 Blossom Flower Delivery Website',
      description: 'Blossom is a full-stack flower delivery web application developed using Spring Boot and React. Features include online ordering, product catalog, shopping cart, and delivery management system.',
      technologies: ['Spring Boot', 'React', 'MySQL', 'REST API'],
      link: '#',
      github: 'https://github.com/Chamathka2003/Bloosm.git',
      images: ['/images/b1.png', '/images/b2.png', '/images/b3.png', '/images/b4.png']
    },
    {
      id: 2,
      title: '☕ Smart Coffee Mug with Temperature Control',
      description: 'An innovative IoT project showcased at TechWaves 2025, NIBM Galle Campus. A smart coffee mug that maintains optimal temperature using sensors and microcontroller technology.',
      technologies: ['IoT', 'Arduino', 'Sensors', 'C++'],
      link: '#',
      github: 'https://github.com/Chamathka2003/Smart_Coffee_Mug_with_Temperature-_Controller.git',
      images: ['/images/s1.jpeg', '/images/s2.jpeg']
    },
    {
      id: 3,
      title: '🌾 Farm Product and Sales Management System',
      description: 'A comprehensive Farm Product and Sales Management System developed as Year 1 Final Project. Streamlines farm operations, product tracking, inventory management, and sales analytics.',
      technologies: ['Java', 'MySQL', 'JavaFX', 'JDBC'],
      link: '#',
      github: 'https://github.com/Chamathka2003/Green_track_Farm_Managment_system.git',
      images: ['/images/gre1.jpeg', '/images/gre2.jpeg', '/images/gre3.jpeg']
    },
    {
      id: 4,
      title: '⚡ Smart Energy Monitoring Dashboard',
      description: 'An innovative IoT-based energy monitoring system designed to track and visualize real-time electricity usage. This application displays key power metrics such as total energy consumption, voltage, current, active power, frequency, and power factor through an interactive dashboard. The system also provides smart alerts for high energy usage and device activity, helping users optimize power consumption and improve energy efficiency.',
      technologies: ['Flutter', 'IoT', 'Energy Sensors', 'Firebase', 'Embedded Systems'],
      link: '#',
      github: 'https://github.com/Chamathka2003/Smart_energy_Usage_Meter.git',
      images: ['/images/te2.jpeg', '/images/te3.jpeg', '/images/te4.jpeg', '/images/tem1.jpeg', '/images/t5.jpeg']
    },
    {
      id: 5,
      title: '🎮 Word Chain Puzzle Game',
      description: 'An interactive word puzzle game developed using vanilla JavaScript with a custom Linked List for word management. Features include word validation, scoring system, undo/redo functionality, riddles, and multiple difficulty levels. Designed with a modular architecture separating game logic, UI, and utilities for maintainability and scalability.',
      technologies: ['JavaScript', 'Linked List', 'DOM Manipulation', 'Game Logic', 'Modular Architecture'],
      link: '#',
      github: 'https://github.com/Chamathka2003/SpelingChain_Puzzle_Game-.git',
      images: ['/images/w1.jpeg', '/images/w2.jpeg']
    }
  ];

  const nextSlide = (projectId, totalImages) => {
    setActiveSlide(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) + 1) % totalImages
    }));
  };

  const prevSlide = (projectId, totalImages) => {
    setActiveSlide(prev => ({
      ...prev,
      [projectId]: ((prev[projectId] || 0) - 1 + totalImages) % totalImages
    }));
  };

  const openModal = (imageUrl, projectName) => {
    setSelectedImage({ url: imageUrl, name: projectName });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage({ url: '', name: '' });
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">Here are some of the projects I've worked on:</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              {project.images ? (
                <div className="project-carousel">
                  <button 
                    className="carousel-btn prev" 
                    onClick={() => prevSlide(project.id, project.images.length)}
                  >
                    ‹
                  </button>
                  <img 
                    src={project.images[activeSlide[project.id] || 0]} 
                    alt={`${project.title} - Slide ${(activeSlide[project.id] || 0) + 1}`}
                    className="project-image"
                    onClick={() => openModal(project.images[activeSlide[project.id] || 0], project.title)}
                    style={{ cursor: 'pointer' }}
                  />
                  <button 
                    className="carousel-btn next" 
                    onClick={() => nextSlide(project.id, project.images.length)}
                  >
                    ›
                  </button>
                  <div className="carousel-dots">
                    {project.images.map((_, index) => (
                      <span 
                        key={index} 
                        className={`dot ${(activeSlide[project.id] || 0) === index ? 'active' : ''}`}
                        onClick={() => setActiveSlide(prev => ({ ...prev, [project.id]: index }))}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="project-image-placeholder">
                  <span className="placeholder-text">Project Image</span>
                </div>
              )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              
              <div className="project-links">
                <button 
                  onClick={() => openModal(project.images[activeSlide[project.id] || 0], project.title)} 
                  className="project-link"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit' }}
                >
                  View Project
                </button>
                <a href={project.github} className="project-link" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ImageModal 
        isOpen={modalOpen}
        onClose={closeModal}
        imageUrl={selectedImage.url}
        projectName={selectedImage.name}
      />
    </section>
  );
}

export default Projects;
