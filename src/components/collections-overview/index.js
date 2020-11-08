import React from 'react';
import './styles.scss';
import CollectionPreview from '../collection-preview';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsArray } from '../../redux/collections/collections.selectors';

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

export default connect(mapStateToProps)(CollectionsOverview);