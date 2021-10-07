import './src/styles/global.css';
import './src/styles/scss/styles.scss';

import React from 'react';

import { DataProvider } from './src/contexts/DataContext';
import { ThemeProvider } from './src/contexts/ThemeContext';

// export const wrapRootElement = ({ element, props }) => (

//     <div>{element}</div>

// );

export const wrapPageElement = ({ element, props }) => (
  <DataProvider value={props}>
    <ThemeProvider value={props}>{element}</ThemeProvider>
  </DataProvider>
);
