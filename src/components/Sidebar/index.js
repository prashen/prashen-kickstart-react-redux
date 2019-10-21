/**
 * @flow
 */
import React from 'react';
// import { ReactComponent as ReactLogo } from 'image/logo.svg'
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Menuitem from '../../../src/menuitem.json'

const HeaderLink = styled(NavLink)`
  display:flex;
  padding: 0.50em 0.5em;
  color:white;
  margin:10px;
  border-radius:3px;
  transition:all 0.1s ease 0.1s;
  flex-direction: row;
    justify-content: stretch;
    align-items: center;

  &:hover {
    background: rgba(255, 255, 255,0.2);
    color: #fff;
    // font-weight:bold;
    text-decoration:none;
  }

  > span {
    padding-left:10px;
    display:inline-block;
    width:100%;
  }
`;

const HeaderLinkDropdown  = styled(HeaderLink)`
  &&& {
    color:white;
    cursor:pointer;
  }
  &&&:hover {
    background: rgba(255, 255, 255,0.2);
    color: #fff;
    // font-weight:bold;
    text-decoration:none;
  }
  
`

const HeaderWrapper = styled.div`
  background:rgb(103, 49, 194);
  width:250px;
  flex-grow: 1;  /*ensures that the container will take up the full height of the parent container*/
  overflow-y: auto;  /*adds scroll to this container*/
`;

const HeaderLogo = styled.a`
  display:block;
  padding:20px;
  text-align:center;
  border-bottom:1px solid rgb(67, 32, 128);
  margin-bottom:10px;

  > h1 {
    color:white;
    margin:0;
    font-size:22px;
  }
`


class Sidebar extends React.Component {
  state = {

  }
  isActiveCheckerFun = (match, location) => {
    if (!match) {
      return false
    }

    console.log(match.isExact);
    if (match.isExact === true) {
      return match.isExact
    }
  }

  handleClick(item) {
    console.log(item);
    this.setState(prevState => ({ [item]: !prevState[item] }));
  }

  handler = children => {
    let activeStyleObj = {
      fontWeight: "bold",
      // backgroundColor: 'rgb(67, 32, 128)'
      backgroundColor: 'rgba(255, 255, 255,0.2)'
    }
    const { state } = this;
    return children.map((subOption, ind) => {
      
      //when there is no children
      if (!subOption.children) {
        // console.log(subOption)
        return (
          <div key={ind}>
            <div className="dd-header">
              <HeaderLink
                isActive={this.isActiveCheckerFun}
                activeStyle={activeStyleObj}
                to={`${subOption.url}`}
                onClick={() => this.handleClick(subOption.name)}
              >
                <FontAwesomeIcon icon={subOption.icon} />
                 <span>{subOption.name}</span>
              </HeaderLink>
            </div>
          </div>
        );
      }

      return (
        <div key={ind}>
          <div className="dd-header">
            {/* <div
              className="dd-header-title"
              onClick={() => this.handleClick(subOption.name)}
            >
              {`with child ${subOption.name}`}
            </div> */}
            <HeaderLinkDropdown
                as={'a'}
                onClick={() => this.handleClick(subOption.name)}
              >
                <FontAwesomeIcon icon={subOption.icon} /> 
                <span>{subOption.name} </span>
                <FontAwesomeIcon icon={(state[subOption.name]) ? "angle-up" : "angle-down"} />
              </HeaderLinkDropdown>

            <div
              className="dd-list"
              style={{ marginLeft:20, display: state[subOption.name] ? "block" : "none" }}
            >
              {this.handler(subOption.children)}
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <HeaderWrapper>
        <HeaderLogo>
          <h1><FontAwesomeIcon icon={'chart-bar'} /> Creative Teams</h1>
        </HeaderLogo>

        {this.handler(Menuitem.data)}

      </HeaderWrapper>
    );
  }
}

export default Sidebar;
