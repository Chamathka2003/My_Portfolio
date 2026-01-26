// API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost/myportfilo/backend';

export const sendContactMessage = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to send message');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const getContactMessages = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to fetch messages');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};
