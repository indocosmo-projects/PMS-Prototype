import React from 'react';
import { Link } from "react-router-dom";
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './CheckOut.css';
import CheckOutDetails from './CheckOutDetails';
import CheckOutDetailsTwoDis from './CheckOutDetailsTwoDis';
import CheckOutDetailsThreeDis from './CheckOutDetailsThreeDis';
import CheckOutBilling from './CheckOutBilling';
import CheckOutConfirm from './CheckOutConfirm';


function CheckOutGrp() {
        return(
            <div>
                <div className="section">
                    <div className="container-fluid formcontent">
                        {/* ----- Heading ------ */}
                        <div className='sticky-div d-flex justify-content-between'>
                            <h3 className="header"><i class="bi bi-dash-circle-fill me-2"></i>Check Out</h3>
                            <Link to="/reception"><Button variant="outline-secondary" size="sm"><i class="bi bi-arrow-left me-2"></i>Back</Button></Link>
                        </div>

                        {/* <div className='checkdetails light-violet-bg'>
                        <div className="row p-4">
                            <div className="col-md-3">
                                        <div className="form-group mb-3">
                                            <label className="text-left" htmlFor="arrival">Arrival</label>
                                            <input type="datetime-local" className="form-control arrival" name="arrival" id="arrival" disabled/>
                                        </div>
                                    
                            </div>
                            <div className="col-md-3">
                                        <div className="form-group">
                                            <label className="text-left" htmlFor="departure">Departure</label>
                                            <input type="datetime-local" className="form-control departure" name="departure" id="departure" disabled/>
                                        </div>
                            </div>
                            
                            <div className="col-md-3">
                                <div className="form-group mb-3">
                                    <label className="text-left" htmlFor="source">Source</label>
                                    <Form.Select aria-label="Default select example" disabled>
                                            <option>FIT/TA/CORPORATE</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            </Form.Select>
                                 
                                </div>
 
                            </div>
                            <div className="col-md-3">
                                    <div className="form-group">
                                        <label className="text-left" htmlFor="pwd">Name</label>
                                        <input type="password" className="form-control" placeholder="Name" id="pwd" disabled/>
                                    </div>

                             </div>
   

                         </div>
                        </div> */}

                            {/* ----- Billing ------ */}

                            <div className="availability_check_bg my-4">
                                    <h5 className='left mt-2 ps-3 grey'>Billing Details</h5>
                                    <hr className='gray'/>
                                <CheckOutBilling/>
                            </div>  

                            {/* ----- room/guest-checkout ------ */}
                            <div className="availability_check_bg my-4">
                                    <h5 className='left mt-2 ps-3 grey'>Room Details</h5>
                                    <hr className='gray'/>
                                    <div className='row'>
                                        <div className='col-md-6 col-lg-4'>
                                            <CheckOutDetails/>
                                        </div>
                                        <div className='col-md-6 col-lg-4'>
                                            <CheckOutDetailsTwoDis/>
                                        </div>
                                        <div className='col-md-6 col-lg-4'>
                                            <CheckOutDetailsThreeDis/>
                                        </div>
                                    </div>
                            </div>  

                            
                         {/* ----- checkout confirm ------ */}

                            <div className="availability_check_bg my-4">
                                    <h5 className='left mt-2 ps-3 grey'>Confirmation</h5>
                                    <hr className='gray'/>
                                <CheckOutConfirm/>
                            </div>  

                    </div>

                    

                </div>
            </div>
        );
}
 
export default CheckOutGrp;