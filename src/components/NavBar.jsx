import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  MDBIcon
} from "mdbreact";

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Navbar color="default-color" dark expand="md">
        <NavbarBrand>
          <strong className="white-text">Navbar</strong>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse} />
        <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarNav left>
            <NavItem active>
              <NavLink to="#!" className="mr-3 mr-lg-0">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#!" className="mr-3 mr-lg-0">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#!" className="mr-3 mr-lg-0">Pricing</NavLink>
            </NavItem>
            <NavItem>
              <Dropdown>
                <DropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </DropdownToggle>
                <DropdownMenu className="dropdown-default">
                  <DropdownItem href="#!">Action</DropdownItem>
                  <DropdownItem href="#!">Another Action</DropdownItem>
                  <DropdownItem href="#!">Something else here</DropdownItem>
                  <DropdownItem href="#!">Something else here</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem>
              <NavLink className="waves-effect waves-light mr-3 mr-lg-0" to="#!">
                <MDBIcon fab icon="twitter" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="waves-effect waves-light" to="#!">
                <MDBIcon icon="user" />
              </NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
