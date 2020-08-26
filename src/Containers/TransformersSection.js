import React, { Component } from 'react';
import Transformer from '../Components/Transformer';

class TransformersSection extends Component {
  render() {
    const $transformers = this.props.transformers.map(item => {
      return (<Transformer url={item.url} name={item.name} />)
    })
    return (
      <section className = "transformers-section">
       {$transformers}
      </section>
    );
  }
}

export default TransformersSection;
