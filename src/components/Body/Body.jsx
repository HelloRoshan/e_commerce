import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductCategories from '../ProductCategories/ProductCategories';
import Products from '../Products/Products';

export const Body = () => {
  return (
      <Container className="pt-4 pb-4">
          <Row>
              <Col lg={2}>
                <ProductCategories />
              </Col>
              <Col lg={10}>
                  <Products />
              </Col>
          </Row>
      </Container>
  );
};
