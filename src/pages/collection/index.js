import React from 'react';
import CollectionItem from '../../components/collection-item';
import './styles.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/collections/collections.selectors';

function CollectionPage({ collection }) {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // This selector is created based on a prop,
  // so the first fx call is to create it and the second one to run it with state.
  collection: selectCollection(ownProps.match.params.collectionID)(state),
});

export default connect(mapStateToProps)(CollectionPage);
