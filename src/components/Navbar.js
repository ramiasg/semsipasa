import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
        <Navbar variant="dark sticky-top" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="m-auto">
                  <Nav.Link href="#home">الرئيسية</Nav.Link>
                  <Nav.Link href="#link">إتصل بنا</Nav.Link>
                  <Nav.Link href="#link">منتجاتنا</Nav.Link>
                  <NavDropdown title="المزيد" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.2">موقع الشركة</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">خدماتنا</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
  }
}
