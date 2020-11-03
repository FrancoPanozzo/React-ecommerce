import './styles.scss';
import React from 'react';
import Button from '../button';

export default function CollectionItem({ id, name, imageUrl, price }) {
  const addToCart = () => {
    console.log(`Item id:${id} added`);
  };
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="image-overlay" />
        <Button extraClass="inverted" onClick={addToCart}>
          Add to cart
        </Button>
      </div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}
