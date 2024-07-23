import React from 'react';
import Button from 'react-bootstrap/Button';
import { BsFillCartPlusFill } from "react-icons/bs";
import { increment } from '../../../features/counter/counterSlice';
import { useDispatch } from 'react-redux';

export default function AddToCartButton () {
  const dispatch = useDispatch()
  const addToCartStyle =  {
    width: '100%',
    fontSize: '.8rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
        <Button variant="outline-primary" size="sm" style={addToCartStyle}
          onClick={() => dispatch(increment())}>
          <BsFillCartPlusFill size={14} style={{marginRight: '4px'}}/>Add to Cart
        </Button>
  );
}
