import React from 'react';

import Topbar from './Topbar';

const Header = () => {
  return (
    <header>
      <div className="header-inner">
        <div className="logo"></div>
      </div>
      <Topbar></Topbar>
    </header>
  );
};

export default Header;
