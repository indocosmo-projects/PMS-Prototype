import React from 'react';
import RoomAvailability from './RoomAvailability';
import RoomRateTypeDiscount from './RoomRateTypeDiscount';
import './CheckInEdit.css';
import CheckInEditDetails from './CheckInEditDetails';
import Form from 'react-bootstrap/Form';



// import { Link } from "react-router-dom";

function CheckInEdit(){
    return(
        <div>
            <div className="section">
                <div className="container-fluid formcontent">
                    {/* ----- Heading ------ */}
                    <div className='sticky-div'>
                        <h3 className="header"> Check In <span className="dark-bg">Edit</span></h3>
                    </div>

                     {/* ----- Form   ------ */}
                     
                     <div className='checkdetails light-violet-bg'>
                        <div className="row p-4">
                            <div className="col-md-2">
                                {/* <div className="col-sm-12"> */}
                                    <div className="form-group mb-3">
                                        <label className="text-left" htmlFor="arrival">Arrival:</label>
                                        <input type="datetime-local" className="form-control arrival" name="arrival" id="arrival" />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-left" htmlFor="departure">Departure:</label>
                                        <input type="datetime-local" className="form-control departure" name="departure" id="departure" />
                                    </div>
                                {/* </div> */}
                            </div>

                            
                            <div className="col-md-2 vl">
                                <div className="form-group mb-3">
                                    <label className="text-left" htmlFor="source">Source:</label>
                                    <Form.Select aria-label="Default select example">
                                            <option>FIT/TA/CORPORATE</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            </Form.Select>
                                 
                                </div>

                                <div className="form-group">
                                    <label className="text-left" htmlFor="pwd">Name</label>
                                    <input type="password" className="form-control" placeholder="Name" id="pwd" />
                                </div>
                            </div>

                            <div className="col-md-4 vl">
                                <div className="row mb-4">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label className="text-left" htmlFor="pwd">Room</label>
                                            <input type="password" className="form-control" placeholder="123" id="room_no" />
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <br/>
                                    <button type="button" className="btn btn-warning w-100 mt-1">Transfer</button>

                                    </div>
                                </div>

                                 <div className="row">
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label  htmlFor="adult">Adult:</label>
                                            <select className="form-control" id="adult">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label  htmlFor="child">Child:</label>
                                            <select className="form-control" id="child">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label htmlFor="infant">Infant:</label>
                                            <select className="form-control" id="infant">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                    <label  htmlFor="extrabed">Extra Bed:</label>
                                    <div className="form-group">
                                            {/* <div className="bg-success" style={{height : 30 , width : 30}}></div> */}
                                            <i class="bi bi-check-circle-fill extra-bed-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="row mt-4 mb-2 white-bg">
                                    <div className="col-md-6 vl">
                                        <h5 className='mt-1'>Balance</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <h4>₹ 12,500</h4>
                                    </div>  
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <button className="btn btn-success w-100 m-1">Deposit</button>   
                                        <button className="btn btn-info w-100 m-1">Bill Preview</button>   
                                        <button className="btn btn-primary w-100 m-1">Sharer</button>   
                                    </div>
                                    <div className="col-sm-6">
                                        <button className="btn btn-warning w-100 m-1">Deposit</button>   
                                        <button className="btn btn-secondary w-100 m-1">Bill Preview</button>   
                                        <button className="btn btn-danger w-100 m-1">Sharer</button>  
                                    </div>
                                </div>
                               
                            </div>

                         </div>
                        </div>


                     {/* ----- Room Availability ------ */}
                     <div className="availability_check_bg my-4">
                     <h5 className='left mt-2 ps-3 grey'>Check Availability</h5>
                     <RoomAvailability/>
                     </div>  

                     {/* ----- Room Rate Type Discount ------ */}
                     <div className="availability_check_bg my-4">
                        <h5 className='left mt-2 ps-3 grey'>Room Details</h5>
                     <RoomRateTypeDiscount/>
                     </div>  



                     <CheckInEditDetails/>
                

                     {/* ----- Buttons ------ */}
                    
                                
                                
                                <div className="row mb-3">
                                    <div className='col-12 d-flex justify-content-end'>
                                        <button type="button" className="btn btn-secondary me-2 px-3" > Back</button>
                                        <button type="button" className="btn btn-success px-3" > Update</button>
                                        </div>
                                </div>
                                
                                
                  

                    

                </div>
            </div>
        </div>
    );
}
 
export default CheckInEdit;