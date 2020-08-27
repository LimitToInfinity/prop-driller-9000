import React from 'react';

function Header(props) {
  const { logo, headerClicked } = props
  
  return (
    <header>
      <img
        src = { logo } 
        alt = "logo"
        onClick={ headerClicked }
      />
    </header>
  );
}

export default Header;
