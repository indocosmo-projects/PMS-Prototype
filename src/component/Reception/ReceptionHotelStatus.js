import React,{ useState } from 'react';
import './Reception.css';
import '../../style.css';
import Form from 'react-bootstrap/Form';


function ReceptionHotelStatus() {

    const [recordno, setRecordno] = useState(5); 
    const rooms = 
    [
        {id: 1, name : '101' },
        {id: 2, name : '102' },
        {id: 3, name : '103' },
        {id: 4, name : '104' },
        {id: 5, name : '105' },
        {id: 6, name : '106' },
        {id: 7, name : '107' },
        {id: 8, name : '108' },
        {id: 9, name : '109' },
        {id: 10, name : '110' },
        {id: 11, name : '111' },
        {id: 12, name : '112' },
    ]

    const roomlist = () => {
        
        return (
                <div>
                    <ul className="ulistmargin ">
                        {rooms.map(room => <li key={room.id} className="listItem">
                            <div className="room row">
                                <div className="rmtype col-12"><i className="bi bi-distribute-vertical stat" style={{float : 'left'}} ></i>DLX</div>
                                <div className="col-12 rmnum">{room.name}</div>
                                <div className="rmback col-12"></div>
                            </div>
                        </li>
                        )}
                    </ul>
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
                            <a className="nvlink" href="/reception">IN-HOUSE</a>
                            <a className="nvlink" href="/receptionexpectedarrival">EXPECTED ARRIVALS</a>
                            <a className="nvlink active" href="/receptionhotelstatus">HOTEL STATUS</a>
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
                                                <Form.Select size='sm' aria-label="No of Records" name="rec" id="rec" onChange={(e) => setRecordno((e.target.value))}>
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
                                        <a href="/newreservation"><button className="btn btn-success" title="New Reservation" style={{float : 'right'}}>NEW CHECK-IN<i className="bi bi-plus"></i></button></a>
                                    </div>
                            </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-8">
                            {roomlist()}
                        </div>
                        <div className="col-sm-4"></div>
                    </div>

                </div>
            </div>
        );
}
 
export default ReceptionHotelStatus;