import React,{ useState } from 'react';
import './Reception.css';
import '../../style.css';
import { Link } from "react-router-dom";
// import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Badge from 'react-bootstrap/Badge';
import Posting from './Posting';
import { Pagination } from 'antd';


function InhouseCustomers() {
  
    const details =
                [{id: 1, roomno:'104',guest:'Tom Hardy', badge:'2',  arrival: '20-07-2018, 10:00 AM', departure: '21-07-2018, 10:00 AM', foliobalance:'₹ 2780' },  
                {id: 2, roomno:'104',guest:'John Wick', badge:'8', arrival: '20-07-2018, 10:00 AM', departure: '21-07-2018, 10:00 AM', foliobalance:'₹ 2780' },  
                {id: 3, roomno:'104',guest:'Peter Parker', badge:'1', arrival: '20-07-2018, 10:00 AM', departure: '21-07-2018, 10:00 AM', foliobalance:'₹ 2780' },  
                {id: 4, roomno:'104',guest:'Harry Potter', badge:'2', arrival: '20-07-2018, 10:00 AM', departure: '21-07-2018, 10:00 AM', foliobalance:'₹ 2780' },  
                {id: 5, roomno:'104',guest:'Peter Pan', badge:'5', arrival: '20-07-2018, 10:00 AM', departure: '21-07-2018, 10:00 AM', foliobalance:'₹ 2780' },  
                ];

    const [dropdown, setDropdown] = useState(0);
    // const [recordno, setRecordno] = useState(5); 


    const tdata = () =>{
        
        return(
                <tbody className='reception-tbody'>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td><span className='ps-2'>{detail.roomno}</span></td>
                        <td><h6 className='d-flex justify-content-between pt-2 px-1'>{detail.guest}<Badge  className='ms-2' bg="secondary">{detail.badge} <span className='font-light-2'>Nights</span></Badge></h6></td>
                        <td><span className='ps-2'>{detail.arrival}</span></td>
                        <td><span className='ps-2'>{detail.departure}</span></td>
                        <td className='text-center'>{detail.foliobalance}</td>
                       
                        <td className='text-center'>
                            <button className="btn btn-primary btn-sm"><i className="bi bi-cash-coin me-2"></i>Deposit</button>
                        </td>
                                
                                <td className='text-center'><Posting /></td>

                                <td className='text-center'>
                                <Dropdown as={ButtonGroup}>
                                <Link to="/checkout"><Button variant="danger right-br-none btn-sm"><i className="bi bi-box-arrow-right me-2"></i>Check-out</Button></Link>

                                    <Dropdown.Toggle className='checkout-split' split variant="danger btn-sm" id="dropdown-split-basic" />

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-1">Bill Previews</Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item href="#/action-1">Add Sharer</Dropdown.Item>
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
                <div className="container-fluid tab-bg pb-2">
                        <div className="row mb-3">
                        <div className="col-sm-6">
                            <div className="input-group mb-3 mb-sm-0">
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

         
                                {/* <div className="col-sm-6">
                                    <div className="mb-3">
                                    <Link to="/newreservation"><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className="bi bi-plus-circle me-2"></i>New check-in</button></Link>
                                    </div>
                                </div> */}
                        </div>
 
                            <table className="table table-bordered reception-table">
                                <thead>
                                    <tr className='grey'>
                                        <th>Room No</th>
                                        <th>Guest</th>
                                        <th>Check-in Date</th>
                                        <th>Check-out Date</th>
                                        <th>Folio Balance</th>
                                        <th>Deposit</th>
                                        <th>Posting</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                        {tdata()}
                            </table>

                        <div className="row me-1 d-flex justify-content-between">
        
                                                <div className="col-12 d-flex justify-content-end">

                                                <Pagination
                                                        total={85}
                                                        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                                                        defaultPageSize={20}
                                                        defaultCurrent={1}
                                                        showQuickJumper
                                                    />

                                                </div>
                                            </div>

                </div>
        );
}
 
export default InhouseCustomers;