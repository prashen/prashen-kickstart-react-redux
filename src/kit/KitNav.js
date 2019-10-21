import React, { Component } from "react";
import styled from "styled-components";
import { Nav } from "react-bootstrap";

export const KitNav = styled(Nav)`
  {
    ${props => props.alignright && 'flex:1; justify-content:flex-end;'}
  }
`;
