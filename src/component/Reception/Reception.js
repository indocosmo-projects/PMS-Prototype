import React,{ useState } from 'react';
import './Reception.css';
import '../../style.css';


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
                        <td className="bg-success"><button className="btn btn-success w-100">CHECK-IN</button></td>
                        <td className="tdwidth">
                            <div className="row">
                                <div className="col-2">
                                    <button className="btn btn-primary">Deposit</button>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary">Posting</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-primary">Bill Review</button>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary">Sharer</button>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary">Reprint</button>
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
            console.log("dropdown" + dropdown);
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
                    <button className="btn btn-secondary m-1" onClick={() => this.setDropdown(( 0 )) }>Close</button>
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
                                    <span className="input-group-text p-0 bg-white br" ><button className="btn"  onClick={count()}  ><i className="bi bi-caret-down"></i></button></span>
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
            </div>
        );

}
 
export default Reception;