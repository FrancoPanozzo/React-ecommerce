import React from 'react';
import './styles.scss';
import CollectionPreview from '../collection-preview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsArray } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner';

function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...other }) => (
        <CollectionPreview key={id} {...other} />
      ))}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsArray,
});

export default WithSpinner(connect(mapStateToProps)(CollectionsOverview));
