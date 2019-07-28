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
  FormInline,
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
      <Navbar color="default-color" dark expand="md" scrolling fixed="top">
        <NavbarBrand>
          <strong className="white-text">Navbar</strong>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse} />
        <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarNav left>
            <NavItem active>
              <NavLink to="#!" className="mr-3 mr-lg-0">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#!" className="mr-3 mr-lg-0">
                Sell
              </NavLink>
            </NavItem>
            <NavItem>
              <Dropdown className="mr-3 mr-lg-0">
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
            <NavItem>
              <FormInline waves>
                <div className="md-form my-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </FormInline>
            </NavItem>
          </NavbarNav>
          <NavbarNav right>
            <NavItem className="mr-3 mr-lg-0">
              <Dropdown>
                <DropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </DropdownToggle>
                <DropdownMenu className="dropdown-default">
                  <DropdownItem href="#!">
                    <MDBIcon icon="user-plus" className="icons" />
                    Create Acount
                  </DropdownItem>
                  <DropdownItem href="#!">
                    <MDBIcon icon="sign-in-alt" className="icons" />
                    Sign In
                  </DropdownItem>
                  <DropdownItem href="#!">
                    <MDBIcon icon="sign-out-alt" className="icons" />
                    Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavItem>

            <NavItem>
              <NavLink
                className="waves-effect waves-light mr-3 mr-lg-0"
                to="#!"
              >
                <MDBIcon icon="balance-scale" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="waves-effect waves-light mr-3 mr-lg-0"
                to="#!"
              >
                <MDBIcon icon="heart" />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="waves-effect waves-light mr-3 mr-lg-0"
                to="#!"
              >
                <MDBIcon icon="shopping-cart" />
              </NavLink>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NavBar);
