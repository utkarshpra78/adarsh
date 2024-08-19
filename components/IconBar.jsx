import React from 'react';
import './IconBar.css';

const IconBar = () => {
  return (
    <div className="icon-bar">
      <div className="icon-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="icon heart-icon"
        >
          <path
            fill="red"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>
      <div className="icon-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="icon pencil-icon"
        >
          <path
            fill="gray"
            d="M3 21v-3.75L14.06 6.19l3.75 3.75L6.75 21H3zm3.75-4.25L16.5 7.5 14.25 5.25 4.5 15H3v3h3v-1.25zM21 7l-4-4-1.41 1.41 4 4L21 7z"
          />
        </svg>
      </div>
      <div className="icon-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="icon trash-icon"
        >
          <path
            fill="gray"
            d="M5 4v1H3v2h18V5h-2V4h-4V3H9v1H5zm2 3h10v12H7V7zm2 2v8h2V9H9zm4 0v8h2V9h-2z"
          />
        </svg>
      </div>
    </div>
  );
};

export default IconBar;
