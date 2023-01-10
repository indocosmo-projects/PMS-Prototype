import React from 'react';
import Form from 'react-bootstrap/Form';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

function ReservedBy() {
    return(
        <div className="col-12 py-2" >
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-6">
                                            <label>First Name<b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" placeholder="" />
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-6">
                                            <label>Last Name<b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" placeholder="" />
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-6">       
                                            <label>Phone Number<b className='text-danger'>*</b></label>
                                            <PhoneInput
                                            country={'in'}
                                            // value={this.state.phone}
                                            // onChange={phone => this.setState({ phone })}
                                            inputProps={{
                                                name: 'phone',
                                                required: true,
                                                autoFocus: true
                                              }}
                                            />
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-6">
                                            <label>Landline Phone</label>
                                            <input type="text" className="form-control" placeholder="" />
                                    </div>
                                </div>

                                <div className="row">
                                <div className="col-lg-3 col-sm-6 col-md-6 col-6 py-1">
                                            <label>E-mail</label>
                                            <input type="text" className="form-control" placeholder="" />
                                    </div>
                                    <div className="col-lg-2 col-sm-6 col-md-3 col-6 py-1">
                                            <label>Gender</label>
                                        
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                            </Form.Select>
                                    </div>

                                    <div className="col-lg-2 col-sm-6 col-md-3 col-6 py-1">
                                            <label>Country</label>
                                           
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">India</option>
                                                    <option value="2">Japan</option>
                                            </Form.Select>
                                    </div>

                                    <div className="col-lg-2 col-sm-6 col-md-3 col-6 py-1">
                                            <label>State</label>
                                           
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">State 1</option>
                                                    <option value="2">State 2</option>
                                            </Form.Select>
                                    </div>

                                    <div className="col-lg-3 col-sm-6 col-md-3 col-6 py-1">
                                            <label>PIN/ZIP</label>
                                            <input type="text" className="form-control" placeholder="" />
                                    </div>

                                    <div className="col-lg-12 col-sm-6 col-md6 py-1">
                                            <label>Address</label>
                                            <textarea className="form-control" style={{ height: 60, }} placeholder=""></textarea>
                                    </div>
                                 
                                </div>
                                        <hr className='gray'></hr>

                                    <div className="row">
                                                    <div className="col-sm-12">
                                                        <label>Special Instructions/Comments</label>
                                                        <textarea type="text" className="form-control" placeholder="" />
                                                    </div>
                                                    
                                                    {/* <div className="col-sm-6">
                                                        <label>Apply Discount</label>
                                                        <Form.Select aria-label="Default select example">
                                                                <option>Select</option>
                                                                <option value="1">GENERAL</option>
                                                                <option value="2">DISCOUNT10</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label>Discount Amount</label>
                                                        <input type="text" className="form-control shw_dsct_rgt" defaultValue="₹ 100" disabled/>
                                                    </div> */}
                                        </div>
                                                
                            </div>
    );
}
 
export default ReservedBy;