import React from 'react'
import {Navbar,Container,Nav,NavDropdown,FormControl,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
  <Container>
    <Navbar.Brand>
      <Link to='/'>Tutor Me</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
        <Nav className='m-auto'>
        <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        
      </Form>
        </Nav>
      <Nav>
        <Nav.Link>
          <Link to='/mynotes'>My Notes</Link>
        </Nav.Link>
        <NavDropdown title="User Name" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">My Profie</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
        </NavDropdown>
      </Nav>



    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header