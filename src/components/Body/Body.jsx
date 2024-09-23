import React, { Suspense }  from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Products, ProductCategories } from '../';

export const Body = () => {
  return (
      <Container className="pt-4 pb-4">
          <Row>
              <Col lg={2}>
              <Suspense fallback={<p>Loading products...</p>}>
                <ProductCategories />
              </Suspense>
              </Col>
              <Col lg={10}>
                <Suspense fallback={<p>Loading products...</p>}>
                  <Products />
                </Suspense>
              </Col>
          </Row>
      </Container>
  );
};
