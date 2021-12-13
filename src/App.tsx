import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import defaultTheme from './styles/theme/defaultTheme';
import Header from './components/Header';
// import Articles from './components/Articles';
import Main from './pages/Main';

function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    <Header />
    <Main />
   </ThemeProvider>
  );
}

export default App;
