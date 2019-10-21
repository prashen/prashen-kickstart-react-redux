import React, { useState } from "react";
import { Component } from "react";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";

// const StyledBootstrapDropdownToggle = styled(Dropdown.Toggle)`
// &&& {
//   color: ${props =>
//     props.disabled ? props.theme.text2 : props.theme.background};
//   background-color: ${props => props.theme.accent1};
//   border-color: ${props => props.theme.accent2};
//   background-image: linear-gradient(
//     to bottom,
//     #fff,
//     ${props => props.theme.accent1}
//   );
//   font-family: "Alegreya Sans SC", sans-serif;
// }

//   &&&&&:hover {
//     box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
//     border-color: ${props =>
//       props.disabled ? undefined : props.theme.foreground};
//     color: ${props =>
//       props.disabled ? props.theme.text2 : props.theme.background};
//   }

//   &&&&&:active {
//     background-image: ${props => (props.disabled ? undefined : "unset")};
//     box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.5);
//     border-color: ${props => props.theme.accent1};
//     background-color: ${props => props.theme.accent1};
//     color: ${props =>
//       props.disabled ? props.theme.text2 : props.theme.background};
//   }
//   &&&&:focus {
//     outline: 0;
//     box-shadow: none;
//   }
// `;

// export class KitDropdownToggle extends Component {
//   render() {
//     // const { showMenu, alignRight, ...rest } = this.props;

//     return (
//       <StyledBootstrapDropdownToggle />
//     );
//   }
// }

// export const StyledBootstrapDropdownMenu = styled(Dropdown.Menu)``;

// export class KitDropdownMenu extends Component {
//   render() {
//     // const { showMenu, alignRight, ...rest } = this.props;
//     return (
//       <StyledBootstrapDropdownMenu />
//     );
//   }
// }

// export const StyledBootstrapDropdownItem = styled(Dropdown.Item)`
//   display: block;
//   width: 100%;
//   padding: 0.25rem 1.5rem;
//   clear: both;
//   font-weight: 400;
//   color: #212529;
//   text-align: inherit;
//   white-space: nowrap;
//   background-color: transparent;
//   border: 0;
//   color: ${props => props.theme.text2};

//   &:hover {
//     background-color: ${props => props.theme.accent1};
//     text-decoration: none;
//     color: ${props => props.theme.text2};
//   }

//   &:active {
//     background-color: ${props => props.theme.foreground};
//     color: ${props => props.theme.background};
//   }
// `;

// export class KitDropdownItem extends Component {
//   render() {
//     // const { showMenu, alignRight, onSelect, ...rest } = this.props;
//     return <StyledBootstrapDropdownItem />;
//   }
// }

// export const StyledBootstrapDropdown = styled(Dropdown)``;

// export function KitDropdown(props) {
//   // const [showMenu, setShowMenu] = useState(false);

//   return (
//     <StyledBootstrapDropdown
//       // {...props}
//       // className={showMenu ? "show dropdown" : "dropdown"}
//     >
//       <KitDropdownToggle

//       >
//         {props.label}
//       </KitDropdownToggle>
//       <KitDropdownMenu
//         // {...props}
//         // onClick={() => setShowMenu(!showMenu)}
//         // showMenu={showMenu}
//       >
//         {props.items}
//       </KitDropdownMenu>
//     </StyledBootstrapDropdown>
//   );
// }

export const KitDropdown = styled(Dropdown)`
  border:0;
`

export const KitDropdownToggle = styled(Dropdown.Toggle)`
   &&&& {
    color: #999;
    background-color: transparent;
    border:0;
    padding:8px;
  };
  
  &&&&&:hover {
    box-shadow: none;
    border-color: none;
    color: rgb(67,32,128);
  }

  &&&&&:active {
    box-shadow: none;
    border-color: none;
    color: rgb(67,32,128);
  }
  &&&&:focus {
    background:none;
    outline: 0;
    box-shadow: none;
    color: rgb(67,32,128);
  }
`

export const KitDropdownMenu = styled(Dropdown.Menu)`
  //  border:1px solid orange;
`

export const KitDropdownItem = styled(Dropdown.Item)`
  //  border:1px solid purple;
`
