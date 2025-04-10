import React from 'react';

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact</h1>
      <p style={styles.paragraph}>This is the Contact page.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: '3rem',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.5rem',
    color: '#666',
  },
};

export default Contact;