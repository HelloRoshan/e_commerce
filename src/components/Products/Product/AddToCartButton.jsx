import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

const addToCartStyle =  {
  padding: '4px 8px',
  width: '100%',
  fontSize: '.9rem'
};

export default class AddToCartButton extends Component {
  render() {
    return (
        <Button variant="outline-primary" style={addToCartStyle}>Add to Cart</Button>
    );
  }
}
