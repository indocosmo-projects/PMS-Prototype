import React from 'react';
import '../../style.css';
import './Reservation.css';
import { useState } from 'react';

function Reservation() {
    
    const details =  
        [{id: 1, rese:'R-000001',arrival :'22-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        {id: 2, rese:'R-000002',arrival :'27-DEC-2018',nights:'4',rooms:'2',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        {id: 3, rese:' R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
        {id: 4, rese:'R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
        {id: 5, rese:'R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
        {id: 6, rese:'R-000007',arrival :'16-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        {id: 7, rese:'R-000007',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        ];

        const [dropdown, setDropdown] = useState(0);
        const [recordno, setRecordno] = useState(5);


    const tdata = () =>{
        
        var pageno = ( details.length / recordno );
        var balancepage = ( details.length % recordno );
        console.log("pageno==>" + pageno + "balancepage==>" + balancepage);
        return(
                <tbody>
                    {
                    details.map(detail =>  <tr key={detail.id} >
                        <td className="left" style={{color : 'blue'}} >{detail.rese}</td>
                        <td className="left">{detail.arrival}</td>
                        <td >{detail.nights}</td>
                        <td >{detail.rooms}</td>
                        <td className="left">{detail.departure}</td>
                        <td className="left">{detail.bookedby}</td>
                        <td className="left">{detail.bookedfor}</td>
                        <td className="left">{detail.bookedon}</td>
                        <td className="left" style={{color : 'blue'}} >{detail.status}</td>
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
                            <label className="text-left" htmlFor="reservedby">Reserved By :</label>
                            <input type="text" className="form-control" name="reservedby" id="reservedby"/>
                        </div>
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <label className="text-left" htmlFor="reservedstatus">Reservation Status :</label>
                            <input type="text" className="form-control" name="reservedstatus" id="reservedstatus"/>
                        </div>
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <label className="text-left" htmlFor="departdate">Reserved Date :</label>
                            <input type="date" className="form-control" name="departdate" id="departdate"/>
                        </div>
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <label className="text-left" htmlFor="arrival">Arrival Date :</label>
                            <input type="date" className="form-control " name="arrival" id="arrival"/>
                        </div>
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <button className="btn btn-danger m-1">Search</button>
                            <button className="btn btn-secondary m-1" onClick={() =>setDropdown(( 0 )) }>Close</button>
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
                    <div>
                        <h5 className="header"> RESERVATIONS </h5>
                    </div>
                    
                    <div className="p-3 ">
                    <div className="row ">
                        <div className="col-sm-6  ">
                            <div className="input-group mb-3 ">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <div className="input-group-append p-0 bg-white ">
                                    <span className="input-group-text p-0 bg-white br" ><button className="btn"  onClick={count}  ><i className="bi bi-caret-down"></i></button></span>
                                </div>
                                <div className="input-group-append p-0">
                                    <span className="input-group-text p-0 br"><button className="btn btn-primary br" title="Search" >Search</button></span>
                                </div>
                            </div>
                            <div className="parentdpdown">
                                <div className="ddw" >
                                    {dropdownfn()}  
                                </div>
                            </div>
                        </div>
                       
                        <div className="col-sm-6">
                            <div className="mb-3 ">
                                <a href="/newreservation"><button className="btn btn-secondary" title="New Reservation" style={{float : 'right'}}>Add New <i className="bi bi-plus"></i></button></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-0">
                        <div className="row">
                            <div className="col-sm-1">
                                <div className="inputfieldpadding p-0">
                                    <select className=" form-select" title="select" name="rec" id="rec" onChange={(e) => setRecordno(( e.target.value )) }>
                                        <option defaultValue="5">5</option>
                                        <option defaultValue="15">15</option>
                                        <option defaultValue="20">20</option>
                                        <option defaultValue="21">All</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-10 inputfieldpadding">
                                <p className="text-left">records per page</p>
                               
                            </div>
                        </div>
                    </div>
                    
                  

                    <div className="row">
                        <div className="col-sm-12 ">
                            <table className="table table-striped table-bordered" >
                                <thead >
                                    <tr>
                                        <th className="thstyle left">RESV.#</th>
                                        <th className="thstyle left">ARRIVAL <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th> 
                                        <th className="thstyle left">NIGHTS <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i> </th>
                                        <th className="thstyle left">ROOMS <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle left">DEPARTURE <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle left">BOOKED BY <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle left">BOOKED FOR <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle left">BOOKED ON <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle left">STATUS <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                    </tr>
                                </thead>
                                
                                    {tdata()} 
                        
                            </table>
                        </div>
                    
                    </div>

                    <div className="row">
                        <div className="col-sm-3" style={{textAlign : 'left'}}>Showing 1 to {recordno} of {details.length} entries</div>
                        <div className="col-sm-6"></div>
                        <div className="col-sm-3" style={{textAlign : 'right'}}>
                            <button className="btn btn-outline-dark m-1">Prev</button>
                            <button className="btn btn-outline-dark m-1">1</button>
                            <button className="btn btn-outline-dark m-1">2</button>
                            <button className="btn btn-outline-dark m-1">Next</button>
                        </div>
                    </div>


                    </div>
                </div>
            </div>
        );
    
}
 
export default Reservation;