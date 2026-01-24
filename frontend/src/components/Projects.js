import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageModal from './ImageModal';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalState, setModalState] = useState({ isOpen: false, imageUrl: '', projectName: '' });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      console.log('🔄 Fetching projects from API...');
      const response = await axios.get('/api/projects');
      console.log('✅ API Response received:', response);
      console.log('📊 Response data:', response.data);
      console.log('🔍 Is array?', Array.isArray(response.data));
      console.log('📏 Array length:', response.data?.length);
      
      // Ensure response.data is an array
      if (Array.isArray(response.data)) {
        console.log('✅ Setting projects:', response.data);
        setProjects(response.data);
      } else {
        console.warn('⚠️ API response is not an array:', response.data);
        throw new Error('Invalid API response format');
      }
      setLoading(false);
    } catch (err) {
      console.error('❌ Error fetching projects:', err);
      console.log('🔄 Using default projects fallback');
      // Use default projects if API is not available
      setProjects([
        {
          id: 1,
          name: 'Personal Website',
          description: 'A full-stack personal portfolio website built with React, Java Spring Boot, and MySQL.',
          technologies: 'React, Spring Boot, MySQL'
        },
        {
          id: 2,
          name: 'E-commerce Platform',
          description: 'An online shopping platform with user authentication, product catalog, and shopping cart.',
          technologies: 'React, Java, REST API'
        },
        {
          id: 3,
          name: 'Task Management App',
          description: 'A productivity application for managing tasks and projects with real-time updates.',
          technologies: 'React, Spring Boot, WebSocket'
        },
        {
          id: 4,
          name: '🌸 Blossom Flower Delivery Website',
          description: 'Blossom is a full-stack flower delivery web application developed using Spring Boot and Java. The system is designed to provide an easy and smooth online flower ordering experience for customers while offering a powerful Admin Dashboard for business management. Features secure user authentication (Login & Signup), role-based access for Admin and Customers, customer features for browsing flowers with images and descriptions, placing orders, and Admin Dashboard for managing flowers and customer orders efficiently.',
          technologies: 'Spring Boot, Java, HTML, CSS, MySQL, MVC',
          category: 'E-commerce',
          image_url: '/images/projects/blossom-flower-shop.png'
        }
      ]);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="page-container">
        <h2>Loading projects...</h2>
      </div>
    );
  }

  const openImageModal = (imageUrl, projectName) => {
    setModalState({ isOpen: true, imageUrl, projectName });
  };

  const closeImageModal = () => {
    setModalState({ isOpen: false, imageUrl: '', projectName: '' });
  };

  return (
    <div className="page-container">
      <div className="section">
        <h2>My Projects</h2>
        <p>Here are some of the projects I've worked on:</p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {project.image_url && (
              <div className="project-image" onClick={() => openImageModal(project.image_url, project.name)}>
                <img src={project.image_url} alt={project.name} />
                <div className="image-overlay">
                  <span className="zoom-icon">🔍</span>
                </div>
              </div>
            )}
            {!project.image_url && (
              <div className="project-image-placeholder">
                <span>📁</span>
              </div>
            )}
            <div className="project-content">
              <h3>{project.name}</h3>
              {project.category && (
                <div className="project-category">
                  <span className="category-badge">{project.category}</span>
                </div>
              )}
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies && project.technologies.split(',').map((tech, index) => (
                  <span key={index} className="tech-tag">{tech.trim()}</span>
                ))}
              </div>
              <div className="project-links">
                {project.github_url && (
                  <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                )}
                {project.live_url && (
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="project-link">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <ImageModal 
        isOpen={modalState.isOpen}
        onClose={closeImageModal}
        imageUrl={modalState.imageUrl}
        projectName={modalState.projectName}
      />
    </div>
  );
}

export default Projects;
