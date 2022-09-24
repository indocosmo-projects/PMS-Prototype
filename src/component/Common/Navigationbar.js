import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import logo from '../../assets/niko.png';
import './Navigation.css';


function NavigationBar() {
  return (
    <Navbar bg="dark" expand="md">
      <Container>
    
        <Navbar.Brand href="#home"><div className='logo-cover'><img src={logo} className="logo" /></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2">
            <a className="nlink" href="/home">Home</a>
            <a className="nlink" href="/reservation">Reservation</a>
            <a className="nlink" href="/reception">Reception</a>
            <NavDropdown title="Shift"  className="nlink" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="nlink" eventKey="5" as={Link} to="/requests">Requests</Nav.Link>
            <Nav.Link className="nlink" eventKey="6" as={Link} to="/reports">Reports</Nav.Link>

            <NavDropdown title="Tools"  className="nlink" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Setup"  className="nlink" id="basic-nav-dropdown">
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