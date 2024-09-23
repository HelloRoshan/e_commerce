import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { PlaceHolderProduct } from './Product/PlaceholderProduct';

export const PlaceHolderProducts = () => {
    return (
        <Row>
            {
                Array.from({ length: 12 }).map((product, index) => (
                    <Col xs={6} sm={4} md={4} lg={3} style={{marginBottom: '12px'}} key={index}>
                        <PlaceHolderProduct />
                    </Col>
                ))
            } 
        </Row>
    );
}