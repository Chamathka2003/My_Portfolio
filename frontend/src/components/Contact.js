import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [modalState, setModalState] = useState({ isOpen: false, type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post('/api/contact', formData);
      setModalState({ 
        isOpen: true,
        type: 'success', 
        message: 'Thank you for reaching out! I\'ll get back to you soon.' 
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setModalState({ 
        isOpen: true,
        type: 'error', 
        message: 'Oops! Something went wrong. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: '', message: '' });
  };

  return (
    <div className="page-container">
      <div className="section">
        <h2>Get In Touch</h2>
        <p>Feel free to reach out to me for any inquiries or opportunities.</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
      
      <Modal 
        isOpen={modalState.isOpen} 
        onClose={closeModal}
        type={modalState.type}
        message={modalState.message}
      />
    </div>
  );
}

export default Contact;
