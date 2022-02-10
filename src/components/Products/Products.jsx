import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Product} from './Product/Product';

export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    products: json
                });
            });
    }

    render() {
        return (
            <Row>
                {
                this.state.products.map((product) => (
                    <Col xs={6} sm={4} md={4} lg={3} style={{marginBottom: '12px'}} key={product.id}>
                        <Product product={product} />
                    </Col>
                ))
            } 
            </Row>
        );
    }
}