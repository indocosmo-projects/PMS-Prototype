import React from 'react';
import './Reception.css';
import '../../style.css';
import Form from 'react-bootstrap/Form';
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
    ]

    const roomlist = (room) => {
        
        if(room.status === 'O')return (
                <div className="room row border-occupied">
                    <div className="rmtype border-bottom-occupied col-12"><i className="fa fa-bed roomicon" style={{float : 'left'}} ></i>DLX</div>
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="rmback occupied col-12"></div>
                </div>    
            );

            if(room.status === 'R')return (
                <div className="room row border-reserved">
                    <div className="rmtype border-bottom-reserved col-12"><i className="fa fa-bed roomicon" style={{float : 'left'}} ></i>DLX</div>
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="rmback reserved col-12"></div>
                </div>    
            );
        
            if(room.status === 'V')return (
                <div className="room row border-vaccant">
                    <div className="rmtype border-bottom-vaccant col-12"><i className="fa fa-bed roomicon" style={{float : 'left'}} ></i>DLX</div>
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="rmback vaccant col-12"></div>
                </div>    
            );

            if(room.status === 'C')return (
                <div className="room row border-clean">
                    <div className="rmtype border-bottom-clean col-12"><i className="fa fa-bed roomicon" style={{float : 'left'}} ></i>DLX</div>
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="rmback clean col-12"></div>
                </div>    
            );

            if(room.status === 'D')return (
                <div className="room row border-dirty">
                    <div className="rmtype border-bottom-dirty col-12"><i className="fa fa-bed roomicon" style={{float : 'left'}} ></i>DLX</div>
                    <div className="col-12 rmnum">{room.name}</div>
                    <div className="rmback dirty col-12"></div>
                </div>    
            );

    }

        return(
            <div className="section">
                <div className="container-fluid">
                    {/* ----- Heading ------ */}
                    <div>
                        <h5 className="header"> RESERVATIONS </h5>
                    </div>

                    <div className="p-3">
                        <div className="height">
                            <Link className="nvlink" to="/reception">IN-HOUSE</Link>
                            <Link className="nvlink" to="/receptionexpectedarrival">EXPECTED ARRIVALS</Link>
                            <Link className="nvlink active" to="/receptionhotelstatus">HOTEL STATUS</Link>
                        </div>
                    </div>

                    <div className="shade row">
                        <div className="col-sm-9">
                            <div className="row">
                                    <div className="col-sm-2 p-3">
                                        <div className="row">
                                            <div className="col-2 square occupied" ></div>
                                            <div className="col-8 left">OCCUPIED</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2  p-3">
                                        <div className="row">
                                            <div className="col-2 square reserved" ></div>
                                            <div className="col-8 left">RESERVED</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 p-3">
                                        <div className="row">
                                            <div className="col-2 square vaccant" ></div>
                                            <div className="col-8 left">VACCANT</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 p-3">
                                        <div className="row">
                                            <div className="col-2 square clean" ></div>
                                            <div className="col-8 left">CLEAN</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 p-3">
                                        <div className="row">
                                            <div className="col-2 square dirty" ></div>
                                            <div className="col-8 left">DIRTY</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 p-3">
                                      <div className="row" >
                                        <div className="col-12 left" >SORT BY</div> 
                                            <div className="col-12">
                                                <Form.Select size='sm' aria-label="No of Records" name="rec" id="rec" /*onChange={(e) => setRecordno((e.target.value))} */>
                                                    <option value="1">5</option>
                                                    <option value="2">10</option>
                                                    <option value="3">15</option>
                                                    <option value="3">All</option>
                                                </Form.Select>
                                            </div>
                                        </div> 
                                            
                                    </div>

                            </div>
                        </div>
                            <div className="col-sm-3">
                                    <div className="m-3 ">
                                        <Link to="/newreservation"><button className="btn btn-success" title="New Reservation" style={{float : 'right'}}>NEW CHECK-IN<i className="bi bi-plus"></i></button></Link>
                                    </div>
                            </div>
                    </div>

                    <div className="row p-3">
                        <div className="col-sm-8 " >
                            <div>
                        <h4 className="left">FLOOR-01</h4>
                        <ul className="ulistmargin ">
                            {rooms.map(room => <li key={room.id} className="listItem">
                            {roomlist(room)}
                            </li>
                            )}
                        </ul>
                    </div>
                        </div>
                        <div className="col-sm-4 p-3">
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
                                        <div className="col-sm-6">
                                            <div className="left p-2 row" >
                                                <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> Complementary BreakFast</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> Television</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> Coffee Maker</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> Pick & Drop</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> 24x7 Room Service</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> Mineral Water 500 ml</div>
                                            </div>
                                            
                                        </div>
                                        <div className="col-sm-6">
                                        <div className="left p-2 row" >
                                            <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> Free WiFi</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> Light Music</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> Iron Box & Iron Board</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> Self Laundry</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> 24x7 Hot/Cold Water</div>
                                            </div>
                                            <div className="left p-2 row" >
                                                <div className="col-sm-2">
                                                    <i className="fa fa-hand-o-right"></i>
                                                </div>
                                                <div className="col-sm-10"> 24x7 Help Desk</div>
                                            </div>
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