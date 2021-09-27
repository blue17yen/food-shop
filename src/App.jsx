import React from 'react';
import styled  from 'styled-components';

import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import NavMenu from './components/NavMenu/NavMenu';
import { Input } from './components/blocks/Input/Input';
import { InputSearch } from './components/blocks/Input/InputSearch';
import { Banner } from './components/blocks/Card/Banner';
import Container from './components/Container/Container';
import { Card } from './components/blocks/Card/Card';
import { Home } from './Pages/Home';


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
              <Home />
          </Content>
          <Footer />
      </AppWrap>
  );
}

export default App;
