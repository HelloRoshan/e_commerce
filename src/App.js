import React from 'react';
import Products from './components/Products/Products';
import MainMenu from './components/MainMenu/MainMenu';

const App = () => {
  return (
    <React.Fragment>
      <MainMenu />
      <Products />
    </React.Fragment>
  );
};

export default App;
