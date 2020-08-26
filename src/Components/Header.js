import React from 'react';

function Header(props) {

  return (
    <header>
      <img
        src = {props.img_src}
        alt = "logo"
        onClick={props.handleClick}
      />
    </header>
  );
}

export default Header;
