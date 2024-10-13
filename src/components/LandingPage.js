import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <header className="header">
        <h1>SEVADOST</h1>
        <nav>
          <Link to="/404">Home</Link>
          <Link to="/404">About</Link>
          <Link to="/404">Contact</Link>
        </nav>
        <Link to="/404" className="login-signup-btn">Login/Sign-up</Link>
      </header>

      <section className="welcome-section">
        <h2>Welcome to SevaDost</h2>
        <p>Track postal services in real-time and engage with the Department of Posts</p>
        <Link to="/404" className="btn-register">Register or Login</Link>
      </section>

      <section className="features">
        <h3>Key Features</h3>
        <div className="feature-grid">
          <div className="feature-item">
            <h4>Real-time Tracking</h4>
            <p>Monitor the status of your postal deliveries in real-time.</p>
          </div>
          <div className="feature-item">
            <h4>Citizen Engagement</h4>
            <p>Engage with the Department of Posts through feedback and suggestions.</p>
          </div>
          <div className="feature-item">
            <h4>Notifications</h4>
            <p>Get instant notifications about your postal services.</p>
          </div>
          <div className="feature-item">
            <h4>Secure Services</h4>
            <p>Experience the security and reliability of services provided by the Department of Posts.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Privacy Policy | Terms of Service</p>
        <div>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
