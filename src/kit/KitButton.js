import React from "react";
import { Component } from "react";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledBootstrapButton = styled(Button)`
  &&& {
    background:lightgray;
    color:#000;
    border:0;
    padding:0.5rem;
    border-radius:0.3rem;
    transition:all 0.2s ease 0.1s;
  }

  &&&&&:hover {
    background:darkgray;
    color:white;
  }

  &&&&&:active {
    background:darkgray;
  }
  &&&&:focus {
    outline: 0;
    box-shadow: none;
  }
`;

export class KitButton extends Component {
  render() {
    const { ...props } = this.props;
    return <StyledBootstrapButton {...props} />;
  }
}

