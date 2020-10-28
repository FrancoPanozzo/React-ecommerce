import React from 'react';

export default function MenuItem({ title, subtitle }) {
  return (
    <div className="menu-item">
      <div className="content">
        <h2 className="title">{title}</h2>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
}
