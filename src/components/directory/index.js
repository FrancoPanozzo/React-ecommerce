import './styles.scss';
import React, { Component } from 'react';
import MenuItem from '../../components/menu-item';
import sections from './directory.data';

export default class Directory extends Component {
  state = {
    sections,
  };

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map((section) => (
          <MenuItem
            title={section.title}
            linkUrl={section.linkUrl}
            imageUrl={section.imageUrl}
            size={section.size}
          />
        ))}
      </div>
    );
  }
}
