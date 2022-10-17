import React from 'react';
import RoomAvailability from './RoomAvailability';
import RoomRateTypeDiscount from './RoomRateTypeDiscount';
import './CheckInEdit.css';
import { Link } from "react-router-dom";

function CheckInEditOtherDetails() {
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
                                <div class="form-group">
                                    <label className="text-left" htmlFor="source">Source:</label>
                                    <select class="form-control" id="source">
                                        <option>FIT/TA/CORPORATE</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label className="text-left" htmlFor="pwd">Password:</label>
                                    <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
                                </div>
                            </div>

                            <div className="col-sm-3">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div class="form-group">
                                            <label className="text-left" htmlFor="pwd">Password:</label>
                                            <input type="password" class="form-control" placeholder="Enter password" id="pwd" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 pt-4">
                                            <button type="button" className="btn btn-warning">Transfer</button>
                                    </div>
                                </div>

                                 <div className="row">
                                    <div className="col-sm-2">
                                        <div class="form-group">
                                            <label className="text-left" htmlFor="adult">Adult:</label>
                                            <select class="form-control" id="adult">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div class="form-group">
                                            <label className="text-left" htmlFor="child">Child:</label>
                                            <select class="form-control" id="child">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-2">
                                        <div class="form-group">
                                            <label className="text-left" htmlFor="infant">Infant:</label>
                                            <select class="form-control" id="infant">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 left">
                                    <label  htmlFor="extrabed"><p style={{fontSize :14}}>Extra Bed:</p></label>
                                    <div class="form-group">
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
                
                     <div>
                     <h5 className="roomheader mb-0">
                               <Link to="/checkInEdit" className="nlink"> GUEST DETAILS</Link>
                               <Link to="/checkInOtherDetails" className="nlink"> OTHER DETAILS</Link>
                            </h5>
                                        <div className="row colpadding left">
                                                <div className="col-sm-3">
                                                    <div class="form-group ">
                                                    <label for="adults">Adults:</label>
                                                    <select class="form-control" id="adults">
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div class="form-group ">
                                                            <label for="passportnumber">Passport Number:</label>
                                                            <input type="text" class="form-control" placeholder="Enter Passport Number" id="passportnumber" />
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div class="form-group ">
                                                            <label for="issueon">Issued On:</label>
                                                            <input type="text" class="form-control" placeholder="Enter Issued On" id="issueon" />
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div class="form-group ">
                                                            <label for="expon">Expiry On:</label>
                                                            <input type="text" class="form-control" placeholder="Enter Expiry Date" id="expon" />
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                            
                            <div className="row">
                            <div className="col-sm-6">
                            <div>
                            <div className="col-sm-12" style={{paddingTop : 5}}>
                                <div>
                                    <h4 className='text-start label'> COMMENTS </h4>
                                </div>
                                <div className="column">
                                    <div className="row">
                                        <div className="col-sm-12">
                                             <div  className="inputfieldpadding"> 
                                                <label className="text-left">Special Instructions/Comments</label>
                                                <input type="text" className="form-control" placeholder="" />
                                             </div> 
                                        </div>
                                    </div>
                                    
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <label className="text-left">Apply Discount</label>
                                                        <input type="text" className="form-control shw_dsct_lft" defaultValue="GENERAL" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="text-left">Discount Amount</label>
                                                        <input type="text" className="form-control shw_dsct_rgt" defaultValue="'100 RS" />
                                                    </div>
                                                </div>
                                                
                                 
                        
                                </div>

                            </div>
                        </div>
                            </div>

                            <div className="col-sm-6">
                              <div className="col-sm-12 " style={{paddingTop : 4}}>
                                        <div className="col-sm-12 ">
                                            <h4 className="label">RESERVED FOR </h4>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="row ">
                                                    <div className="col-sm-4 ">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left" htmlFor="arrivaldate">Date :</label>
                                                            <input type="datetime-local" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left" htmlFor="arrivaldate">Date :</label>
                                                            <input type="datetime-local" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Location</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-12" >
                                                <div className="row">

                                                    <div className="col-sm-4">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Seats</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Remarks</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>


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
 
export default CheckInEditOtherDetails;
