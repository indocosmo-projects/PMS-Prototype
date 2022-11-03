import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
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
                        <h3 className="header"> New Reservation </h3>
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
                                        <label className="text-left" htmlFor="departdate">Reserved By :</label>
                                            <input type="text" className="form-control" id="departdate" placeholder="Enter Reserved By" name="departdate" />
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
                     <div className="availability_check_bg my-4">
                        <h5 className='left mt-2 ps-3 grey'>Check Availability</h5>
                     <RoomAvailability/>
                     </div>  
                    

                     {/* ----- Room Rate Type Discount ------ */}
                     <div className="availability_check_bg my-4">
                        <h5 className='left mt-2 ps-3 grey'>Room Details</h5>
                     <RoomRateTypeDiscount/>
                     </div>  
                   

                     <Accordion className="my-4" defaultActiveKey="0" alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h5>Reserved By</h5></Accordion.Header>
                                <Accordion.Body>

                    {/* ----- Room Reserved By  ------ */}
                                <ReservedBy />

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h5>Reserved For</h5></Accordion.Header>
                                <Accordion.Body>
                                    
                    {/* -------- Reserved For----------- */}
                              <ReservedFor />  

                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                
                    
               
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
 
export default NewReservation; 