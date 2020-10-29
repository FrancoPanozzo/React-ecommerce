import './styles.scss';
import React, { useState } from 'react';
import shopData from './shop.data';
import CollectionPreview from '../../components/collection-preview';

export default function ShopPage() {
  const [collections, setCollections] = useState(shopData);
  return (
    <div className="shop-page">
      <h1>Shop</h1>
      {collections.map(({ id, ...other }) => (
        <CollectionPreview key={id} {...other} />
      ))}
    </div>
  );
}
