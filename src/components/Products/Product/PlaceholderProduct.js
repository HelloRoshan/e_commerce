import React from 'react';
import { Placeholder } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import AddToCartButton from './AddToCartButton';
import './Product.scss';

export const PlaceHolderProduct = ({ }) => {
  return(
    <Card className="product-card">
      <Card.Body>
        <Card.Img variant="top" src="https://placehold.co/100?text=Product+Image" className="product-card-img" />
        <Placeholder as={Card.Title} animation="glow" rounded>
          <Placeholder xs={12} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow" rounded>
          <Placeholder xs={12} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow" rounded>
          <Placeholder xs={3} />
        </Placeholder>
        <Placeholder.Button variant="primary" aria-hidden="true" animation="glow" xs="12" style={{height: "30px"}} rounded >
        </Placeholder.Button>
      </Card.Body>
    </Card>
  );
};
