import emailjs from 'emailjs-com';

export const sendEmail = (formData) => {
  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const userID = process.env.REACT_APP_EMAILJS_USER_ID;

  return emailjs.send(serviceID, templateID, formData, userID);
};
