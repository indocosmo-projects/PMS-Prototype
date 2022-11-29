import React from 'react';
import { Link } from "react-router-dom";
import RoomModal from '../Room/RoomModal';

function Room() {
        return(
            <div>
                <div className="section">
                    <div className="container-fluid formcontent">
                        {/* ----- Heading ------ */}
                        <div className='sticky-div'>
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Rooms</h3>
                        </div>

                          <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-group mb-3 ">
                                                <input type="text" className="form-control" placeholder="Search..." />
                                                <button className="btn btn-dark px-4" title="Search" ><i className ="bi bi-search"></i></button>
                                        </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="mb-3 ">
                                    <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><RoomModal/></button></Link>
                                    </div>
                                </div>
                            </div>
                        


                    </div>
                </div>
            </div>
        );
}
 
export default Room;