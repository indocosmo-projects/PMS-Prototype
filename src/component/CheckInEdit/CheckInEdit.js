import React from 'react';
import { Link } from "react-router-dom";
// import RoomAvailability from '../Common/RoomAvailability';
import RoomRateTypeDiscount from '../RoomsSelect/RoomRateTypeDiscount';
import './CheckInEdit.css';
import CheckInEditDetails from './CheckInEditDetails';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CheckInEditBilling from './CheckInEditBilling';
import ReservedBy from '../NewReservation/ReservedBy';


const animatedComponents = makeAnimated();


function CheckInEdit(){
    const options = [
        {value: "101", label:"FLR 1, ROOM 101"},
        {value: "202", label:"FLR 2, ROOM 202"},
        {value: "303", label:"FLR 3, ROOM 303"},
        {value: "304", label:"FLR 3, ROOM 303"},
        {value: "305", label:"FLR 3, ROOM 303"},
        {value: "305", label:"FLR 3, ROOM 303"},
    ];
    return(
                <div className="container-fluid py-0 h-100 mb-3">
                    {/* ----- Heading ------ */}
                    <div className='sticky-div d-flex justify-content-between pb-1'>
                        <h3 className="header">Check In<span className="dark-bg ms-2"><i class="bi bi-pencil-square me-1"></i>Edit</span></h3>
                        <Link to="/reception"><Button variant="outline-secondary" size="sm"><i class="bi bi-arrow-left me-2"></i>Back</Button></Link>
                    </div>



                    {/* <Accordion className="my-4">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='availability-accordion'><h5 className='pt-1'><i class="bi bi-search mx-1"></i>Check Availability</h5></Accordion.Header>
                                <Accordion.Body className='light-violet-bg'>

                                <RoomAvailability/>

                                </Accordion.Body>
                            </Accordion.Item>
                            </Accordion> */}


                     {/* ----- Form   ------ */}
                     
                     <div className='checkdetails light-violet-bg'>
                        <div className="row px-2 pb-2">
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                        <div className="form-group mb-3">
                                            <label className="text-left" htmlFor="arrival">Arrival<b className='text-danger'>*</b></label>
                                            <input type="datetime-local" className="form-control arrival" name="arrival" id="arrival" />
                                        </div>
                                    
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                        <div className="form-group">
                                            <label className="text-left" htmlFor="departure">Departure<b className='text-danger'>*</b></label>
                                            <input type="datetime-local" className="form-control departure" name="departure" id="departure" />
                                        </div>
                            </div>
                            
                            <div className="col-xl-2 col-md-4 col-sm-6">
                                <div className="form-group mb-3">
                                    <label className="text-left" htmlFor="source">Source<b className='text-danger'>*</b></label>
                                    <Form.Select aria-label="Default select example">
                                            <option>FIT</option>
                                            <option value="1">TA</option>
                                            <option value="2">CORPORATE</option>
                                            </Form.Select>
                                 
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="form-group">
                                        <label className="text-left" htmlFor="pwd">TA/Company<b className='text-danger'>*</b></label>
                                        <input type="password" className="form-control" placeholder="Name" id="pwd" />
                                    </div>

                             </div>

                             <div className="col-xl-3 col-md-4 col-sm-6">
                                    <div className="form-group">
                                        <label className="text-left" htmlFor="pwd">GST<b className='text-danger'>*</b></label>
                                        <input type="password" className="form-control" placeholder="Name" id="pwd" />
                                    </div>

                             </div>

                         </div>
                        </div>


                     {/* ----- Room Availability ------ */}
                     {/* <div className="availability_check_bg my-4">
                     <h5 className='left mt-2 ps-3 grey'>Check Availability</h5>
                     <hr className='gray'/>
                     <RoomAvailability/>
                     </div>   */}


                     
                     {/* <Accordion className="my-4" defaultActiveKey="0" alwaysOpen> */}
                     <Accordion className="my-4">

                            <Accordion.Item eventKey="1">
                                <Accordion.Header><h6>Room Details</h6><i class="bi bi-check-circle-fill pe-3 accordion-header-icon-green"></i></Accordion.Header>
                                <Accordion.Body className='light-violet-bg p-0'>

                                <RoomRateTypeDiscount/>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header><h6>Reserved By</h6><i class="bi bi-check-circle-fill pe-3 accordion-header-icon-green"></i></Accordion.Header>
                                <Accordion.Body className='light-violet-bg p-2'>

                                <ReservedBy />

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="3">
                                <Accordion.Header><h6>Guest Details</h6><i class="bi bi-check-circle-fill pe-3 accordion-header-icon-green"></i></Accordion.Header>
                                <Accordion.Body className='text-center'>

                                <Table className='overflow-reservefor' responsive>
                                <thead>
                                    <tr>
                                    <th>No.</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Gender</th>
                                    <th>Country</th>
                                    <th>Room</th>
                                    <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    {/* {Array.from({ length: 5 }).map((_, index) => (
                                        <td key={index}>Table cell {index} </td>
                                    ))} */}
                                    <td>Tom</td>
                                    <td>tom@mail.com</td>
                                    <td>917786676757</td>
                                    <td>Male</td>
                                    <td>India</td>
                                    <td><Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isClearable
                                            options={options}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            menuPlacement="auto"
                                            menuPortalTarget={document.body}
                                            menuPosition={'fixed'}
                                            /></td>
                                    <td><button className='btn btn-outline-secondary me-2'><i className="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger'><i className="bi bi-trash3"></i></button></td>
                                    </tr>
                                    <tr>
                                    <td>2</td>
                                    {/* {Array.from({ length: 5 }).map((_, index) => (
                                        <td key={index}>Table cell {index}</td>
                                    ))} */}
                                    <td>Jack</td>
                                    <td>jack@mail.com</td>
                                    <td>918787867554</td>
                                    <td>Male</td>
                                    <td>India</td>
                                    <td><Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            isClearable
                                            options={options}
                                            className="basic-single"
                                            classNamePrefix="select"
                                            menuPlacement="auto"
                                            menuPortalTarget={document.body}
                                            menuPosition={'fixed'}
                                            /></td>
                                    <td><button className='btn btn-outline-secondary me-2'><i className="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger'><i className="bi bi-trash3"></i></button></td>
                                    </tr>
                                    <tr>
                                    <td>3</td>
                                    {/* {Array.from({ length: 5 }).map((_, index) => (
                                        <td key={index}>Table cell {index}</td>
                                    ))} */}
                                    <td>Pam</td>
                                    <td>pam@mail.com</td>
                                    <td>912544678907</td>
                                    <td>Female</td>
                                    <td>India</td>
                                    <td><Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            options={options}
                                            isClearable
                                            className="basic-single"
                                            classNamePrefix="select"
                                            menuPlacement="auto"
                                            menuPortalTarget={document.body}
                                            menuPosition={'fixed'}
                                            /></td>
                                    <td><button className='btn btn-outline-secondary me-2'><i className="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger'><i className="bi bi-trash3"></i></button></td>
                                    </tr>
                                </tbody>
                                
                            </Table>

                                <CheckInEditDetails/>

                                {/* <div className="row">
                                    <div className='col-12 d-flex justify-content-center'>
                                        <button type="button" className="btn btn-primary px-4" ><i class="bi bi-plus-circle me-2"></i>Add Guest</button>
                                    </div>
                                </div> */}

                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="4">
                                <Accordion.Header><h6>Billing Details</h6><i class="bi bi-exclamation-circle-fill pe-3 accordion-header-icon-red"></i></Accordion.Header>
                                <Accordion.Body className='p-0'>

                                <CheckInEditBilling/>

                                </Accordion.Body>
                            </Accordion.Item>
                    

                    </Accordion>


                     {/* ----- Billing ------ */}

                     {/* <div className="availability_check_bg my-4">
                     <h5 className='left mt-2 ps-3 grey'>Billing Details</h5>
                     <hr className='gray'/>
                     <CheckInEditBilling/>
                     </div>  
                     */}
                                
                                
                                <div className="row">
                                    <div className='col-12 d-flex justify-content-between  mb-3'>
                                                <button type="button" className="btn btn-danger me-2 px-3" ><i class="bi bi-x-lg me-2"></i>Cancel</button>
                                            <div>
                                                <button className="btn btn-outline-secondary me-3"><i className="bi bi-download me-2"></i>Download</button>
                                                <button type="button" className="btn btn-success px-3" ><i class="bi bi-check-lg me-2"></i>Update Check-in</button>
                                            </div>
                                        </div>
                                </div>
                                
                                

                </div>
    );
}
 
export default CheckInEdit;