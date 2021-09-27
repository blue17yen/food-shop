import React from 'react';
import styled  from 'styled-components';

import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import NavMenu from './components/NavMenu/NavMenu';
import { Home } from './Pages/Home';
import ProductCategory from './Pages/ProductCategory';


const AppWrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const Content = styled.div`
    flex: 1 0 auto;
`

function App() {
  return (
      <AppWrap>
          <Content>
              <Header />
              <NavMenu />
              <ProductCategory />
          </Content>
          <Footer />
      </AppWrap>
  );
}

export default App;
