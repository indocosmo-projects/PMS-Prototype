import React,{ useState } from 'react';
import './Reception.css';
import '../../style.css';
import Form from 'react-bootstrap/Form';


function Reception() {
  

    const details =
                [{id: 1, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018', departure: '20-07-2018', foliobalance:'2780' },  
                {id: 2, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018', departure: '20-07-2018', foliobalance:'2780' },  
                {id: 3, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018', departure: '20-07-2018', foliobalance:'2780' },  
                {id: 4, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018', departure: '20-07-2018', foliobalance:'2780' },  
                {id: 5, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018', departure: '20-07-2018', foliobalance:'2780' },  
                ];

    const [dropdown, setDropdown] = useState(0);
    const [recordno, setRecordno] = useState(5); 


    const tdata = () =>{
        
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.roomno}</td>
                        <td className="left">{detail.guest}</td>
                        <td className="left">{detail.arrival}</td>
                        <td className="left">{detail.departure}</td>
                        <td className="left">{detail.foliobalance}</td>
                        <td className="bg-success"><button className="btn btn-success w-100 button">CHECK-IN</button></td>
                        <td className="tdwidth">
                            <div className="row">
                                <div className="col-2">
                                    <button className="btn btn-primary button">Deposit</button>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary button">Posting</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-primary button">Bill Review</button>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary button">Sharer</button>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary button">Reprint</button>
                                </div>
                            </div>
                        </td>
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
                    <button className="btn btn-secondary m-1" onClick={() => setDropdown(( 0 )) }>Close</button>
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
                            <a className="nvlink active" href="/reception">IN-HOUSE</a>
                            <a className="nvlink" href="/receptionexpectedarrival">EXPECTED ARRIVALS</a>
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
 
                     <div className="row mt-4">
                                <div className="col-md-2 col-lg-1 col-3">
                                    <Form.Select size='sm' aria-label="No of Records" name="rec" id="rec" onChange={(e) => setRecordno((e.target.value))}>
                                        <option value="1">5</option>
                                        <option value="2">10</option>
                                        <option value="3">15</option>
                                        <option value="3">All</option>
                                    </Form.Select>

                                </div>
                                <div className="col-md-6 col-5 col-lg-7 d-flex justify-content-start">
                                    <p className="text-left">records per page</p>
                                </div>

                               
                        </div>  
                        <div>
                            <table className="table table-bordered">
                                <thead >
                                    <tr>
                                        <th className="thstyle left">Room No.</th>
                                        <th className="tdwidthguest left">Guest</th>
                                        <th className="thstyle left">Arrival</th>
                                        <th className="thstyle left">Departure</th>
                                        <th className="thstyle left">Folio Balance</th>
                                        <th className="thstyle left">Status</th>
                                        <th className="tdwidth"></th>
                                    </tr>
                                </thead>
                                        {tdata()}

                            </table>
                        </div>
                        
                    
                    </div>
   

                     <div className="row m-3">
                                <div className="col-3 left" >Showing 1 to {recordno} of {details.length} entries</div>
                                <div className="col-6"></div>
                                <div className="col-3" >
                                    <button className="btn btn-outline-dark m-1"><i className="bi bi-arrow-left"></i>Prev</button>
                                    <button className="btn btn-outline-dark m-1">1</button>
                                    <button className="btn btn-outline-dark m-1">2</button>
                                    <button className="btn btn-outline-dark m-1">Next<i className="bi bi-arrow-right"></i></button>
                                </div>
                    </div>

                </div>
            </div>
        );

}
 
export default Reception;