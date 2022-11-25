import React,{ useState} from 'react';
import './NavigationbarMannual.css';
import logo from '../../assets/niko.png';
import {Nav ,Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";


function NavigationbarMannual(){

    const [dropdownindex, setDropdownindex] = useState(0);

    const display = () =>{
        
        if(dropdownindex === 0){
            setDropdownindex(( 1 ));
        }

        if(dropdownindex === 1){
            setDropdownindex(( 0 ));
        }
    }

    const dropdown = () =>{

            if(dropdownindex === 1) return(
                    <div className="userdropdown shadow bg-white rounded"
                    onMouseUp={() => setDropdownindex(( 0 )) }>
                                <div className="row padding">
                                    <div className="col uslink">
                                        <div><i className="bi bi-briefcase-fill iconsize"></i></div>
                                        <p>Profile</p>
                                    </div>
                                    <div className="col uslink">
                                        <div><i className="bi bi-gear-fill iconsize"></i></div>
                                        <p>Settings</p>
                                    </div>
                                    <div className="col uslink">
                                        <div><i className="bi bi-bell iconsize"></i></div>
                                        <p>Notification</p>
                                    </div>
                                </div>
                                <div className="logout text-white">
                                    <div><i className="bi bi-key-fill iconsizelog"></i></div>
                                    <p className="uslinklog">LOGOUT</p>
                                </div>
                         </div>
            );

            if(dropdownindex === 0) return '';
    }

        return(
            <div className="bg-dark">
                <div className="row nav" >
                    <div className="col-sm-1">                    
                        <img src={logo} className="logo" alt="logo" />
                    </div>
                    <div className="col-sm-9 marginzero" >
                    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
                        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav>
                                    <Link className="nlink" to="/home">Home</Link>
                                    <Link className="nlink" to="/reservation">Reservation</Link>
                                    <Link className="nlink" to="/reception">Reception</Link>
                                    <Link className="nlink" to="/shift">Shift <i className="bi bi-caret-down"></i></Link>
                                    <Link className="nlink" to="/requests">Requests</Link>
                                    <Link className="nlink" to="/reports">Reports</Link>
                                    <Link to="/hkstatus" className='nlink'>HK Status</Link>
                                    <Link className="nlink" to="/tools">Tools <i className="bi bi-caret-down"></i></Link>
                                    <Link className="nlink" to="/setup">Setup <i className="bi bi-caret-down"></i></Link>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                    </div>
                    <div className="col-sm-2 user marginzero">
                         <button className="bg-white btn" onClick={display} 
                         >Suresh Somanathan <i className="bi bi-caret-down"></i></button>
                         {dropdown()}
                    </div>
                </div>
           
            </div>
        );
    
}
 
export default NavigationbarMannual;