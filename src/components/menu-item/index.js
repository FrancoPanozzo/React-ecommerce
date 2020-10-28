import './styles.scss';
import React from 'react';

export default function MenuItem({ title, linkUrl, imageUrl, size }) {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h2 className="title">{title}</h2>
        <span className="subtitle">shop now</span>
      </div>
    </div>
  );
}
