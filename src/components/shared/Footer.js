import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav">
        <ul>
          <li> <a href="#"> View Disclamer </a> </li>
          <li> <a href="#"> View privacy policy </a> </li>
          <li> <a href="#"> view Analytics Policy </a> </li>
        </ul>
      </div>
      <div className="provided">
        <div> Provided By </div>
        <div className="f-logo">
          <img src="../src/assets/images/logo_white.svg" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
