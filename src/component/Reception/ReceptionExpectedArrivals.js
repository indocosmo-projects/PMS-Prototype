import React,{ useState } from 'react';
import './Reception.css';
import '../../style.css';
import { Link } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';



function ReceptionExpectedArrivals() {


    const details =  
        [{id: 1, rese:'104',arrival :'22-DEC-2018, 10:00 AM',departure:'27-DEC-2018, 10:00 AM', nights:'4',rooms:'1', bookedby:'BOOKING.COM',bookedfor:'Joseph Dwayne',badge:'0', bookedon:'27-DEC-2018, 10:00 AM',	status:'GRANTED'},
        {id: 2, rese:'104',arrival :'27-DEC-2018, 10:00 AM',departure:'27-DEC-2018, 10:00 AM', nights:'4',rooms:'2', bookedby:'BOOKING.COM',bookedfor:'Casey Goodman',badge:'5', bookedon:'27-DEC-2018, 10:00 AM',	status:'GRANTED'},
        {id: 3, rese:'104',arrival :'27-DEC-2018, 10:00 AM',departure:'27-DEC-2018, 10:00 AM', nights:'4',rooms:'1', bookedby:'BOOKING.COM',bookedfor:'George Selensky',badge:'2', bookedon:'27-DEC-2018, 10:00 AM',	status:'CANCELLED'},
        {id: 4, rese:'104',arrival :'27-DEC-2018, 10:00 AM',departure:'27-DEC-2018, 10:00 AM', nights:'4',rooms:'1', bookedby:'BOOKING.COM',bookedfor:'Chloe Carmen',badge:'0', bookedon:'27-DEC-2018, 10:00 AM',	status:'CANCELLED'},
        {id: 5, rese:'104',arrival :'27-DEC-2018, 10:00 AM',departure:'27-DEC-2018, 10:00 AM', nights:'4',rooms:'1', bookedby:'BOOKING.COM',bookedfor:'Bob Downey',badge:'1', bookedon:'27-DEC-2018, 10:00 AM',	status:'CANCELLED'},
        ];
        const [dropdown, setDropdown] = useState(0);
        // const [recordno, setRecordno] = useState(5); 



    const tdata = () =>{
        
        return( 
                <tbody className='reception-tbody'>
                    {
                     details.map(detail =>  <tr key={detail.id} >
                        <td  style={{color : 'blue'}} ><span className='ps-2'>{detail.rese}</span></td>
                        <td ><span className='ps-2'>{detail.arrival}</span></td>
                        <td ><span className='ps-2'>{detail.departure}</span></td>
                        <td className='text-center'>{detail.nights}</td>
                        <td className='text-center'>{detail.rooms}</td>
                        <td ><span className='ps-2'>{detail.bookedby}</span></td>
                        <td><h6 className='d-flex justify-content-between pt-2 px-1'>{detail.bookedfor}<Badge  className='ms-2' bg="secondary">{detail.badge} <span className='font-light-2'>Nights</span></Badge></h6></td>
                        <td ><span className='ps-2'>{detail.bookedon}</span></td>
                        <td className='text-center'>
                                <Dropdown as={ButtonGroup}>
                                <Link to="/checkinedit"><Button variant="primary right-br-none btn-sm"><i class="bi bi-plus-circle me-2"></i>Check-in</Button></Link>

                                    <Dropdown.Toggle className='checkin-split' split variant="primary btn-sm" id="dropdown-split-basic" />

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-3">Deposit</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-3">Pick up</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-3">GRC</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-3">Confirm</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-3">No Show</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
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
                <div className="container-fluid tab-bg pb-2">
                    <div className="row">
                    <div className="col-sm-12 col-md-6">
                            <div className="input-group mb-3">
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

                        <div className="col-sm-6 col-md-4 mb-2 d-flex justify-content-end">
                                <label className="text-left" htmlFor="">Showing Records of</label>
                                <input type="date" className="form-control arrival date-fixed-size" name="arrival" id="arrival"/>
                        </div>
                       
                        <div className="col-sm-6 col-md-2">
                            <div className="mb-3">
                            <Link to="/newreservation"><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i class="bi bi-plus-circle me-2"></i>New check-in</button></Link>
                            </div>
                        </div>

                    </div>
                  
                   
                     <table className="table table-bordered reception-table reception-table-2">
                        <thead >
                            <tr>
                                <th>Resv No</th>
                                <th>Arrival Date</th>
                                <th>Departure Date</th>
                                <th>Nights</th>
                                <th>Rooms</th>
                                <th>Booked By</th>
                                <th>Booked For</th>
                                <th>Booked On</th>
                                <th>Actions</th>
                            </tr>							
                        </thead>
                                {tdata()}

                    </table>

                    <div className="row me-1 d-flex justify-content-between">
                                    
                                {/*} <div className="col-4 d-flex justify-content-start" ><i className="bi bi-eye-fill me-2"></i>Showing 1 to {recordno} of {details.length} entries</div>
                                {/* <div className="col-6"></div> */} 
                                <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-double-left"></i><span className="hide-element"></span></button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-left"></i><span className="hide-element"></span></button>
                                    <button className="btn btn-outline-dark m-1 grey-border active">1</button>
                                    <button className="btn btn-outline-dark m-1 grey-border">2</button>
                                    <button className="btn btn-outline-dark m-1 grey-border">3</button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-right"></i></button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-double-right"></i></button>
                                    
                                </div>
                            </div>
                    
                </div>
                
        );
    
}
 
export default ReceptionExpectedArrivals;