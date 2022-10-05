import React from 'react';
import { Footer, Header } from '../components';

import { GlobalStyle } from '../style';

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
