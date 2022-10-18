import React from 'react';
import RoomAvailability from './RoomAvailability';
import RoomRateTypeDiscount from './RoomRateTypeDiscount';
import './CheckInEdit.css';
import { Link } from "react-router-dom";

function CheckInEdit(){
    return(
        <div>
            <div className="section">
                <div className="container-fluid formcontent">
                    {/* ----- Heading ------ */}
                    <div>
                        <h5 className="header"> CHECKIN [EDIT] </h5>
                    </div>

                     {/* ----- Form   ------ */}
                    <div className="bgblue p-2">
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="text-left" htmlFor="arrival">Arrival:</label>
                                        <input type="datetime-local" className="form-control arrival" name="arrival" id="arrival" />
                                    </div>
                                    <div className="form-group">
                                        <label className="text-left" htmlFor="departure">Departure:</label>
                                        <input type="datetime-local" className="form-control departure" name="departure" id="departure" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-sm-3">
                                <div className="form-group">
                                    <label className="text-left" htmlFor="source">Source:</label>
                                    <select className="form-control" id="source">
                                        <option>FIT/TA/CORPORATE</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label className="text-left" htmlFor="pwd">Password:</label>
                                    <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                                </div>
                            </div>

                            <div className="col-sm-3">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <label className="text-left" htmlFor="pwd">Password:</label>
                                            <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 pt-4">
                                            <button type="button" className="btn btn-warning">Transfer</button>
                                    </div>
                                </div>

                                 <div className="row">
                                    <div className="col-sm-2">
                                        <div className="form-group">
                                            <label className="text-left" htmlFor="adult">Adult:</label>
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
                                            <label className="text-left" htmlFor="child">Child:</label>
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
                                            <label className="text-left" htmlFor="infant">Infant:</label>
                                            <select className="form-control" id="infant">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 left">
                                    <label  htmlFor="extrabed"><p style={{fontSize :14}}>Extra Bed:</p></label>
                                    <div className="form-group">
                                            <div className="bg-success " style={{height : 30 , width : 30}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-3 left">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <h4>Balance</h4>
                                    </div>
                                    <div className="col-sm-6">
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
                     <RoomAvailability/>
                    

                     {/* ----- Room Rate Type Discount ------ */}
                     <RoomRateTypeDiscount/>
                
                     <div >
                            <h5 className="roomheader mb-0">
                               <Link to="/checkInEdit" className="nlink"> GUEST DETAILS</Link>
                               <Link to="/checkInOtherDetails" className="nlink"> OTHER DETAILS</Link>
                            </h5>
                        
                                <div>
                                <div className="row colpadding left">
                                    <div className="col-sm-3">
                                        <div className="form-group ">
                                            <label for="title">Title:</label>
                                            <select className="form-control" id="title">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>

                                     <div className="col-sm-3">
                                        <div className="form-group ">
                                                <label for="fname">First Name:</label>
                                                <input type="text" className="form-control" placeholder="Enter First Name" id="fname" />
                                            </div>
                                     </div>

                                      <div className="col-sm-3">
                                        <div className="form-group ">
                                                <label for="lname">Last Name:</label>
                                                <input type="text" className="form-control" placeholder="Enter Last Name" id="lname" />
                                            </div>
                                     </div>

                                     <div className="col-sm-3">
                                        <div className="form-group ">
                                            <label for="sel1">Gender:</label>
                                            <select className="form-control" id="sel1">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="row colpadding left">
                                    <div className="col-sm-6">
                                        <div className="form-group ">
                                                <label for="address">Address:</label>
                                                <input type="text" className="form-control" placeholder="Enter Address" id="address" />
                                            </div>
                                     </div>

                                    <div className="col-sm-6">
                                        <div className="form-group ">
                                                <label for="emailaddress">Email Address:</label>
                                                <input type="text" className="form-control" placeholder="Enter Email Address" id="emailaddress" />
                                            </div>
                                     </div>
                                    </div>
                                    <div className="row colpadding left">
                                    <div className="col-sm-3">
                                        <div className="form-group ">
                                            <label for="country">Country:</label>
                                            <select className="form-control" id="country">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group ">
                                            <label for="state">State:</label>
                                            <select className="form-control" id="state">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group ">
                                            <label for="zone">Zone:</label>
                                            <select className="form-control" id="zone">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>

                                     <div className="col-sm-3">
                                        <div className="form-group ">
                                                <label for="phone">Phone:</label>
                                                <input type="text" className="form-control" placeholder="Enter Phone" id="phone" />
                                            </div>
                                     </div>

                                    </div>
                                </div>

                            </div>
                            

                              <div >
                                    <h5 className="roomheader">
                                       MISC.DETAILS
                                    </h5>

                                    <div >
                                        <div className="row colpadding left">
                                            <div className="col-sm-2">
                                                <div className="form-group ">
                                                        <label for="adults">Adults:</label>
                                                        <input type="text" className="form-control" placeholder="Enter Adults" id="adults" />
                                                </div>
                                            </div>
                                             <div className="col-sm-2">
                                                <div className="form-group ">
                                                        <label for="children">Children:</label>
                                                        <input type="text" className="form-control" placeholder="Enter Children" id="children" />
                                                </div>
                                            </div>
                                             <div className="col-sm-2">
                                                <div className="form-group ">
                                                        <label for="infants">Infants:</label>
                                                        <input type="text" className="form-control" placeholder="Enter Infants" id="infants" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group ">
                                                        <label for="remarks">Remarks:</label>
                                                        <input type="text" className="form-control" placeholder="Enter Remarks" id="remarks" />
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="form-group ">
                                                        <label for="gst">GST#:</label>
                                                        <input type="text" className="form-control" placeholder="Enter GST" id="gst" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>



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