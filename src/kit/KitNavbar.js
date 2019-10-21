import React, { Component } from "react";
import styled from "styled-components";
import { Navbar } from "react-bootstrap";

const StyledBootstrapNavbar = styled(Navbar)`
  // background-color: orange;
  // box-shadow: 0 0 1px 2px #fdb813, 0 0 3px 4px #f8986d;
  display: flex;
  flex-direction: horizontal;
  justify-content: space-between;
`;

export class KitNavbar extends Component {
  render() {
    const { ...props } = this.props;
    return <StyledBootstrapNavbar {...props} />;
  }
}

export const KitNavbarBrand = styled(Navbar.Brand)`
  &&& {
    display: flex;
    flex-direction: horizontal;
    justify-content: space-between;
    color: 'red';
    // text-shadow: 0 1px 2px rgba(0, 0, 0, 0.75);
    font-size: 20px;
    padding-left: 10px;
    font-family: 'Titillium Web', sans-serif;
  }
`;

export const KitNavbarToggle = styled(Navbar.Toggle)`
  &&& {
    // display: flex;
  }
`;

export const KitNavbarCollapse  = styled(Navbar.Collapse)`
  &&& {
    // display: flex;
  }
`;
