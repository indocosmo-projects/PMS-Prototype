import React from 'react';
import './Navigation.css';
import logo from '../../assets/niko.png';
import {Nav ,NavLink ,Navbar } from 'react-bootstrap';
//import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


class Navigationbar extends React.Component {

    state={
        dropdownindex : 0,
    }


    display = () =>{
        
        if(this.state.dropdownindex === 0){
            this.setState({ dropdownindex : 1})
        }

        if(this.state.dropdownindex === 1){
            this.setState({ dropdownindex : 0})
        }
    }

    dropdown = () =>{

            if(this.state.dropdownindex === 1) return(
                    <div className="userdropdown shadow bg-white rounded"
                    onMouseUp={() => this.setState({ dropdownindex : 0})}>
                                <div className="row padding">
                                    <div className="col uslink">
                                        <div><i class="bi bi-briefcase-fill iconsize"></i></div>
                                        <p>Profile</p>
                                    </div>
                                    <div className="col uslink">
                                        <div><i class="bi bi-gear-fill iconsize"></i></div>
                                        <p>Settings</p>
                                    </div>
                                    <div className="col uslink">
                                        <div><i class="bi bi-bell iconsize"></i></div>
                                        <p>Notification</p>
                                    </div>
                                </div>
                                <div className="logout text-white">
                                    <div><i class="bi bi-key-fill iconsizelog"></i></div>
                                    <p className="uslinklog">LOGOUT</p>
                                </div>
                         </div>
            );

            if(this.state.dropdownindex === 0) return '';
    }

    render() { 

        return(
            <div  >
                <div className="row navbar " >
                    <div className="col-sm-1">                    
                        <img src={logo} className="logo" />
                    </div>
                    <div className="col-sm-9 marginzero" >
                    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" >
                        <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav>
                                    <a className="nlink" href="/home">Home</a>
                                    <a className="nlink" href="/reservation">Reservation</a>
                                    <a className="nlink" href="/reception">Reception</a>
                                    <a className="nlink" href="/shift">Shift <i class="bi bi-caret-down"></i></a>
                                    <a className="nlink" href="/requests">Requests</a>
                                    <a className="nlink" href="/reports">Reports</a>
                                    <a className="nlink" href="/tools">Tools <i class="bi bi-caret-down"></i></a>
                                    <a className="nlink" href="/setup">Setup <i class="bi bi-caret-down"></i></a>
                                </Nav>
                            </Navbar.Collapse>
                    </Navbar>
                    </div>
                    <div className="col-sm-2 user marginzero">
                         <button className="bg-white btn" onClick={this.display} 
                         >Suresh Somanathan <i class="bi bi-caret-down"></i></button>
                         {this.dropdown()}
                    </div>
                </div>
           
            </div>
        );
    }
}
 
export default Navigationbar;