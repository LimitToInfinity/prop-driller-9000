import React from 'react';

function Header(props) {

  

  return (
    <header>
      <img
        onClick = {props.clicked}
        src = {props.logo}
        alt = "logo"
      />
    </header>
  );
}

export default Header;
