import React from 'react';
import MainMenu from './components/MainMenu/MainMenu';
import { Body } from './components/Body/Body';

const App = () => {
  return (
    <React.Fragment>
      <MainMenu />
      <Body />
    </React.Fragment>
  );
};

export default App;
