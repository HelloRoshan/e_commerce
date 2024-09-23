import React, { Suspense }  from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Products, ProductCategories } from '..';
import { PlaceHolderProducts } from '../Products/PlaceholderProducts';
import { PlaceHolderCategories } from '../ProductCategories/PlaceHolderCategories';

export const Body = () => {
  return (
      <Container className="pt-4 pb-4">
          <Row>
              <Col lg={2} className="mb-2 mt-2">
                <Suspense fallback={<PlaceHolderCategories />}>
                  <ProductCategories />
                </Suspense>
              </Col>
              <Col lg={10} className="mb-2 mt-2">
                <Suspense fallback={<PlaceHolderProducts />}>
                  <Products />
                </Suspense>
              </Col>
          </Row>
      </Container>
  );
};
