import React from 'react';

function ReservedBy() {
    return(
        <div className="col-12 grey-bg px-2 py-4" >
                <div>
                        {/* <ul> */}
                            <div>
                                {/* <h4> RESERVED BY </h4> */}
                            </div>
                            <div className="border-bottom ">
                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="inputfieldpadding">
                                            <label className="text-left"></label>
                                            <input type="text" className="form-control" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="inputfieldpadding">
                                            <label className="text-left"></label>
                                            <input type="text" className="form-control" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="inputfieldpadding">
                                            <label className="text-left"></label>
                                            <input type="text" className="form-control" placeholder="E-mail" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-4">
                                        <div className="inputfieldpadding">
                                            <label className="text-left"></label>
                                            <textarea className="form-control" style={{ height: 60, }} placeholder="Address"></textarea>
                                        </div>
                                    </div>
                                   
                                    <div className="col-sm-2">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Gender</label>
                                            <select className="form-control m-bot15">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-sm-3">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">Country</label>
                                            <select className="form-control m-bot15">
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="inputfieldpadding">
                                            <label className="text-left">State</label>
                                            <select className="form-control m-bot15">
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select>
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
                                    <div className="row">
                                        <div className="col-sm-12">
                                                <label className="text-left">Special Instructions/Comments</label>
                                                <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <label className="text-left">Apply Discount</label>
                                                        <input type="text" className="form-control shw_dsct_lft" defaultValue="GENERAL" />
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="text-left">Discount Amount</label>
                                                        <input type="text" className="form-control shw_dsct_rgt" defaultValue="₹ 100" />
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