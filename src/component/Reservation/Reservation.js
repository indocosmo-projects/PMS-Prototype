import React from 'react';
// import Form from 'react-bootstrap/Form';
import '../../style.css';
import './Reservation.css';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
//import ReservationService from '../../service/ReservationService';

function Reservation() {
    
 
    const details =  
        [   {id: 0, rese:'R-000001',arrival :'10-Oct-2022',departure:'10-Oct-2022',nights:'4',rooms:'1', bookedby:'Booking.com',bookedfor:'Bruce Wayne',badge:'1', bookedon:'10-Oct-2022',left:'1',status:'CONFIRMED'},
            {id: 1, rese:'R-000001',arrival :'10-Oct-2022',departure:'10-Oct-2022',nights:'4',rooms:'1', bookedby:'Booking.com',bookedfor:'Clark Kent',badge:'0', bookedon:'10-Oct-2022',left:'2',status:'CANCELLED'},
            {id: 2, rese:'R-000002',arrival :'10-Oct-2022',departure:'10-Oct-2022',nights:'4',rooms:'2', bookedby:'Booking.com',bookedfor:'Daryl Dixon',badge:'3', bookedon:'10-Oct-2022',left:'5',status:'CONFIRMED'},
            {id: 3, rese:'R-000003',arrival :'10-Oct-2022',departure:'10-Oct-2022',nights:'4',rooms:'1', bookedby:'Booking.com',bookedfor:'Tony Star',badge:'7', bookedon:'10-Oct-2022',left:'7',status:'CANCELLED'},
            {id: 4, rese:'R-000003',arrival :'10-Oct-2022',departure:'10-Oct-2022',nights:'4',rooms:'1', bookedby:'Booking.com',bookedfor:'Peter Parker',badge:'0', bookedon:'10-Oct-2022',left:'8',status:'CONFIRMED'}
        ];
    
    
    /* const [details, setDetails] = useState([]);  */
        
        const [dropdown, setDropdown] = useState(0);
  /*     const [recordno, setRecordno] = useState(5);  */

        
   /*
    const fetchdata = () =>{
        ReservationService.getReservationList().then((response) => {
            setDetails((response.data));
            console.log("response" + response);
            console.log("details" + details);
        });
    }
    
        ReservationService.getReservationList().then((response) => {
            setDetails((response.data));
            console.log("response" + response);
            console.log("details" + details);
        });
        ReservationService.getReservationSearchData().then((response) => {
            setDetails((response.data));
            console.log("response" + response);
            console.log("details" + details);
        });
        ReservationService.getReservation().then((response) => {
            setDetails((response.data));
            console.log("response" + response);
            console.log("details" + details);
        });
*/



    const tdata = () =>{

/*        var pageno = ( details.length / recordno );
        var balancepage = ( details.length % recordno ); 
        console.log("pageno==>" + pageno + "balancepage==>" + balancepage); */
        return(
                <tbody>
                    {
                    details.map(detail =>  <tr className="center" key={detail.id} >
                        <td style={{color : 'blue'}} >{detail.rese}</td>
                        <td>{detail.arrival}</td>
                        <td>{detail.departure}</td>
                        <td>{detail.nights}</td>
                        <td>{detail.rooms}</td>
                        <td>{detail.bookedby}</td>
                        <td><h6 className='d-flex justify-content-between'>{detail.bookedfor}<Badge  className='ms-2' bg="secondary">{detail.badge} <span className='font-light-2'>Nights</span></Badge></h6></td>
                        <td>{detail.bookedon}</td>
                        <td>{detail.left}</td>
                        <td className="status-clr">{detail.status}</td>
                        <td>
                                <Dropdown>
                                <Dropdown.Toggle variant="primary btn-sm" id="dropdown-basic">
                                    Actions
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Check In</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-1">Deposit</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-3">GRC</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item href="#/action-1">No Show</Dropdown.Item>
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
            setDropdown(( 0 ));
            console.log("dropdown"+ dropdown);
        }

        if(dropdown === 0) {
            setDropdown(( 1 ));
            console.log("dropdown"+ dropdown);
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
                <div className="container-fluid py-0 h-100 mb-3">
                    {/* ----- Heading ------ */}
                    <div className="sticky-div d-flex justify-content-between">
                            <h3 className="header"><i className="bi bi-calendar-week-fill me-2"></i>Reservations</h3>
                            <button className="btn btn-sm pe-3" title="New Reservation"><i className="bi bi-arrow-repeat me-2"></i>Update data</button>
                        </div>
                        

                    <div className="row search-area-bg">

                        <div className="row d-flex justify-content-between">
                        <div className="col-lg-6 col-sm-12">
                            <div className="input-group mb-3 ">
                                <input type="text" className="form-control" placeholder="Search..." />
                                        <button className="btn btn-outline-secondary search-opt-btn"  onClick={count}  ><i className="bi bi-caret-down"></i></button>
                                        <button className="btn btn-dark px-4" title="Search" ><i className="bi bi-search"></i></button>
                            </div>
                            <div className="parentdpdown">
                                <div className="ddw" >
                                    {dropdownfn()}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6 mb-2 d-flex justify-content-end">
                                        <label className="text-left" htmlFor="">Showing Records of</label>
                                        <input type="date" className="form-control arrival date-fixed-size" name="arrival" id="arrival"/>
                            </div>
                        <div className="col-lg-2 col-sm-6 d-flex justify-content-end">
                                    <div className="mb-3 ">
                                        <Link to="/newreservation"><button className="btn btn-primary" title="New Reservation"><i className="bi bi-plus-circle me-2"></i>New reservation</button></Link>
                                    </div>
                        </div>
                        </div>


                            <div className="row">
                                <div className="col-sm-12 reservation_table">
                                    <Table className="table table-striped table-bordered" responsive>
                                        <thead >
                                            <tr className='center'>
                                                <th>Resv Id</th>
                                                <th>Arrival Date<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th>Departure Date<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th>Nights<i className="bi bi-arrow-down-up sort-btn"></i> </th>
                                                <th>No of Rooms<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th>Booked By<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th>Booked For<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th>Booked On<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th>Days Left<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th>Status<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th></th>
                                            </tr>
                                        </thead>

                                        {tdata()}

                                    </Table>
                                </div>

                            </div>


                            <div className="row d-flex justify-content-between">
                                    
                                    {/*}                <div className="col-4 d-flex justify-content-start" ><i className="bi bi-eye-fill me-2"></i>Showing 1 to {recordno} of {details.length} entries</div>
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
                </div>
        );
    
    }
 
export default Reservation;