import React,{ useState } from 'react';
import './Reception.css';
import '../../style.css';


function ReceptionExpectedArrivals() {


    const details =  
        [{id: 1, rese:'104',arrival :'22-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        {id: 2, rese:'104',arrival :'27-DEC-2018',nights:'4',rooms:'2',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        {id: 3, rese:'104',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
        {id: 4, rese:'104',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
        {id: 5, rese:'104',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
        {id: 6, rese:'104',arrival :'16-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        {id: 7, rese:'104',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        ];
        const [dropdown, setDropdown] = useState(0);


    const tdata = () =>{
        
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
                        <td className="bg-success" ><button className="btn btn-success">CHECK-IN</button></td>
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
                    <button className="btn btn-secondary m-1" onClick={() => setDropdown((0)) }>Close</button>
                </div>
            </div>
            </div>
            </div>
        );
    }
  

        return (
            <div className="section">
                <div className="container-fluid">
                    {/* ----- Heading ------ */}
                    <div>
                        <h5 className="header"> RESERVATIONS </h5>
                    </div>
                    
                    <div className="p-3">
                        <div className="height">
                            <a className="nvlink" href="/reception">IN-HOUSE</a>
                            <a className="nvlink active" href="/receptionexpectedarrival">EXPECTED ARRIVALS</a>
                            <a className="nvlink" href="/receptionhotelstatus">HOTEL STATUS</a>
                        </div>
                    </div>

                    <div className="p-3">
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
                                <a href="/newreservation"><button className="btn btn-success" title="New Reservation" style={{float : 'right'}}>NEW CHECK-IN<i className="bi bi-plus"></i></button></a>
                            </div>
                        </div>
                    </div>
                   

                     <table className="table table-bordered">
                        <thead >
                            <tr>
                                <th className="thstyle left">RESV.#</th>
                                <th className="tdwidthguest left">ARRIVAL</th>
                                <th className="thstyle left">NIGHTS</th>
                                <th className="thstyle left">ROOMS</th>
                                <th className="thstyle left">DEPARTURE</th>
                                <th className="thstyle left">BOOKED BY</th>
                                <th className="tdwidth left">BOOKED FOR</th>
                                <th className="tdwidth left">BOOKED ON</th>
                                <th className="tdwidth left">STATUS</th>
                            </tr>							
                        </thead>
                                {tdata()}

                    </table>
                    
                    </div>
                </div>
            </div>
        );
    
}
 
export default ReceptionExpectedArrivals;