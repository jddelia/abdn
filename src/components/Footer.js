import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div id="copy">
        <p>ADBN 2019 &copy;</p>
      </div>

      <div id="info">
        <a href="https://twitter.com/abdnmag">
          <i className="fab fa-twitter fa-2x"></i>
        </a>
        <a href="https://www.instagram.com/abdnmag/">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
        <i className="fab fa-medium-m fa-2x"></i>
        <i className="fab fa-facebook-f fa-2x"></i>
      </div>
    </footer>
  );
}

export default Footer;