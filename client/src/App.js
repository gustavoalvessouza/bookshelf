import React from 'react';

import Navbar from './components/Navbar';
import FloatAddButton from './components/FloatAddButton';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Navbar />
      <Routes />
      <GlobalStyle />
      <FloatAddButton />
    </>
  );
}

export default App;
