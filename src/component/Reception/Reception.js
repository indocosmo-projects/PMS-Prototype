import React,{ useState } from 'react';
import './Reception.css';
import '../../style.css';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReceptionExpectedArrivals from '../Reception/ReceptionExpectedArrivals';
import ReceptionHotelStatus from '../Reception/ReceptionHotelStatus';



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
                        <td className="bg-success text-white pt-4">CHECK-IN</td>
                        <td className="tdwidth">
                            <div className="row gap-3 px-4 reception-table-btn">
                                {/* <div className="col-2"> */}
                                    <button className="btn btn-primary button">Deposit</button>
                                {/* </div> */}
                                {/* <div className="col-2"> */}
                                    <button className="btn btn-primary button">Posting</button>
                                {/* </div> */}
                                {/* <div className="col-3"> */}
                                    <button className="btn btn-primary button">Bill Review</button>
                                {/* </div> */}
                                {/* <div className="col-2"> */}
                                    <button className="btn btn-primary button">Sharer</button>
                                {/* </div> */}
                                {/* <div className="col-2"> */}
                                    <button className="btn btn-primary button">Reprint</button>
                                {/* </div> */}
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
            <div className="section">
                <div className="container-fluid">
                    {/* ----- Heading ------ */}
                    <div>
                        <h5 className="header">Reception</h5>
                    </div>
                    
                <Tabs
                    defaultActiveKey="inhouse"
                    id="justify-tab-example"
                    className="mt-4 mb-4"
                    justify
                    >
                    <Tab eventKey="inhouse" title="IN-HOUSE">
                    
                    <div className="p-3">
                        <div className="row ">
                               

                        <div className="col-sm-6">
                            <div className="input-group mb-3 ">
                                        <input type="text" className="form-control" placeholder="Search..." />
                                        <button className="btn btn-outline-secondary search-opt-btn"  onClick={count}  ><i className="bi bi-caret-down"></i></button>
                                        <button className="btn btn-primary" title="Search" >Search</button>
                                </div>
                            <div className="parentdpdown">
                                <div className="ddw" >
                                    {dropdownfn()}
                                </div>
                            </div>
                        </div>

         
                                <div className="col-sm-6">
                                    <div className="mb-3 ">
                                    <Link to="/newreservation"><button className="btn btn-success" title="New Reservation" style={{float : 'right'}}><i className="bi bi-plus"></i>Add New</button></Link>
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
                            <table className="table table-bordered reception-table">
                                <thead>
                                    <tr>
                                        <th className="left">Room No.</th>
                                        <th className="left">Guest</th>
                                        <th className="left">Arrival</th>
                                        <th className="left">Departure</th>
                                        <th className="left">Folio Balance</th>
                                        <th className="left">Status</th>
                                        <th className=""></th>
                                    </tr>
                                </thead>
                                        {tdata()}

                            </table>
                        </div>
                        
                    
                    </div>
   

                     <div className="row m-3">
                                {/* <div className="col-3 left" >Showing 1 to {recordno} of {details.length} entries</div> */}
                                <div className="col-12 d-flex justify-content-end" >
                                    <div>
                                    <button className="btn btn-outline-dark m-1"><i className="bi bi-arrow-left"></i></button>
                                    <button className="btn btn-outline-dark m-1">1</button>
                                    <button className="btn btn-outline-dark m-1">2</button>
                                    <button className="btn btn-outline-dark m-1">3</button>
                                    <button className="btn btn-outline-dark m-1"><i className="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                    </div>

                    </Tab>
                    <Tab eventKey="expectedarrivals" title="EXPECTED ARRIVALS">
                        <ReceptionExpectedArrivals />
                    </Tab>
                    <Tab eventKey="hotelstatus" title="HOTEL STATUS">
                        <ReceptionHotelStatus />
                    </Tab>
                    {/* <Tab eventKey="contact" title="Contact" disabled>
                    </Tab> */}
                </Tabs>
   
                    
                </div>
            </div>
        );

}
 
export default Reception;