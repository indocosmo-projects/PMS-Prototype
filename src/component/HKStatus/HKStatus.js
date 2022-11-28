import React from 'react';
import './HKStatus.css';
import '../../style.css';
// import Form from 'react-bootstrap/Form';
import Accordion from 'react-bootstrap/Accordion';
import Dropdown from 'react-bootstrap/Dropdown';
// import { Link } from "react-router-dom";


function HKStatus() {

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
                <div>
                        <Dropdown className="room row border-occupied br-bg-occupied">
                        <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
                            <div className="col-12 rmnum">{room.name}</div>
                            <hr/>
                            <div className="col-12"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Check Out</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">House Keeping</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Deposit</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">Posting</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-4">Edit</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    
                </div>    
            );

            if(room.status === 'R')return (
                <div>
                    <Dropdown className="room row border-reserved br-bg-reserved">
                        <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
                        <div className="col-12 rmnum">{room.name}</div>
                        <hr/>
                        <div className="col-12"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Check In</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">No Show</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">Deposit</Dropdown.Item>    
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">GRC</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">Pick Up</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-3">Edit</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    
                </div>    
            );
        
            if(room.status === 'V')return (
                <div>
                    <Dropdown className="room row border-vaccant br-bg-vacant">
                        <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
                            <div className="col-12 rmnum">{room.name}</div>
                            <hr/>
                            <div className="col-12"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Clean</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    
                </div>    
            );

            if(room.status === 'C')return (
                <div>
                    <Dropdown className="room row border-clean br-bg-clean">
                        <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
                            <div className="col-12 rmnum">{room.name}</div>
                            <hr/>
                            <div className="col-12"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">New Check In</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2">Mark as Vacant</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>

                    
                </div>    
            );

            if(room.status === 'D')return (
                <div>
                    <Dropdown className="room row border-dirty br-bg-dirty">
                        <Dropdown.Toggle variant="" id="dropdown-basic" className='text-white'>
                            <div className="col-12 rmnum">{room.name}</div>
                            <hr/>
                            <div className="col-12"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Clean</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                    
                </div>    
            );

    }

        return(
            <div>
            <div className="section">
                <div className="container-fluid formcontent">
                    {/* ----- Heading ------ */}
                    <div className='sticky-div'>
                        <h3 className="header"><i class="bi bi-calendar2-plus-fill me-2"></i>House Keeping Status</h3>
                    </div>
                <div className="container-fluid tab-bg">
                
                    <div className="row mt-4 sticky-div-hotel-status">
                    {/* <p className='left'>Check your hotel status across the floors</p> */}

                        <div className="col-sm-12 col-md-12">
                            <div className="status-hint-bg gap-4">
                                            <div className='status-label'>Status Colors</div><i class="bi bi-chevron-right"></i>
                                            <div><i class="bi bi-circle-fill occupied me-2"></i>OCCUPIED</div>
                                            <div><i class="bi bi-circle-fill reserved me-2"></i>RESERVED</div>
                                            <div><i class="bi bi-circle-fill vaccant me-2"></i>VACCANT</div>
                                            <div><i class="bi bi-circle-fill clean me-2"></i>CLEAN</div>
                                            <div><i class="bi bi-circle-fill dirty me-2"></i>DIRTY</div>
                            </div>
                        </div>
                            {/* <div className="col-sm-12 col-md-4">
                                    <div className="p-3">
                                        <Link to="/newreservation"><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i class="bi bi-plus-circle me-2"></i>New Check-in</button></Link>
                                    </div>
                            </div> */}
                    </div>


                    <div className="row p-3">
                        <div className="col-sm-12 col-md-12" >
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
                        </div>


                    </div>
                </div>
            </div>
        </div>
        );
}
 
export default HKStatus;