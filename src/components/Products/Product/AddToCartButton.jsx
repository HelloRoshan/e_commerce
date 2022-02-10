import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { BsFillCartPlusFill } from "react-icons/bs";

const addToCartStyle =  {
  width: '100%',
  fontSize: '.8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};

export default class AddToCartButton extends Component {
  render() {
    return (
        <Button variant="outline-primary" size="sm" style={addToCartStyle}>
          <BsFillCartPlusFill size={14} style={{marginRight: '4px'}}/>Add to Cart</Button>
    );
  }
}
