import React,{ useState } from 'react';
import './Reception.css';
import '../../style.css';
import Form from 'react-bootstrap/Form';

function ReceptionHotelStatus() {

    const [recordno, setRecordno] = useState(5); 

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
                                    <div className="col-sm-2 m-2 p-3">
                                        <div className="row">
                                            <div className="col-2 m-2 square occupied" ></div>
                                            <div className="col-8">OCCUPIED</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 m-2 p-3">
                                        <div className="row">
                                            <div className="col-2 m-2 square reserved" ></div>
                                            <div className="col-8">RESERVED</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 m-2 p-3">
                                        <div className="row">
                                            <div className="col-2 m-2 square vaccant" ></div>
                                            <div className="col-8">VACCANT</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 m-2 p-3">
                                        <div className="row">
                                            <div className="col-2 m-2 square clean" ></div>
                                            <div className="col-8">CLEAN</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 m-2 p-3">
                                        <div className="row">
                                            <div className="col-2 m-2 square dirty" ></div>
                                            <div className="col-8">DIRTY</div>
                                        </div>
                                    </div>
                                    <div className="col-sm-2 m-2 p-3">
                                        <div className="row">
                                            <div className="col-2" >SORT BY</div>
                                            <div className="col-8">
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

                </div>
            </div>
        );
}
 
export default ReceptionHotelStatus;