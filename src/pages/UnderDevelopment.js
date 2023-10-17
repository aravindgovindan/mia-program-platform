import React from 'react';
import { Link } from 'react-router-dom';

function UnderDevelopmentPage() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Nothing here yet!</h2>
      <p style={styles.description}>
        Check back later.
      </p>
      <Link to="/" style={styles.link}>Back to home</Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    marginBottom: '20px',
  },
  link: {
    fontSize: '16px',
    color: 'blue',
    textDecoration: 'underline',
  },
};

export default UnderDevelopmentPage;
