import React from 'react';

const fetchProductCategoriesData = () => {
  let data;
  let promise = fetch('https://fakestoreapi.com/products/categories')
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

const productCategories = fetchProductCategoriesData();

export const ProductCategories = () => {
  const categories = productCategories.read();
  return (
    categories.map(category => (
      <div className='category-title' key={category}>
        {category}
      </div>
    ))
  );
}