/**
 * @flow
 */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Buttons } from 'components/Button'
// import A from '../components/A';
import { createBrowserHistory } from "history";
import Wrapper from './Wrapper';
import {
  KitContainer,
  KitDropdown,
  KitDropdownMenu,
  KitDropdownToggle,
  KitDropdownItem,
  KitNavbar,
  KitNavbarBrand,
  KitNavbarToggle,
  KitNavbarCollapse,
  KitNav
} from 'kit';
import { FormControl, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const history = createBrowserHistory({
  // basename: '/kickstart', // The base URL of the app (see below)
  forceRefresh: true, // Set true to force full page refreshes
  keyLength: 6 // The length of location.key
  // A function to use to confirm navigation with the user (see below)
  // getUserConfirmation: (message, callback) => callback(window.confirm(message))
});

const Copright = styled.p`
 color:#666
`

function Footer() {
  return (
    <Wrapper>
      <div>
        <Link to="/home">
          Home
      </Link>

        <Link to="/about">
          About
      </Link>
      </div>


      <Copright>© 2019 Prashen, made with love for a better web</Copright>
    </Wrapper>
  );
}

export default Footer;
