import React from 'react';

const Header = ({ tagline }) => (
  <header className="top">
    <h1>
      Catch
      <span className="ofThe">
        <span className="of">of</span>
        <spnan className="the">the</spnan>
      </span>
      Day
    </h1>
    <h3 className="tagline"><span>{tagline}</span></h3>
  </header>
);

export default Header;
