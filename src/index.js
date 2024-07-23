import React from 'react';
import { createRoot } from 'react-dom/client';
import './custom.scss'

import { store } from './app/store';
import { Provider } from 'react-redux';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

