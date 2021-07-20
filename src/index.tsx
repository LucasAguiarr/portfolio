import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './pages/Home';
import { Animation } from './Tools/Animation';
import { GlobalStyle } from './Tools/globalStyle';



ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Animation />
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
