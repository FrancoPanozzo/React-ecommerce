import './styles.scss';
import React from 'react';
import { withRouter } from 'react-router-dom';

function MenuItem({ title, linkUrl, imageUrl, size, history, match }) {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);
