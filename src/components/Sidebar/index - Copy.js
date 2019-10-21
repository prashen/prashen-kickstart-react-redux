/**
 * @flow
 */
import React from 'react';
import {ReactComponent as ReactLogo} from 'image/logo.svg'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLink = styled(Link)`
  display:block;
  padding: 0.25em 2em;
  color:white;

  &:hover {
    background: rgb(67, 32, 128);
    color: #000;
    text-decoration:none;
  }
`;

const HeaderWrapper = styled.div`
  background:rgb(103, 49, 194);
  height:100%;
  position:fixed;
  top:0;
  left:0;
  bottom:0;
  // width:300px;
  // background:gray;
  // padding:0 10px;
  // height:100%;
  // // width:20%;
  // // flex:flex-grow;
  // align-content: stretch;

`;

const HeaderLogo = styled.a`
  display:block;
  padding:10px;
  text-align:left;

  > h1 {
    color:white;
    margin:0;
  }
  
`

function Sidebar() {
  return (
      <HeaderWrapper>
        <HeaderLogo>
          <h1>Logo</h1>
        </HeaderLogo>

        <HeaderLink to="/">
          Home
        </HeaderLink>
        <HeaderLink to="/about">
          About
        </HeaderLink>
      </HeaderWrapper>
  );
}

export default Sidebar;
