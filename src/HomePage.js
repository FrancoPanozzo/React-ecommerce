import React from 'react';
import './HomePage.scss';
import MenuItem from './MenuItem';

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <MenuItem title="Hello" subtitle="world!" />
        <MenuItem title="Jackets" subtitle="world!" />
        <MenuItem title="Hello" subtitle="world!" />
        <MenuItem title="Women's" subtitle="world!" />
        <MenuItem title="Men's" subtitle="world!" />
      </div>
    </div>
  );
}
