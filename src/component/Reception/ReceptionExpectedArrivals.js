import React,{ useState } from 'react';
import './Reception.css';
import '../../style.css';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';



function ReceptionExpectedArrivals() {


    const details =  
        [{id: 1, rese:'104',arrival :'22-DEC-2018, 10:00 AM',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        {id: 2, rese:'104',arrival :'27-DEC-2018, 10:00 AM',nights:'4',rooms:'2',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        {id: 3, rese:'104',arrival :'27-DEC-2018, 10:00 AM',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
        {id: 4, rese:'104',arrival :'27-DEC-2018, 10:00 AM',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
        {id: 5, rese:'104',arrival :'27-DEC-2018, 10:00 AM',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
        {id: 6, rese:'104',arrival :'16-DEC-2018, 10:00 AM',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        {id: 7, rese:'104',arrival :'27-DEC-2018, 10:00 AM',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        ];
        const [dropdown, setDropdown] = useState(0);
        // const [recordno, setRecordno] = useState(5); 



    const tdata = () =>{
        
        return( 
                <tbody>
                    {
                     details.map(detail =>  <tr key={detail.id} >
                        <td  style={{color : 'blue'}} >{detail.rese}</td>
                        <td >{detail.arrival}</td>
                        <td >{detail.nights}</td>
                        <td >{detail.rooms}</td>
                        <td >{detail.departure}</td>
                        <td >{detail.bookedby}</td>
                        <td >{detail.bookedfor}</td>
                        <td >{detail.bookedon}</td>
                        {/* <td className="bg-success text-white" >CHECK-IN</td> */}
                        {/* <td><button className="btn btn-primary"><i class="bi bi-plus-circle me-2"></i>Check-in</button></td> */}
                        <td>
                                <Dropdown as={ButtonGroup}>
                                <Link to="/checkinedit"><Button variant="primary right-br-none"><i class="bi bi-plus-circle me-2"></i>Check-in</Button></Link>

                                    <Dropdown.Toggle className='checkin-split' split variant="primary" id="dropdown-split-basic" />

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Extend</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </td>
                    </tr>
                    )}
                    
                </tbody>
        );

    }


    
    const count = () =>{

        if(dropdown === 1) {
            setDropdown((0));
        }

        if(dropdown === 0) {
            setDropdown((1));
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
  

        return (
                <div className="container-fluid tab-bg">
               
                    <div className="p-3">
                    <div className="row mt-4">
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
                            <Link to="/newreservation"><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i class="bi bi-plus-circle me-2"></i>New Check-in</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4">
                                <div className="col-md-2 col-lg-1 col-3">
                                    <Form.Select size='sm' aria-label="No of Records" name="rec" id="rec" /*onChange={(e) => setRecordno((e.target.value))}*/>
                                        <option value="1">5</option>
                                        <option value="2">10</option>
                                        <option value="3">15</option>
                                        <option value="3">All</option>
                                    </Form.Select>

                                </div>
                                <div className="col-md-6 col-5 col-lg-7 d-flex justify-content-start">
                                    <p className="text-left">Records per page</p>
                                </div>

                               
                        </div> 

                     <table className="table table-bordered reception-table">
                        <thead >
                            <tr>
                                <th>RESV.#</th>
                                <th>ARRIVAL</th>
                                <th>NIGHTS</th>
                                <th>ROOMS</th>
                                <th>DEPARTURE</th>
                                <th>BOOKED BY</th>
                                <th>BOOKED FOR</th>
                                <th>BOOKED ON</th>
                                <th>Actions</th>
                            </tr>							
                        </thead>
                                {tdata()}

                    </table>
                    
                    </div>
                </div>
                
        );
    
}
 
export default ReceptionExpectedArrivals;