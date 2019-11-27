import React, { Component } from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default class NavBar extends Component {
  render() {
    return (
      <Navbar bg="primary" variant="dark" expand="lg">
  <Navbar.Brand className="" href="#home">
    <span className="red">Ş</span><span className="orange">e</span><span className="yellow">m</span><span className="green">s</span><span className="blue">i</span><span className="red">p</span><span className="orange">a</span><span className="yellow">ş</span><span className="green">a</span>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">الرئيسية</Nav.Link>
      <Nav.Link href="#link">منتجاتنا</Nav.Link>
      <NavDropdown title="المزيد" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">إتصل بنا</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">موقع الشركة</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">خدماتنا</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="danger">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    )
  }
}
