import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../../style.css';
import './NewReservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import RoomAvailability from '../Common/RoomAvailability';
import RoomRateTypeDiscount from './RoomRateTypeDiscount';
// import RoomsInputModal from './RoomsInputModal';
import ReservedBy from './ReservedBy';
import ReservedFor from './ReservedFor';
import Deposit from './Desposit';
import Pickup from './Pickup';
import CheckRooms from './CheckRooms';


function NewReservation() {

   
    return(
                <div className="container-fluid formcontent py-0 h-100">
                    {/* ----- Heading ------ */}
                    <div className='sticky-div d-flex justify-content-between'>
                        <h3 className="header"><i class="bi bi-calendar2-plus-fill me-2"></i>New Reservation</h3>
                        {/* <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='availability-accordion'><h6 className='pt-1'><i class="bi bi-search mx-1"></i>Check Availability</h6></Accordion.Header>
                                <Accordion.Body className='light-violet-bg'>

                                <RoomAvailability/>

                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion> */}
                            <CheckRooms />
                    </div>


                        
                     {/* ----- Form   ------ */}
                        <form action="#">
                            <div className="row">
                                <div className="col-md-4 col-lg-2">
                                    <div className="inputfieldpadding">
                                        <label className="text-left" htmlFor="reseNumber">Reservation Number</label>
                                            <input type="number" className="form-control" id="reseNumber" defaultValue="100" name="reseNumber" disabled />
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-2">
                                    <div className="inputfieldpadding">
                                        <label className="text-left" htmlFor="arrivaldate">Current Date</label>
                                            <input type="date" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" disabled/>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-2">
                                    <div className="inputfieldpadding">
                                        <label className="text-left" htmlFor="departdate">Reserved By <b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" id="departdate" placeholder="Enter Reserved By" name="departdate" />
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-2">
                                    <div  className="inputfieldpadding">
                                        <label className="text-left" htmlFor="email">Source <b className='text-danger'>*</b></label>
                                        <select className="form-select">
                                            <option>FIT</option>
                                            <option>TA</option>
                                            <option>CORPORATE</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-2">
                                    <div  className="inputfieldpadding">
                                        <label className="text-left" htmlFor="email">TA/Company Name <b className='text-danger'>*</b></label>
                                            <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue=""/>

                                    </div>
                                </div>
                                <div className="col-md-4 col-lg-2">
                                    <div  className="inputfieldpadding">
                                        <label className="text-left" htmlFor="email">GST<b className='text-danger'>*</b></label>
                                        <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue=""/>
                                    </div>
                                </div>
                            </div>
                        </form>


                    
                    

                     {/* ----- Room Rate Type Discount ------ */}
                     {/* <div className="availability_check_bg my-4">
                        <h5 className='left mt-2 ps-3 grey'>Room Details</h5>
                        <hr className='gray'/>
                     <RoomRateTypeDiscount/>
                     </div>   */}
                   

                     {/* <Accordion className="my-4" defaultActiveKey="0" alwaysOpen> */}
                     <Accordion className="my-1">
                                <Accordion.Item eventKey="0">
                                <Accordion.Header><h6 className='me-2'>Room Details</h6><i class="bi bi-check-circle-fill pe-3 accordion-header-icon-green"></i></Accordion.Header>
                                <Accordion.Body className='light-violet-bg'>

                    {/* ----- Room Reserved By  ------ */}
                                <RoomRateTypeDiscount/>

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h6 className='me-2'>Reserved By</h6><i class="bi bi-check-circle-fill pe-3 accordion-header-icon-green"></i></Accordion.Header>
                                <Accordion.Body className='light-violet-bg'>

                    {/* ----- Room Reserved By  ------ */}
                                <ReservedBy />

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header><h6  className='me-2'>Reserved For</h6><i class="bi bi-exclamation-circle-fill pe-3 accordion-header-icon-red"></i></Accordion.Header>
                                <Accordion.Body className='light-violet-bg'>
                                    
                    {/* -------- Reserved For----------- */}
                              <ReservedFor />  

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header><h6>Deposit Details</h6></Accordion.Header>
                                <Accordion.Body className='light-violet-bg'>
                                    
                    {/* -------- Reserved For----------- */}
                              <Deposit /> 

                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header><h6>Pick Up Details</h6></Accordion.Header>
                                <Accordion.Body className='light-violet-bg'>
                                    
                    {/* -------- Reserved For----------- */}
                              <Pickup />

                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                
                    
               
                     {/* ----- Buttons ------ */}
                    
                                
                                
                                <div className="row mb-1">
                                    <div className='col-12 d-flex justify-content-between mb-3'>
                                            <button type="button" className="btn btn-danger me-2 px-3" ><i class="bi bi-x-lg me-2"></i>Cancel</button>
                                            <div>
                                                <button className="btn btn-outline-secondary me-3"><i className="bi bi-download me-2"></i>Download</button>
                                                <button type="button" className="btn btn-success px-3" ><i class="bi bi-check-lg me-2"></i>Save</button>
                                            </div>
                                        </div>
                                </div>
                                
                </div>
    );
}
 
export default NewReservation; 