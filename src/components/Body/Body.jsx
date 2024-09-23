import React, { Suspense }  from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Products, ProductCategories } from '../';
import { PlaceHolderProducts } from '../Products/PlaceholderProducts';

export const Body = () => {
  return (
      <Container className="pt-4 pb-4">
          <Row>
              <Col lg={2}>
                <ProductCategories />
              </Col>
              <Col lg={10}>
                <Suspense fallback={<PlaceHolderProducts />}>
                  <Products />
                </Suspense>
              </Col>
          </Row>
      </Container>
  );
};
