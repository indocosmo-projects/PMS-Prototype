import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/niko.png';
import './Navigation.css';


function NavigationBarNew() {
  return (
    <Navbar  bg="dark"  expand="lg">
      <Container className="nav">
    
        <Navbar.Brand href="#home"><div className='logo-cover'><img src={logo} className="logo" alt="logo"/></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2 nav-main">

                  <div>
              <ul className="nav"> 
                <li>
                  <NavLink exact to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active-link" to="/reservation">
                    Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active-link" to="/reception">
                    Reception
                  </NavLink>
                </li>
                <li>
                    <NavDropdown title="Shift" id="basic-nav-dropdown" className="nlink-drop">
                            <NavDropdown.Item><NavLink activeClassName="active-link" to="/shiftmanagement">Shift Management</NavLink></NavDropdown.Item>
                    
                      </NavDropdown>
                </li>
                <li>
                  <NavLink activeClassName="active-link" to="/request">
                    Requests
                  </NavLink>
                </li>
                  <li>
                  <NavLink activeClassName="active-link" to="/reports">
                    Reports
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName="active-link" to="/hkstatus">
                    HK Status
                  </NavLink>
                </li>
                <li>
                    <NavDropdown title="Tools" id="basic-nav-dropdown" className="nlink-drop">
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/nightaudit">Night Audit</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/mergeroom">Merge Room</NavLink></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item><NavLink activeClassName="active-link headerink" to="#action/3.2" disabled>User Management</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="#action/3.3">Users</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="#action/3.4">User Groups</NavLink></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item><NavLink activeClassName="active-link headerink" to="#action/3.5" disabled>Facility</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="#action/3.6">Facilities</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="#action/3.7">Facility Provider</NavLink></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item><NavLink activeClassName="active-link headerink" to="#action/3.8" disabled>Petty Cash</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="#action/3.9">Petty Cash</NavLink></NavDropdown.Item>
        
                      </NavDropdown>
                </li>
                <li>
                    <NavDropdown title="Set Up" id="basic-nav-dropdown" className="nlink-drop">
                            <NavDropdown.Item>Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                              Separated link
                            </NavDropdown.Item>
                      </NavDropdown>
                </li>
              </ul>
            </div>

          </Nav>

          <Nav className='profile-nav'>
            <div className='profile-btn'>
          <NavDropdown  title="John Doe" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><i className="grey bi bi-person-fill me-2"></i>Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><i className="grey bi bi-bell-fill me-2"></i>Notifications</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3"><i className="grey bi bi-gear-fill me-2"></i>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='red'><i class="bi bi-box-arrow-right me-2"></i>Logout</NavDropdown.Item>
            </NavDropdown>
            </div>
            </Nav>

        </Navbar.Collapse>
  
            
      </Container>
      
    </Navbar>
    
  );
}

export default NavigationBarNew;