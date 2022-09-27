import React, { useState } from 'react';
import '../../style.css';
import './NewReservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import RoomAvailability from './RoomAvailability';
import RoomRateTypeDiscount from './RoomRateTypeDiscount';
import ReservedBy from './ReservedBy';
import ReservedFor from './ReservedFor';




function NewReservation() {

   
    return(
        <div>
            <div className="section">
                <div className="container-fluid formcontent">
                    {/* ----- Heading ------ */}
                    <div>
                        <h5 className="header"> New Reservation </h5>
                    </div>

                     {/* ----- Form   ------ */}
                    <div className="">
                        <form action="#">
                            <div className="row ">
                                <div className="col-sm ">
                                    <div className="inputfieldpadding">
                                        <label className="text-left" htmlFor="reseNumber">Reservation Number :</label>
                                            <input type="number" className="form-control" id="reseNumber" defaultValue="100" name="reseNumber" disabled />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="inputfieldpadding">
                                        <label className="text-left" htmlFor="arrivaldate">Date :</label>
                                            <input type="date" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="inputfieldpadding">
                                        <label className="text-left" htmlFor="departdate">By :</label>
                                            <input type="date" className="form-control" id="departdate" placeholder="Enter Depart Date" name="departdate" />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div  className="inputfieldpadding">
                                        <label className="text-left" htmlFor="email">Source :</label>
                                        <select className="form-select">
                                            <option>FIT/TA/CORPORATE</option>
                                            <option>FIT/TA/CORPORATE</option>
                                            <option>FIT/TA/CORPORATE</option>
                                            <option>FIT/TA/CORPORATE</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div  className="inputfieldpadding">
                                        <label className="text-left" htmlFor="email">TA/Company Name : </label>
                                        <select className="form-select">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div  className="inputfieldpadding">
                                        <label className="text-left" htmlFor="email">GST :</label>
                                        <select className="form-select">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>


                     {/* ----- Room Availability ------ */}
                     <RoomAvailability/>
                    

                     {/* ----- Room Rate Type Discount ------ */}
                     <RoomRateTypeDiscount/>
                   

                   
                     
                        <div className="row formxs mt-1 pb-5" >
                            
                            {/* ----- Room Reserved By  ------ */}
                            <ReservedBy />
                           
                            {/* -------- Reserved For----------- */}
                            <ReservedFor />  
                        </div>
                    
                    
               
                     {/* ----- Buttons ------ */}
                     <div className="row " >
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                <div className="row mb-3">
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-secondary btnflot w-100" > Back</button>
                                    </div>
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-success btnflot w-100" > Update</button>
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-3"></div>
                    </div>

                    

                </div>
            </div>
        </div>
    );
}
 
export default NewReservation; 