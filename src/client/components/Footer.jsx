import React from 'react';

const Footer = ({meters}) => {
  return (
    <nav className="navbar fixed-bottom navbar-light bg-faded">
      <span className="navbar-brand apple-font center">
        You've searched {Math.round(meters)} kilometers so far!
      </span>
    </nav>
  )
}

export default Footer;