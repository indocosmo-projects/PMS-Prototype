import React,{ useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import '../../style.css';
import './Request.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Request() {

    const details =  
    [
    {id: 1, room:'112',name :'DELUXE',phone:'9999999999',facility:'First Class',datetime:'17-08-2022 13:08:50', addonstatus:'UnProccessed',currentstatus:'Proccessed'},
    {id: 1, room:'112',name :'DELUXE',phone:'9999999999',facility:'First Class',datetime:'17-08-2022 13:08:50', addonstatus:'UnProccessed',currentstatus:'Proccessed'},
   

    
    ];

    const [dropdown, setDropdown] = useState(0);

    const tdata = () =>{
        return(
                <tbody >
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.room}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.phone}</td>
                        <td className="left">{detail.facility}</td>
                        <td className="left">{detail.datetime}</td>
                        <td className="left">{detail.addonstatus}</td>
                        <td className="left">{detail.currentstatus}</td>   
                    </tr>
                    )}
                    
                </tbody>
        );
    }


    const count = () =>{

        if(dropdown === 1) {
            setDropdown(( 0 ));
        }

        if(dropdown === 0) {
            setDropdown(( 1 ));
        }
    }

    const dropdownfn = () => {
        if(dropdown === 0) return "";

        if(dropdown === 1) return (
            <div className="bg-white">
                <div className="dpdown shadow ">
                    <div className="row p-4">
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <label className="text" htmlFor="reservedby">Reserved By :</label>
                            <input type="text" className="form-control" name="reservedby" id="reservedby"/>
                        </div>
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <label className="text" htmlFor="reservedstatus">Reservation Status :</label>
                            <input type="text" className="form-control" name="reservedstatus" id="reservedstatus"/>
                        </div>
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <label className="text" htmlFor="departdate">Reserved Date :</label>
                            <input type="date" className="form-control" name="departdate" id="departdate"/>
                        </div>
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <label className="text" htmlFor="arrival">Arrival Date :</label>
                            <input type="date" className="form-control " name="arrival" id="arrival"/>
                        </div>
                        <div className="col-sm-12 form-group inputfieldpadding d-flex justify-content-end mt-3">
                            <button className="btn btn-secondary m-1" onClick={() =>setDropdown(( 0 )) }>Close</button>
                            <button className="btn btn-primary m-1">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

        return(
            <div>
                 <div className="section">
                    <div className="container-fluid formcontent">
                        {/* ----- Heading ------ */}
                        <div>
                            <h5 className="header"> Requests </h5>
                        </div>
                        <div className="btnright">
                            <ul className="ullist">
                                <li><button className="btn btn-success m-1">Back</button></li>
                            </ul>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="Search..." />
                                            <button className="btn btn-outline-secondary search-opt-btn"  onClick={count}  ><i className="bi bi-caret-down"></i></button>
                                            <button className="btn btn-dark px-4" title="Search" ><i class="bi bi-search"></i></button>
                                    </div>
                                <div className="parentdpdown">
                                    <div className="ddw" >
                                        {dropdownfn()}
                                    </div>
                                </div>
                            </div>

            
                                    <div className="col-sm-6">
                                        <div className="mb-3 ">
                                        <Link to=""><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i class="bi bi-plus-circle me-2"></i>New Request</button></Link>
                                        </div>
                                    </div>
                            </div>

                        <div className="subhead">
                            <h5 className="header"> In-House Request-List </h5>
                        </div>
                        

                         <Tabs
                    defaultActiveKey="unprocessed"
                    id="justify-tab-example"
                    className="mt-4 mb-4 status-tab"
                    justify >
                    <Tab className='tab-content-bg tab-bg' eventKey="unprocessed" title={<span><i class="bi bi-house-door-fill me-2"/>Unprocessed</span>}>
              
                        <div className="border">
                        <table className="table ">
                            <thead >
                                <tr className="greyshade">
                                    <th className="thstyle left">Room</th>
                                    <th className="thstyle left">Name</th>
                                    <th className="thstyle left">Phone</th>
                                    <th className="thstyle left">Facility</th>
                                    <th className="tdwidthguest left">Request Date & Time</th>
                                    <th className="thstyle left">Addon Status</th>
                                    <th className="thstyle left">Current Status</th>
                                </tr>
                            </thead>
                            {tdata()}

                        </table>
                        </div>
                        </Tab>

                         <Tab className='tab-content-bg tab-bg' eventKey="allrequests" title={<span><i class="bi bi-house-door-fill me-2"/>All Requests</span>}>
                            
                            <div className="border">
                            <table className="table ">
                                <thead >
                                    <tr className="greyshade">
                                        <th className="thstyle left">Room</th>
                                        <th className="thstyle left">Name</th>
                                        <th className="thstyle left">Phone</th>
                                        <th className="thstyle left">Facility</th>
                                        <th className="tdwidthguest left">Request Date & Time</th>
                                        <th className="thstyle left">Addon Status</th>
                                        <th className="thstyle left">Current Status</th>
                                    </tr>
                                </thead>
                                {tdata()}

                            </table>
                            </div>
                            </Tab>

                        </Tabs>

                    </div>
                </div>
            </div>
        );
}
 
export default Request;