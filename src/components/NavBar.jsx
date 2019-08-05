import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

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

  toggle = nr => () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <Navbar color="default-color" dark expand="md" fixed="top">
        <NavbarBrand>
          <strong className="white-text">Online Store</strong>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse} />
        <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarNav left>
            <NavItem active>
              <NavLink to="/" className="mr-3 mr-lg-0">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/cards" className="mr-3 mr-lg-0">
                Sell
              </NavLink>
            </NavItem>
            <NavItem>
              <Dropdown className="mr-3 mr-lg-0">
                <DropdownToggle nav caret>
                  <div className="d-none d-md-inline">Catalog</div>
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
                  <DropdownItem>
                    <Link to="/register">
                      <MDBIcon icon="user-plus" className="icons" />
                      Create Acount
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/login">
                      <MDBIcon icon="sign-in-alt" className="icons" />
                      Sign In
                    </Link>
                  </DropdownItem>
                  <DropdownItem>
                    <Link to="/">
                      <MDBIcon icon="sign-out-alt" className="icons" />
                      Logout
                    </Link>
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
