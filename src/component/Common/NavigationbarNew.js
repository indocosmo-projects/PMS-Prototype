// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/niko.png';
import './Navigation.css';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';


const items = [
  {
    key: '1',
    label: (
      <NavLink activeClassName="active-link" to="/shiftmanagement">Shift Management</NavLink>
    ),
  },
  {
    key: '2',
    label: (
      <NavLink activeClassName="active-link" to="/shiftmanagement">Shift Management</NavLink>
    ),
  },

];

function NavigationBarNew() {
  return (
    <Navbar expand="lg">
  
        <Navbar.Brand href="#home"><div className='logo-cover'><img src={logo} className="logo" alt="logo"/></div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2 nav-main">

                  <div >
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
                <Dropdown
                  menu={{
                    items,
                    // defaultSelectedKeys: ['2'],
                  }}
                >
                  <button className='nav-dropdown-btn p-0' onClick={(e) => e.preventDefault()}>
                    <Space>
                    Shift
                      <DownOutlined />
                    </Space>
                  </button>
                </Dropdown>

                    {/* <NavDropdown title="Shift" id="basic-nav-dropdown" className="nlink-drop">
                            <NavDropdown.Item><NavLink activeClassName="active-link" to="/shiftmanagement">Shift Management</NavLink></NavDropdown.Item>
                    
                      </NavDropdown> */}

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


                <Dropdown
                  menu={{
                    items,
                  }}
                >
                  <button className='nav-dropdown-btn p-0' onClick={(e) => e.preventDefault()}>
                    <Space>
                    Tools
                      <DownOutlined />
                    </Space>
                  </button>
                </Dropdown>

                    {/* <NavDropdown title="Tools" id="basic-nav-dropdown" className="nlink-drop">
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/nightaudit">Night Audit</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/mergeroom">Merge Room</NavLink></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item><NavLink activeClassName="active-link headerink" to="/users" disabled>User Management</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/users">Users</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/usergroup">User Groups</NavLink></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item><NavLink activeClassName="active-link headerink" to="/facility"  disabled>Facility</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/facility">Facilities</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/facilityprovider">Facility Provider</NavLink></NavDropdown.Item>
                          <NavDropdown.Divider />
                          <NavDropdown.Item><NavLink activeClassName="active-link headerink" to="/pettycash"  disabled>Petty Cash</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/pettycash">Petty Cash</NavLink></NavDropdown.Item>
        
                      </NavDropdown> */}
                </li>
                <li>
                    <NavDropdown title="General Settings" id="basic-nav-dropdown" className="nlink-drop">
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/systemsettings">System Settings</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/department">Department</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/currency">Currency</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/accountmaster">Account Master</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/season">Season</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/discount">Discount</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/tax">Tax</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/templates">Templates</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/shiftitems">Shift</NavLink></NavDropdown.Item>
                        </NavDropdown> 
                    </li>
                    <li>
                         <NavDropdown title="Set Up" id="basic-nav-dropdown" className="nlink-drop">
                          <NavDropdown.Item><NavLink activeClassName="active-link headerink" to="/roomtype" disabled>Rooms</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/roomtype">Room Type</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/room">Room</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/floor">Floor</NavLink></NavDropdown.Item>

                          <NavDropdown.Divider />
                          <NavDropdown.Item><NavLink activeClassName="active-link headerink" to="/corporaterates" disabled>Tarrifs And Promotions</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/corporaterates" >Corporates ta Rates</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/roomrates">Room Rates</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/corporates" >Corporates</NavLink></NavDropdown.Item>
                          
                          <NavDropdown.Divider />
                          <NavDropdown.Item><NavLink activeClassName="active-link headerink" to="/pettycashsetup" disabled>Petty Cash</NavLink></NavDropdown.Item>
                          <NavDropdown.Item><NavLink activeClassName="active-link dplink" to="/pettycashsetup">Petty Cash Head</NavLink></NavDropdown.Item>
                          </NavDropdown> 
                    </li>
              </ul>
            </div>

          </Nav>

          <Nav className='profile-nav'>
            <div className='profile-btn'>
          <NavDropdown  title="John Doe" id="basic-nav-dropdown">
              <NavDropdown.Item href="/users"><i className="grey bi bi-person-fill me-2"></i>Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2"><i className="grey bi bi-bell-fill me-2"></i>Notifications</NavDropdown.Item>
              <NavDropdown.Item href="/systemsettings"><i className="grey bi bi-gear-fill me-2"></i>Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className='red'><i class="bi bi-box-arrow-right me-2"></i>Logout</NavDropdown.Item>
            </NavDropdown>
            </div>
            </Nav>

        </Navbar.Collapse>
      
    </Navbar>
    
  );
}

export default NavigationBarNew;