import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import styled  from 'styled-components';

//components
import { Tools } from 'components/Tools/Tools';
import { Header } from "components/Header/Header";
import { Footer } from 'components/Footer/Footer';
import { NavMenu } from 'components/NavMenu/NavMenu';
import  ScrollToTop  from "components/ScrollToTop/ScrollToTop";

//pages
import { Home } from 'pages/Home';
import { ProductCategory } from 'pages/ProductCategory';
import { Basket } from 'pages/Basket';
import { Product } from 'pages/Product';

// content
import { appContent } from "helpers/content";
import { UserActive } from 'pages/UserActive';



export function App() {
  return (
      <AppWrap>
          <Tools>
              <Content>
                  <Header />
                  <NavMenu content={appContent} />
                  <ScrollToTop>
                      <Switch>
                          <Route path='/home' exact>
                              <Home content={appContent} />
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
                          <Route path='/user'>
                              <UserActive />
                          </Route>
                          <Route path='/'>
                              <Redirect to='/home' />
                          </Route>
                      </Switch>
                  </ScrollToTop>
              </Content>
              <Footer />
          </Tools>
      </AppWrap>
  );
}


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
`;