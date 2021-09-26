import React from 'react';
import styled  from 'styled-components';

import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import NavMenu from './components/NavMenu/NavMenu';
import { Input } from './components/blocks/Input/Input';
import { InputSearch } from './components/blocks/Input/InputSearch';


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
              <Input label={"Label"} margin={"0 40 0"} />
              <InputSearch margin={"40 40 0"} />
          </Content>
          <Footer />
      </AppWrap>
  );
}

export default App;
