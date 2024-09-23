import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Product } from './Product/Product';

const fetchProductsData = () => {
    let data;
    let promise = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => {
        data = json
    });
  
    return {
      read() {
        if (!data) {
          throw promise;
        }
        return data;
      }
    };
};
const productResource = fetchProductsData();


export const Products = (props) => {
    const products = productResource.read();
    return (
        <Row>
            {
                products.map((product) => (
                    <Col xs={6} sm={4} md={4} lg={3} style={{marginBottom: '12px'}} key={product.id}>
                        <Product product={product} />
                    </Col>
                ))
            } 
        </Row>
    );
}