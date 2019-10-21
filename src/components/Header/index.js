/**
 * @flow
 */
import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { Buttons } from 'components/Button'
import { createBrowserHistory } from "history";

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

const HeaderLink = styled(KitNav.Link)`
   &&&& {
    color: #999;
   }
`;

const HeaderWrapper = styled.div`
  background:#fff;
  border-bottom:1px solid #d8d8d8;
  position:absolute;
  width:100%;
  left:0;
  z-index:999;
`;

function Child({ match }) {
  return (
    <KitNavbarBrand>{match.params.id}</KitNavbarBrand>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    console.log(cb);
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    localStorage.removeItem("useremail");
    localStorage.removeItem("userpassword");
    localStorage.setItem("isLoggedIn", false);

    // console.log('isloggedin logout out click', localStorage.getItem("isLoggedIn"));
    // return false;
    // console.log(history);
    // return false;
    history.push('/');
    setTimeout(cb, 100);
  }
};

const LogoutBtn = withRouter(({ history }) => {
  // console.log("logout");
  return (
    <p style={{margin:0}} onClick={() => fakeAuth.signout()}>
      Logout
    </p>
  );
});

const Header = () => {
  return (
    <div>
      <HeaderWrapper>
        <KitNavbar collapseOnSelect expand="lg">

          <Route exact path="/" component={() => <KitNavbarBrand>Home</KitNavbarBrand>} />
          <Route path="/:id" component={Child} />

          <KitNavbarToggle aria-controls="basic-navbar-nav" />

          <KitNavbarCollapse id="basic-navbar-nav">

            <KitNav>
              <HeaderLink href="#features">
                <FontAwesomeIcon icon={'chart-pie'} />
              </HeaderLink>

              <KitDropdown>
                <KitDropdownToggle id="dropdown-basic">
                  <FontAwesomeIcon icon={'globe-europe'} />
                </KitDropdownToggle>

                <KitDropdownMenu>
                  <KitDropdownItem href="#/action-1">Action</KitDropdownItem>
                  <KitDropdownItem href="#/action-2">Another action</KitDropdownItem>
                  <KitDropdownItem href="#/action-3">Something else</KitDropdownItem>
                </KitDropdownMenu>
              </KitDropdown>

              {/* search */}
              <KitDropdown>
                <KitDropdownToggle>
                  <FontAwesomeIcon icon={'search'} />
                </KitDropdownToggle>

                <KitDropdownMenu
                  style={{
                    width: '19.9rem',
                    paddingLeft: '0.7rem'
                  }}
                >
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Buttons variant="outline-success">Search</Buttons>
                  </Form>
                </KitDropdownMenu>
              </KitDropdown>

            </KitNav>

            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}

            <KitNav alignright="true">
              <KitNav.Link href="#otherlinks">Other Links</KitNav.Link>
              <KitNav.Link eventKey={2} href="#contacts">
                Contacts
              </KitNav.Link>
            </KitNav>

            <KitDropdown alignRight={true}>
              <KitDropdownToggle>
                <FontAwesomeIcon icon={'user'} />
              </KitDropdownToggle>

              <KitDropdownMenu>
                <KitDropdownItem href="#/action-1">Profile</KitDropdownItem>
                <KitDropdownItem href="#/action-2">Settings</KitDropdownItem>
                <KitDropdownItem>
                  <LogoutBtn />
                </KitDropdownItem>
              </KitDropdownMenu>
            </KitDropdown>
          </KitNavbarCollapse>
        </KitNavbar>

      </HeaderWrapper>
    </div>
  );
}

export default Header;
