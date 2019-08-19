import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  MDBNavbar,
  NavbarBrand,
  NavbarNav,
  NavItem,
  NavbarToggler,
  Collapse,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormInline,
  MDBIcon,
  MDBBtn
} from "mdbreact";

const mapState = state => ({
  auth: state.auth
});

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { handleSignOut, auth } = this.props;
    const email = auth.currentUser;
    const authenticated = auth.authenticated;

    return (
      <MDBNavbar color="default-color" dark expand="md" fixed="top">
        <NavbarBrand>
          <strong className="white-text">Online Store</strong>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggleCollapse} />
        <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <NavbarNav left className="align-items-center">
            <NavItem active>
              <Link to="/" className="mr-3 white-text">
                Home
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/cards" className="mr-3 white-text">
                Sell
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/card" className="mr-3 white-text">
                CardPage
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/test" className="mr-3 white-text">
                Test
              </Link>
            </NavItem>
            <NavItem>
              <Dropdown className="mr-3 mr-lg-0">
                <DropdownToggle nav caret>
                  <div className="d-none d-md-inline">Catalog</div>
                </DropdownToggle>
                <DropdownMenu className="dropdown-default">
                  <DropdownItem href="/">Action</DropdownItem>
                  <DropdownItem href="/">Another Action</DropdownItem>
                  <DropdownItem href="/">Something else here</DropdownItem>
                  <DropdownItem href="/">Something else here</DropdownItem>
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
              {!authenticated ? (
                <Fragment>
                  <Link to="/register">
                    <MDBIcon icon="user-plus" className="icons" />
                    Create Acount
                  </Link>
                  <Link to="/login">
                    <MDBIcon icon="sign-in-alt" className="icons" />
                    Sign In
                  </Link>
                </Fragment>
              ) : (
                <Fragment>
                  <span className="white-text mr-2">
                    {email}
                  </span>
                  <MDBBtn onClick={handleSignOut} size="sm">
                    <MDBIcon icon="sign-out-alt" className="icons" />
                    Logout
                  </MDBBtn>
                </Fragment>
              )}
            </NavItem>

            <NavItem>
              <Link
                className="waves-effect waves-light mr-3 mr-lg-0 white-text"
                to="#"
              >
                <MDBIcon icon="balance-scale" />
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="waves-effect waves-light mr-3 mr-lg-0 white-text"
                to="#"
              >
                <MDBIcon icon="heart" />
              </Link>
            </NavItem>
            <NavItem>
              <Link
                className="waves-effect waves-light mr-3 mr-lg-0 white-text"
                to="#"
              >
                <MDBIcon icon="shopping-cart" />
              </Link>
            </NavItem>
          </NavbarNav>
        </Collapse>
      </MDBNavbar>
    );
  }
}

export default connect(mapState)(NavBar);
