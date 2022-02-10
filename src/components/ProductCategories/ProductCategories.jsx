import React, { Component } from 'react';

export default class ProductCategories extends Component {
  constructor(props) {
      super(props);
      this.state = {
          productCategories: []
      };
  }

   componentDidMount() {
      fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => {
            this.setState({
                productCategories: json
            });
        });
    }

  render() {
    return <div>
      {
        this.state.productCategories.map(category => (
          <a href='#/'>{category}</a>
        ))
      }
    </div>;
  }
}
