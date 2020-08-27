import React, { Component } from 'react';
import Transformer from '../Components/Transformer';

class TransformersSection extends Component {
  
  state = {
    transformerIndex: 0
  }

  displayedTransformer = () => {
    const { transformers } = this.props
    const { transformerIndex } = this.state
    const currentTransformer = transformers[transformerIndex]
      return (
        <Transformer 
          key={ currentTransformer.id } 
          transformer={ currentTransformer }
          nextTransformer={ this.nextTransformer }
        />
      )
  }

  nextTransformer = () => {
    const { transformerIndex } = this.state
    this.setState({
      transformerIndex: transformerIndex === 2 ? 0 : (transformerIndex + 1)
    })
  }
  
  render() {
    return (
      <section className = "transformers-section">
        { this.props.transformersShown ? this.displayedTransformer() : null }
      </section>
    );
  }
}

export default TransformersSection;
