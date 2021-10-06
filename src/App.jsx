import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import styled  from 'styled-components';


import { Tools } from './components/Tools/Tools';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import { NavMenu } from './components/NavMenu/NavMenu';
import { Home } from './Pages/Home';
import { ProductCategory } from './Pages/ProductCategory';
import { Basket } from './Pages/Basket';
import { Product } from './Pages/Product';


const AppWrap = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
`;

const Content = styled.div`
    flex: 1 1 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`

function App() {
  return (
      <AppWrap>
          <Tools>
              <Content>
                  <Header />
                  <NavMenu />
                  <Switch>
                      <Route path='/home' exact>
                          <Home />
                      </Route>
                      <Route path='/basket'>
                          <Basket />
                      </Route>
                      <Route path='/products/:category'>
                          <ProductCategory />
                      </Route>
                      <Route path='/product/:id'>
                          <Product />
                      </Route>
                      <Route path='/'>
                          <Redirect to='/home' />
                      </Route>
                  </Switch>
              </Content>
              <Footer />
          </Tools>
      </AppWrap>
  );
}

export default App;
