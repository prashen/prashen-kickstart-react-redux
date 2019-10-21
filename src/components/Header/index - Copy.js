/**
 * @flow
 */
import React from 'react';
import {ReactComponent as ReactLogo} from 'image/logo.svg'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLink = styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #41addd;
  color: #41addd;

  &:active {
    background: #41addd;
    color: #fff;
  }
`;

const HeaderWrapper = styled.div`
  background:lightgray;
  padding:0 10px;
`;

const HeaderLogo = styled.a`
  // border:1px solid #000;
`

function Header() {
  return (
    <div>
      <HeaderWrapper>
        <HeaderLink to="/">
          Home
        </HeaderLink>
        <HeaderLink to="/about">
          About
        </HeaderLink>
      </HeaderWrapper>
    </div>
  );
}

export default Header;
