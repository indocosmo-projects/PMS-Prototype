import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import './Reception.css';
import '../../style.css';
// import { Link } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';



function ReceptionExpectedDepartures() {


    const details =
                [{id: 1, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018, 10:00 AM', departure: '21-07-2018, 10:00 AM', foliobalance:'2780' },  
                {id: 2, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018, 10:00 AM', departure: '21-07-2018, 10:00 AM', foliobalance:'2780' },  
                {id: 3, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018, 10:00 AM', departure: '21-07-2018, 10:00 AM', foliobalance:'2780' },  
                {id: 4, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018, 10:00 AM', departure: '21-07-2018, 10:00 AM', foliobalance:'2780' },  
                {id: 5, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018, 10:00 AM', departure: '21-07-2018, 10:00 AM', foliobalance:'2780' },  
                ];
        const [dropdown, setDropdown] = useState(0);
        // const [recordno, setRecordno] = useState(5); 



    const tdata = () =>{
        
        return( 
            <tbody>
            {
            details.map(detail => <tr key={detail.id} >
                <td>{detail.roomno}</td>
                <td>{detail.guest}</td>
                <td>{detail.arrival}</td>
                <td>{detail.departure}</td>
                <td>{detail.foliobalance}</td>
                {/* <td className="bg-success text-white">CHECK-IN</td> */}
                <td>
                    <button className="btn btn-primary"><i class="bi bi-cash-coin me-2"></i>Deposit</button>
                </td>
                        
                        <td>
                            <button className="btn btn-primary"><i class="bi bi-clipboard2-check me-2"></i>Posting</button>
                            </td>
                    
                        <td>
                            <button className="btn btn-primary"><i class="bi bi-receipt me-2"></i>Bill Preview</button>
                            </td>
                        
                        <td>
                            <button className="btn btn-primary"><i class="bi bi-person-plus-fill me-2"></i>Sharer</button>
                            </td>
                     
                        {/* <td>
                            <button className="btn btn-danger"><i class="bi bi-box-arrow-right me-2"></i>Check-out</button>
                        </td> */}
                        <td>
                        <Dropdown as={ButtonGroup}>
                        <Link to="/checkout"><Button variant="danger right-br-none"><i class="bi bi-box-arrow-right me-2"></i>Check-out</Button></Link>

                            <Dropdown.Toggle className='checkout-split' split variant="danger" id="dropdown-split-basic" />

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-2">GRC</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-3">Invoice</Dropdown.Item>
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
 
                     <div className="row mt-4 d-flex justify-content-between">
                                {/* <div className="col-6 col-lg-6 d-flex justify-content-start">
                                    <Form.Select className='records-fixed-size' size='sm' aria-label="No of Records" name="rec" id="rec" >
                                        <option value="1">5</option>
                                        <option value="2">10</option>
                                        <option value="3">15</option>
                                        <option value="3">All</option>
                                    </Form.Select>
                                    <label className="text-left" htmlFor="">Records per Page</label>

                                </div> */}
                              
                                <div className="col-lg-12 mb-2 d-flex justify-content-end">
                                        <label className="text-left" htmlFor="">Showing Records of</label>
                                        <input type="date" className="form-control arrival date-fixed-size" name="arrival" id="arrival"/>
                            </div>
                               
                            </div>

                               
                         
                        <div>
                            <table className="table table-bordered reception-table">
                                <thead>
                                    <tr>
                                        <th>Room No.</th>
                                        <th>Guest</th>
                                        <th>Check In Date</th>
                                        <th>Check Out Date</th>
                                        <th>Folio Balance</th>
                                        <th>Deposit</th>
                                        <th>Posting</th>
                                        <th>Bill Previews</th>
                                        <th>Add Sharer</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                        {tdata()}

                            </table>
                        </div>
                </div>
                
        );
    
}
 
export default ReceptionExpectedDepartures;