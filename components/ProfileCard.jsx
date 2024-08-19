import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ name, email, phone, website }) => {
  return (
    <div className="profile-card">
      <div className="image-placeholde object-contain">
        <img
          src="https://avatars.dicebear.com/v2/avataaars/{{username}}.svg?options[mood][]=happy"
          alt="User"
        /> 
      </div>
      <div className="profile-info">
        <h3>{name}</h3>
        <div className="contact-info">
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
              <path fill="gray" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4.25l-8 4.99-8-4.99V6l8 5 8-5v2.25z" />
            </svg>
            <span>{email}</span>
          </div>
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
              <path fill="gray" d="M6.62 10.79a15.09 15.09 0 006.59 6.59l2.2-2.2a1 1 0 01.91-.27c1.14.23 2.35.35 3.58.35a1 1 0 011 1v3.59a1 1 0 01-1 1A18 18 0 013 4a1 1 0 011-1h3.58a1 1 0 011 1c0 1.24.12 2.45.35 3.59a1 1 0 01-.28.92l-2.19 2.18z" />
            </svg>
            <span>{phone}</span>
          </div>
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon">
              <path fill="gray" d="M12 2a10 10 0 00-2.25 19.78V14.9h-1.9v-3.1h1.9V9.75c0-1.91 1.16-2.96 2.86-2.96.82 0 1.66.15 1.66.15v1.83h-.93c-.92 0-1.2.57-1.2 1.15v1.38h2.06l-.33 3.1h-1.73v6.88A10 10 0 0012 2z" />
            </svg>
            <a href={website} target="_blank" rel="noopener noreferrer">{website}</a>
          </div>
        </div>
      </div>
      <div className="action-icons">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon heart-icon">
          <path fill="red" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon pencil-icon">
          <path fill="gray" d="M3 21v-3.75L14.06 6.19l3.75 3.75L6.75 21H3zm3.75-4.25L16.5 7.5 14.25 5.25 4.5 15H3v3h3v-1.25zM21 7l-4-4-1.41 1.41 4 4L21 7z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="icon trash-icon">
          <path fill="gray" d="M5 4v1H3v2h18V5h-2V4h-4V3H9v1H5zm2 3h10v12H7V7zm2 2v8h2V9H9zm4 0v8h2V9h-2z" />
        </svg>
      </div>
    </div>
  );
};

export default ProfileCard;
