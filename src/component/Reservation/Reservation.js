import React from 'react';
import Form from 'react-bootstrap/Form';
import '../../style.css';
import './Reservation.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
//import ReservationService from '../../service/ReservationService';

function Reservation() {
    
 
    const details =  
        [   {id: 0, rese:'R-000001',arrival :'10-Oct-2022',nights:'4',rooms:'1',departure:'10-Oct-2022', bookedby:'Booking.com',bookedfor:'Bruce Wayne', bookedon:'10-Oct-2022',status:'GRANTED'},
            {id: 1, rese:'R-000001',arrival :'10-Oct-2022',nights:'4',rooms:'1',departure:'10-Oct-2022', bookedby:'Booking.com',bookedfor:'Clark Kent', bookedon:'10-Oct-2022',status:'CANCELLED'},
            {id: 2, rese:'R-000002',arrival :'10-Oct-2022',nights:'4',rooms:'2',departure:'10-Oct-2022', bookedby:'Booking.com',bookedfor:'Bruce Wayne', bookedon:'10-Oct-2022',status:'GRANTED'},
            {id: 3, rese:'R-000003',arrival :'10-Oct-2022',nights:'4',rooms:'1',departure:'10-Oct-2022', bookedby:'Booking.com',bookedfor:'Bruce Wayne', bookedon:'10-Oct-2022',status:'CANCELLED'},
            {id: 4, rese:'R-000003',arrival :'10-Oct-2022',nights:'4',rooms:'1',departure:'10-Oct-2022', bookedby:'Booking.com',bookedfor:'Peter Parker', bookedon:'10-Oct-2022',status:'GRANTED'},
            {id: 5, rese:'R-000003',arrival :'10-Oct-2022',nights:'4',rooms:'1',departure:'10-Oct-2022', bookedby:'Booking.com',bookedfor:'Bruce Wayne', bookedon:'10-Oct-2022',status:'CANCELLED'},
            {id: 6, rese:'R-000007',arrival :'10-Oct-2022',nights:'4',rooms:'1',departure:'10-Oct-2022', bookedby:'Booking.com',bookedfor:'Peter Parker', bookedon:'10-Oct-2022',status:'GRANTED'},
            {id: 7, rese:'R-000008',arrival :'10-Oct-2022',nights:'4',rooms:'1',departure:'10-Oct-2022', bookedby:'Booking.com',bookedfor:'Bruce Wayne', bookedon:'10-Oct-2022',status:'CANCELLED'},
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
                        <td>{detail.nights}</td>
                        <td>{detail.rooms}</td>
                        <td>{detail.departure}</td>
                        <td>{detail.bookedby}</td>
                        <td>{detail.bookedfor}</td>
                        <td>{detail.bookedon}</td>
                        <td className="status-clr">{detail.status}</td>
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
            <div className="section ">
                <div className="container-fluid ">
                    {/* ----- Heading ------ */}

                    <div className="row search-area-bg">

                        <div className="col-sm-6 mb-2">
                            <h3 className="header green"> Reservations </h3>
                        </div>

                        <div className="row d-flex justify-content-between">
                        <div className="col-sm-6">
                            <div className="input-group mb-3 ">
                                <input type="text" className="form-control" placeholder="Search..." />
                                {/* <div className="input-group-append p-0 bg-white "> */}
                                    {/* <span className="input-group-text p-0 bg-white search-opt-btn" > */}
                                        <button className="btn btn-outline-secondary search-opt-btn"  onClick={count}  ><i className="bi bi-caret-down"></i></button>
                                    {/* </span></div> */}
                                {/* <div className="input-group-append p-0 ms-2"> */}
                                    {/* <span className="input-group-text p-0 br"> */}
                                        <button className="btn btn-dark px-4" title="Search" ><i class="bi bi-search"></i></button>
                                 {/* </span></div> */}
                            </div>
                            <div className="parentdpdown">
                                <div className="ddw" >
                                    {dropdownfn()}
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 d-flex justify-content-end">
                                    <div className="mb-3 ">
                                        {/* <a href="/newreservation"><button className="btn btn-success" title="New Reservation">Add New <i className="bi bi-plus"></i></button></a> */}
                                        <Link to="/newreservation"><button className="btn btn-primary" title="New Reservation"><i class="bi bi-plus-circle me-2"></i>Add New</button></Link>
                                    </div>
                        </div>
                        </div>

                        <div className="mb-0">

                            <div className="row mt-4">
                                <div className="col-md-2 col-lg-1 col-3">
                                    <Form.Select size='sm' aria-label="No of Records" name="rec" id="rec" /*onChange={(e) => setRecordno((e.target.value))}*/ >
                                        <option value="1">5</option>
                                        <option value="2">10</option>
                                        <option value="3">15</option>
                                        <option value="3">All</option>
                                    </Form.Select>

                                </div>
                                <div className="col-md-6 col-5 col-lg-7 d-flex justify-content-start">
                                    <p className="text">Records per Page</p>
                                </div>

                               
                            </div>



                            <div className="row mb-2">
                                <div className="col-sm-12 reservation_table">
                                    <table className="table table-striped table-bordered" >
                                        <thead >
                                            <tr className='center'>
                                                <th className="">Booking Id</th>
                                                <th className="">Arrival Date<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th className="">Nights<i className="bi bi-arrow-down-up sort-btn"></i> </th>
                                                <th className="">No of Rooms<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th className="">Departure Date<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th className="">Booked By<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th className="">Booked For<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th className="">Booked On<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                                <th className="">Status<i className="bi bi-arrow-down-up sort-btn"></i></th>
                                            </tr>
                                        </thead>

                                        {tdata()}

                                    </table>
                                </div>

                            </div>


                            <div className="row m-3 d-flex justify-content-between">
                                    
                    {/*}                <div className="col-4 d-flex justify-content-start" ><i class="bi bi-eye-fill me-2"></i>Showing 1 to {recordno} of {details.length} entries</div>
                                {/* <div className="col-6"></div> */}
                                <div className="col-12 d-flex justify-content-end">
                                    <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-arrow-left"></i><span class="hide-element"></span></button>
                                    <button className="btn btn-outline-dark m-1 grey-border">1</button>
                                    <button className="btn btn-outline-dark m-1 grey-border active">2</button>
                                    <button className="btn btn-outline-dark m-1 grey-border">3</button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><span class="hide-element"></span><i className="bi bi-arrow-right"></i></button>
                                    
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        );
    
    }
 
export default Reservation;