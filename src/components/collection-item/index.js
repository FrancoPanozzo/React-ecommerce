import './styles.scss';
import React from 'react';
import Button from '../button';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';

function CollectionItem({ item, addCartItem }) {
  const { name, imageUrl, price } = item;

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="image-overlay" />
        <Button extraClass="inverted" onClick={() => addCartItem(item)}>
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

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
