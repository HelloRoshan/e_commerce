import React from 'react';
import Card from 'react-bootstrap/Card';
import AddToCartButton from './AddToCartButton';
import './Product.scss';

export const Product = ({ product }) => {
  return(
    <Card className="product-card">
      <Card.Body>
        <Card.Img variant="top" src={product.image} className="product-card-img" />
        <Card.Title className="product-card-title">{product.title}</Card.Title>
        <Card.Text className="product-card-description">
          {product.description}
        </Card.Text>
        <Card.Text>
          ${product.price}
        </Card.Text>
        <AddToCartButton />
      </Card.Body>
    </Card>
  );
};
