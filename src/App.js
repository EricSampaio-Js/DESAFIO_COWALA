import React from 'react';
import Routers from './routers/router';

import NavBar from './components/NavBar'

import { GlobalStyle } from './style/GlobalStyle';

const App = () => {
  return ( 
    <>
      <GlobalStyle />
      <NavBar />
      <Routers />
    </>
  );
}
 
export default App;