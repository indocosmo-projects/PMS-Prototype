import React from 'react';
import './Reception.css';
import '../../style.css';
// import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";


function ReceptionHotelStatus() {

/*    const [recordno, setRecordno] = useState(5);  */
    const rooms = 
    [
        {id: 1, name : '101', status: 'O' },
        {id: 2, name : '102', status: 'R' },
        {id: 3, name : '103', status: 'V' },
        {id: 4, name : '104', status: 'C' },
        {id: 5, name : '105', status: 'D' },
        {id: 6, name : '106', status: 'O' },
        {id: 7, name : '107', status: 'R' },
        {id: 8, name : '108', status: 'V' },
        {id: 9, name : '109', status: 'C' },
        {id: 10, name : '110', status: 'D' },
        {id: 11, name : '111', status: 'O' },
        {id: 12, name : '112', status: 'R' },
        {id: 13, name : '113', status: 'V' },
        {id: 14, name : '114', status: 'C' },
        {id: 15, name : '115', status: 'D' },
        {id: 16, name : '116', status: 'O' },
        {id: 17, name : '117', status: 'R' },
        {id: 18, name : '118', status: 'V' },
    ]

    const roomlist = (room) => {
        
        if(room.status === 'O')return (
                <div className="room row border-occupied mx-1">
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="col-12 br-bg-occupied"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                </div>    
            );

            if(room.status === 'R')return (
                <div className="room row border-reserved mx-1">
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="col-12 br-bg-reserved"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                </div>    
            );
        
            if(room.status === 'V')return (
                <div className="room row border-vaccant mx-1">
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="col-12 br-bg-vacant"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                </div>    
            );

            if(room.status === 'C')return (
                <div className="room row border-clean  mx-1">
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="col-12 br-bg-clean"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                </div>    
            );

            if(room.status === 'D')return (
                <div className="room row border-dirty mx-1">
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="col-12 br-bg-dirty"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                </div>    
            );

    }

        return(
                <div className="container-fluid tab-bg">
                
                    <div className="row mt-4">
                    <p className='left'>Check your hotel status across the floors</p>

                        <div className="col-sm-12 col-md-8">
                            <div className="status-hint-bg gap-4">
                                            <div className='gray'>Status Colors<i class="bi bi-caret-right-fill gray"></i></div>
                                            <div><i class="bi bi-circle-fill occupied me-2"></i>OCCUPIED</div>
                                            <div><i class="bi bi-circle-fill reserved me-2"></i>RESERVED</div>
                                            <div><i class="bi bi-circle-fill vaccant me-2"></i>VACCANT</div>
                                            <div><i class="bi bi-circle-fill clean me-2"></i>CLEAN</div>
                                            <div><i class="bi bi-circle-fill dirty me-2"></i>DIRTY</div>

                                    {/* <div className="col-sm-2 p-3">
                                      <div className="row" >
                                        <div className="col-12 left" >SORT BY</div> 
                                            <div className="col-12">
                                                <Form.Select size='sm' aria-label="No of Records" name="rec" id="rec" onChange={(e) => setRecordno((e.target.value))}>
                                                    <option value="1">5</option>
                                                    <option value="2">10</option>
                                                    <option value="3">15</option>
                                                    <option value="3">All</option>
                                                </Form.Select>
                                            </div>
                                        </div> 
                                            
                                    </div> */}

                            </div>
                        </div>
                            <div className="col-sm-12 col-md-4">
                                    <div className="p-3">
                                        <Link to="/newreservation"><button className="btn btn-success" title="New Reservation" style={{float : 'right'}}><i class="bi bi-plus-circle me-2"></i>New Check-in</button></Link>
                                    </div>
                            </div>
                    </div>


                    <div className="row p-3">
                        <div className="col-sm-12 col-md-8" >
                    <Accordion className="my-4" defaultActiveKey="0" alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h5>FLOOR-01</h5></Accordion.Header>
                                <Accordion.Body>

                        {/* <h4 className="left"></h4> */}
                        <ul className="ulistmargin">
                            {rooms.map(room => <li key={room.id} className="listItem">
                            {roomlist(room)}
                            </li>
                            )}
                        </ul>
                        </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h5>FLOOR-02</h5></Accordion.Header>
                                <Accordion.Body>
                                <ul className="ulistmargin">
                            {rooms.map(room => <li key={room.id} className="listItem">
                            {roomlist(room)}
                            </li>
                            )}
                        </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header><h5>FLOOR-03</h5></Accordion.Header>
                                <Accordion.Body>
                                <ul className="ulistmargin">
                            {rooms.map(room => <li key={room.id} className="listItem">
                            {roomlist(room)}
                            </li>
                            )}
                        </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header><h5>FLOOR-04</h5></Accordion.Header>
                                <Accordion.Body>
                                <ul className="ulistmargin">
                            {rooms.map(room => <li key={room.id} className="listItem">
                            {roomlist(room)}
                            </li>
                            )}
                        </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header><h5>FLOOR-05</h5></Accordion.Header>
                                <Accordion.Body>
                                <ul className="ulistmargin">
                            {rooms.map(room => <li key={room.id} className="listItem">
                            {roomlist(room)}
                            </li>
                            )}
                        </ul>
                                </Accordion.Body>
                            </Accordion.Item>


                    </Accordion>
                        </div>

                        <div className="col-sm-12 col-md-4">
                            <div className="row mt-4">
                                {/* <div className="col-sm-12"> */}
                                    <div className='col-sm-12 col-lg-6'><button className="btn btn-secondary w-100 text-white mb-2"><i class="bi bi-cash-coin me-2"></i>Deposit</button></div>
                                    <div className='col-sm-12 col-lg-6'><button className="btn btn-secondary w-100 text-white mb-2">Posting</button></div>
                                    <div className='col-sm-12 col-lg-6'><button className="btn btn-secondary w-100 text-white mb-2"><i class="bi bi-receipt me-2"></i>Bill Preview</button></div>
                                    <div className='col-sm-12 col-lg-6'><button className="btn btn-secondary w-100 text-white mb-2"><i class="bi bi-person-plus-fill me-2"></i>Sharer</button></div>
                                    <div className='col-sm-12'><button className="btn btn-primary w-100 text-white mb-2"><i class="bi bi-printer-fill me-2"></i>Print</button></div>
                                    
                                    
                                    <div className="form-group left mt-2">
                                        <label for="room"><b>Room Number</b></label>
                                        <input type="text" className="form-control" id="room" />
                                    </div>
                                </div>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div className="left p-2 row" >
                                                    
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>Complementary BreakFast</div>
                                            </div>
                                            <div className="left p-2 row" >
                                               
                                                    
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>Television</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>Coffee Maker</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>Pick & Drop</div>
                                            </div>
                                            <div className="left p-2 row" >
                                               
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>24x7 Room Service</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>Mineral Water 500 ml</div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-sm-12">
                                        <div className="left p-2 row" >
                                           
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>Free WiFi</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>Light Music</div>
                                            </div>
                                            <div className="left p-2 row" >
                                               
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>Iron Box & Iron Board</div>
                                            </div>
                                            <div className="left p-2 row" >
                                               
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>Self Laundry</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>24x7 Hot/Cold Water</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill me-1"></i>24x7 Help Desk</div>
                                            </div>
                                        </div>
                                    </div>
                                {/* </div> */}
                        </div>

                    </div>


                </div>
        );
}
 
export default ReceptionHotelStatus;