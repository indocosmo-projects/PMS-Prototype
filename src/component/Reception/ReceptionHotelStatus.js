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
        {id: 19, name : '119', status: 'C' },
        {id: 19, name : '120', status: 'C' },
    ]

    const roomlist = (room) => {
        
        if(room.status === 'O')return (
                <div className="room row border-occupied">
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="col-12 br-bg-occupied"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                </div>    
            );

            if(room.status === 'R')return (
                <div className="room row border-reserved">
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="col-12 br-bg-reserved"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                </div>    
            );
        
            if(room.status === 'V')return (
                <div className="room row border-vaccant">
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="col-12 br-bg-vacant"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                </div>    
            );

            if(room.status === 'C')return (
                <div className="room row border-clean">
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="col-12 br-bg-clean"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                </div>    
            );

            if(room.status === 'D')return (
                <div className="room row border-dirty">
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="col-12 br-bg-dirty"><i className="fa fa-bed me-2 mb-2"></i>DLX</div>
                </div>    
            );

    }

        return(
                <div className="container-fluid">
                
                    <div className=" row">
                        <div className="col-sm-9">
                            <div className="row">
                                    <div className="col-sm-2 p-3">
                                        <div className="row">
                                            <div className="col-2 circle occupied" ></div>
                                            <div className="col-8 left">OCCUPIED</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2  p-3">
                                        <div className="row">
                                            <div className="col-2 circle reserved" ></div>
                                            <div className="col-8 left">RESERVED</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 p-3">
                                        <div className="row">
                                            <div className="col-2 circle vaccant" ></div>
                                            <div className="col-8 left">VACCANT</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 p-3">
                                        <div className="row">
                                            <div className="col-2 circle clean" ></div>
                                            <div className="col-8 left">CLEAN</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 p-3">
                                        <div className="row">
                                            <div className="col-2 circle dirty" ></div>
                                            <div className="col-8 left">DIRTY</div>
                                        </div>
                                    </div>
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
                            <div className="col-sm-3">
                                    <div className="m-3 ">
                                        <Link to="/newreservation"><button className="btn btn-success" title="New Reservation" style={{float : 'right'}}><i className="bi bi-plus"></i>New Check-in</button></Link>
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
                        <ul className="ulistmargin ">
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
                                <ul className="ulistmargin ">
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
                                <ul className="ulistmargin ">
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
                                <ul className="ulistmargin ">
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
                                <ul className="ulistmargin ">
                            {rooms.map(room => <li key={room.id} className="listItem">
                            {roomlist(room)}
                            </li>
                            )}
                        </ul>
                                </Accordion.Body>
                            </Accordion.Item>


                    </Accordion>
                        </div>

                        <div className="col-sm-12 col-md-4 p-3">
                            <div className="row">
                                <div className="col-sm-12">
                                    <button className="btn btn-secondary w-100 text-white mb-2">Deposit</button>
                                    <button className="btn btn-secondary w-100 text-white mb-2">Posting</button>
                                    <button className="btn btn-secondary w-100 text-white mb-2">Bill Preview</button>
                                    <button className="btn btn-secondary w-100 text-white mb-2">Sharer</button>
                                    <button className="btn btn-info w-100 text-white mb-2">Deposit</button>
                                    <div className="form-group left mt-2">
                                        <label for="room"><b>Room Number</b></label>
                                        <input type="text" className="form-control" id="room" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-6">
                                            <div className="left p-2 row" >
                                                    
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> Complementary BreakFast</div>
                                            </div>
                                            <div className="left p-2 row" >
                                               
                                                    
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> Television</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> Coffee Maker</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> Pick & Drop</div>
                                            </div>
                                            <div className="left p-2 row" >
                                               
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> 24x7 Room Service</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> Mineral Water 500 ml</div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                        <div className="left p-2 row" >
                                           
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> Free WiFi</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> Light Music</div>
                                            </div>
                                            <div className="left p-2 row" >
                                               
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> Iron Box & Iron Board</div>
                                            </div>
                                            <div className="left p-2 row" >
                                               
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> Self Laundry</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> 24x7 Hot/Cold Water</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                
                                                <div className="col-sm-12"><i className="bi bi-arrow-right-circle-fill"></i> 24x7 Help Desk</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
        );
}
 
export default ReceptionHotelStatus;