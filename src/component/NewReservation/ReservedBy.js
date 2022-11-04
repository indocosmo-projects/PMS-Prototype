import React from 'react';
import Form from 'react-bootstrap/Form';

function ReservedBy() {
    return(
        <div className="col-12 grey-bg px-2 py-4" >
                <div>
                        {/* <ul> */}
                            <div>
                                {/* <h4> RESERVED BY </h4> */}
                            </div>
                            <div className="border-bottom ">
                                <div className="row my-3">
                                    <div className="col-sm-4">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Full Name <b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Phone Number <b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">E-mail <b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row my-3">
                                   
                                    <div className="col-sm-2">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Gender <b className='text-danger'>*</b></label>
                                            {/* <select className="form-control m-bot15 minimal">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select> */}
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Country <b className='text-danger'>*</b></label>
                                            {/* <select className="form-control m-bot15">
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select> */}
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">India</option>
                                                    <option value="2">Japan</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">State <b className='text-danger'>*</b></label>
                                            {/* <select className="form-control m-bot15">
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select> */}
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">State 1</option>
                                                    <option value="2">State 2</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Address</label>
                                            <textarea className="form-control" style={{ height: 60, }} placeholder=""></textarea>
                                        </div>
                                    </div>
                                 
                                </div>
                            </div>
                    

                        <div>
                            <div className="col-sm-12">
                                <div>
                                    <h4 className='text-start'> Comments </h4>
                                </div>
                                <div className="column">
                                    <div className="row my-3">
                                        <div className="col-sm-12">
                                                <label className="text-left">Special Instructions/Comments</label>
                                                <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    
                                                <div className="row my-3">
                                                    <div className="col-sm-6">
                                                        <label className="text-left">Apply Discount</label>
                                                        {/* <input type="text" className="form-control shw_dsct_lft" defaultValue="GENERAL" /> */}
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

                            </div>
                        </div>
                        {/* </ul> */}

                    </div>


        </div>
    );
}
 
export default ReservedBy;