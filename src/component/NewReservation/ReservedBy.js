import React from 'react';
import Form from 'react-bootstrap/Form';

function ReservedBy() {
    return(
        <div className="col-12 py-2" >
                            <div className="border-bottom">
                                <div className="row">
                                    <div className="col-sm-6 col-md-3">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">First Name<b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Last Name<b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Phone Number<b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">E-mail</label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                   
                                    <div className="col-sm-6 col-md-2">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Gender</label>
                                        
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 col-md-3">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Country</label>
                                           
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">India</option>
                                                    <option value="2">Japan</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">State</label>
                                           
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">State 1</option>
                                                    <option value="2">State 2</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-4">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Address</label>
                                            <textarea className="form-control" style={{ height: 60, }} placeholder=""></textarea>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                                        
                                    <div className="row">
                                                    <h4 className='text-start'> Comments </h4>
                                                    <div className="col-sm-12">
                                                        <label className="text-left">Special Instructions/Comments</label>
                                                        <input type="text" className="form-control" placeholder="" />
                                                    </div>
                                                    
                                                    <div className="col-sm-6">
                                                        <label className="text-left">Apply Discount</label>
                                                        <Form.Select aria-label="Default select example">
                                                                <option>Select</option>
                                                                <option value="1">GENERAL</option>
                                                                <option value="2">DISCOUNT10</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="text-left">Discount Amount</label>
                                                        <input type="text" className="form-control shw_dsct_rgt" defaultValue="₹ 100" disabled/>
                                                    </div>
                                        </div>
                                                
                            </div>
    );
}
 
export default ReservedBy;