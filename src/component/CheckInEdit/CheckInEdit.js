import React from 'react';
import { Link } from "react-router-dom";
import RoomAvailability from './RoomAvailability';
import RoomRateTypeDiscount from './RoomRateTypeDiscount';
import './CheckInEdit.css';
import CheckInEditDetails from './CheckInEditDetails';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import CheckInEditBilling from './CheckInEditBilling';

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
        <div>
            <div className="section">
                <div className="container-fluid formcontent">
                    {/* ----- Heading ------ */}
                    <div className='sticky-div d-flex justify-content-between'>
                        <h3 className="header">Check In <span className="dark-bg"><i class="bi bi-pencil-square me-1"></i>Edit</span></h3>
                        <Link to="/reception"><Button variant="outline-secondary" size="sm"><i class="bi bi-arrow-left me-2"></i>Back</Button></Link>
                    </div>

                     {/* ----- Form   ------ */}
                     
                     <div className='checkdetails light-violet-bg'>
                        <div className="row p-4">
                            <div className="col-md-3">
                                        <div className="form-group mb-3">
                                            <label className="text-left" htmlFor="arrival">Arrival</label>
                                            <input type="datetime-local" className="form-control arrival" name="arrival" id="arrival" />
                                        </div>
                                    
                            </div>
                            <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="text-left" htmlFor="departure">Departure</label>
                                            <input type="datetime-local" className="form-control departure" name="departure" id="departure" />
                                        </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="form-group mb-3">
                                    <label className="text-left" htmlFor="source">Source</label>
                                    <Form.Select aria-label="Default select example">
                                            <option>FIT/TA/CORPORATE</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            </Form.Select>
                                 
                                </div>
 
                            </div>
                            <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="text-left" htmlFor="pwd">Name</label>
                                        <input type="password" className="form-control" placeholder="Name" id="pwd" />
                                    </div>

                             </div>


                            {/* <div className="col-md-4 vl">
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
                                            <i class="bi bi-check-circle-fill extra-bed-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="col-md-4">
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
                               
                            </div> */}

                         </div>
                        </div>


                     {/* ----- Room Availability ------ */}
                     <div className="availability_check_bg my-4">
                     <h5 className='left mt-2 ps-3 grey'>Check Availability</h5>
                     <hr className='gray'/>
                     <RoomAvailability/>
                     </div>  

                     {/* ----- Room Rate Type Discount ------ */}
                     <div className="availability_check_bg my-4">
                        <h5 className='left mt-2 ps-3 grey'>Room Details</h5>
                        <hr className='gray'/>
                     <RoomRateTypeDiscount/>
                     </div>  


                     
                     <Accordion className="my-4" defaultActiveKey="0" alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header><h5>Guest Details</h5></Accordion.Header>
                                <Accordion.Body>

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
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <td key={index}>Table cell {index} </td>
                                    ))}
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
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <td key={index}>Table cell {index}</td>
                                    ))}
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
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <td key={index}>Table cell {index}</td>
                                    ))}
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

                                <div className="row">
                    
                <div className='col-12 d-flex justify-content-center'>
                   
                        <button type="button" className="btn btn-primary px-4" ><i class="bi bi-plus-circle me-2"></i>Add Guest</button>
                        

                  </div>
                </div>

                                </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>


                     {/* ----- Billing ------ */}

                     <div className="availability_check_bg my-4">
                     <h5 className='left mt-2 ps-3 grey'>Billing Details</h5>
                     <hr className='gray'/>
                     <CheckInEditBilling/>
                     </div>  
                    
                                
                                
                                <div className="row mb-3">
                                    <div className='col-12 d-flex justify-content-between'>
                                                <button type="button" className="btn btn-danger me-2 px-3" ><i class="bi bi-x-lg me-2"></i>Cancel</button>
                                            <div>
                                                <button className="btn btn-outline-secondary me-3"><i className="bi bi-download me-2"></i>Download</button>
                                                <button type="button" className="btn btn-success px-3" ><i class="bi bi-check-lg me-2"></i>Update Check-in</button>
                                            </div>
                                        </div>
                                </div>
                                
                                
                  

                    

                </div>
            </div>
        </div>
    );
}
 
export default CheckInEdit;