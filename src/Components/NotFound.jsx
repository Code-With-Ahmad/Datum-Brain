import React from 'react';
import '../CSS/NotFound.css'; 

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Page not found</p>
      <p>Sorry, the page you are looking for does not exist.</p>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default NotFound;
