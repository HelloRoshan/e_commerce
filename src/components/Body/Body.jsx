import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Products, ProductCategories } from '../';

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
