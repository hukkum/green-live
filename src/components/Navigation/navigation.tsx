import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Nav from 'react-bootstrap/esm/Nav'
import Navbar from 'react-bootstrap/esm/Navbar'
// import NavDropdown from 'react-bootstrap/esm/NavDropdown'
import { Logo } from '../Logo/LogoSvg'
import '../../style/button.scss'
import '../../style/nav.scss'

// export interface menuItem {
//   id: string;
//   name: string;
//   items?: [];
// }

export const Navigation: React.FC = (props) => {
  return (
    <div className='navigation-bar'>
      <Navbar expand="lg">
        <Container className=''>
          <Navbar.Brand href="#home"><Logo width={143} height={91} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              
                <Nav.Link className='pt-3 pt-md-0 px-md-4' href="#home">Explore</Nav.Link>
                <Nav.Link className='pt-3 pt-md-0 px-md-4' href="#link">Shop</Nav.Link>
                <Nav.Link className='pt-3 pt-md-0 px-md-4' href="#link">Services</Nav.Link>
                <Nav.Link className='pt-3 pt-md-0 px-md-4' href="#link">About us</Nav.Link>
            

              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>


              </NavDropdown> */}
      
              <Nav.Link className='ms-md-5 pt-3 pt-md-0' href="#link">
              <button type="button" className="no-style-button signup-button px-4 py-2">Sign up</button>
              </Nav.Link>

              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>

  )
}


