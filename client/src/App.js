import React from 'react';

import FloatAddButton from './components/FloatAddButton';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <FloatAddButton />
    </>
  );
}

export default App;
