import React from 'react';
import { render } from 'react-dom';

export default class Header extends React.Component{
  render(){
    return (
      <header>
        <img
          src = {this.props.src}
          alt = "logo"
        />
      </header>
    );
    }
}


