import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../assets/niko.png';
import './Navigation.css';
import { Link } from "react-router-dom";


function NavigationBar() {
  return (
    <Navbar  bg="dark"  expand="md">
      <Container className="nav">
    
        <Navbar.Brand href="#home"><div className='logo-cover'><img src={logo} className="logo" alt="logo"/></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2">
          <Link className="nlink" to="/home">Home</Link>
          <Link className="nlink" to="/reservation">Reservation</Link>
          <Link className="nlink" to="/reception">Reception</Link>
            <NavDropdown title="Shift" id="basic-nav-dropdown" className="nlink">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Link className="nlink" to="/requests">Requests</Link>
            <Link className="nlink" to="/reports">Reports</Link>

            <NavDropdown title="Tools" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Setup" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>

          <Nav className='profile-btn'>
          <NavDropdown  title="John Doe" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><i className="grey bi bi-person-fill me-2"></i>Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><i className="grey bi bi-bell-fill me-2"></i>Notifications</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><i className="grey bi bi-gear-fill me-2"></i>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='red'><i class="bi bi-box-arrow-right me-2"></i>Logout</NavDropdown.Item>
            </NavDropdown>
            </Nav>

        </Navbar.Collapse>
  
            
      </Container>
      
    </Navbar>
    
  );
}

export default NavigationBar;