/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default-member */
/**
 * @flow
 */
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import Home from 'containers/Home/Loadable';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import GlobalStyle from 'global-styles';
import Footer from 'components/Footer';
import About from 'containers/About/Loadable';
import ErrorBoundary from 'utils/errorboundary';
import { KitButton, KitContainer, KitCol, KitRow } from 'kit';


const AppWrapper = styled.div`
  // max-width: calc(1024px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  // padding: 0 16px;
  // flex-direction: column;
`;

const InnerContainer = styled.div`
  display:flex;
  height:100%;
  background:#f1f1f1;
`;

const Left = styled.div`
  // flex-basis:20%;
  // height:100%;
  width:300px;
`

const Right = styled.div`
  flex-basis:100%;
  background:#fff;
`

function App() {
  return (
    <InnerContainer>
      <GlobalStyle />

      <BrowserRouter>
        <Left>
          <Sidebar />
        </Left>

        <Right>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Right>
      </BrowserRouter>
    </InnerContainer>
  );
}

export default App;
