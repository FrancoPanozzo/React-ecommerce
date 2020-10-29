import './styles.scss';
import React from 'react';
import CollectionItem from '../collection-item';

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h3 className="title">{title}</h3>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...props }) => (
            <CollectionItem key={id} {...props} />
          ))}
      </div>
    </div>
  );
}
