import './styles.scss';
import React from 'react';
import CollectionPreview from '../../components/collection-preview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/collections/collections.selectors';

function ShopPage({ collections }) {
  return (
    <div className="shop-page">
      {collections.map(({ id, ...other }) => (
        <CollectionPreview key={id} {...other} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
