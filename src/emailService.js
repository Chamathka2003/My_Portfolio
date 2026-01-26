import emailjs from 'emailjs-com';

export const sendEmail = (formData) => {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  // Check if credentials are configured
  if (!serviceID || !templateID || !userID || 
      serviceID === 'your_service_id_here' || 
      templateID === 'your_template_id_here' || 
      userID === 'your_public_key_here') {
    return Promise.reject(new Error('EmailJS not configured. Please follow EMAILJS_SETUP.md to set up your credentials.'));
  }

  return emailjs.send(serviceID, templateID, formData, userID);
};
