import React from 'react';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Work in progress. More work will be done after selection.</p>
        <a href="/" className="btn-home">Go Back to Home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
