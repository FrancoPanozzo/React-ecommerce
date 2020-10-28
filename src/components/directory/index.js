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
        {this.state.sections.map(({ id, ...props }) => (
          <MenuItem key={id} {...props} />
        ))}
      </div>
    );
  }
}
