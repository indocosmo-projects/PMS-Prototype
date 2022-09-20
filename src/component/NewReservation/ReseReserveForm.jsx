import React from 'react';
import '../../style.css';
import './NewReservation.css';

class ReseReserveForm extends React.Component {

    render() {
        return (
            <div>
                <ul className="ulistmargin">
                    <div>
                        <h4 className="label"> RESERVED BY </h4>
                    </div>
                    <div className="border-bottom">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="inputfieldpadding">
                                    <label className="text-left">Title</label>
                                    <select className="form-control m-bot15">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="inputfieldpadding">
                                    <label className="text-left">First Name</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="inputfieldpadding">
                                    <label className="text-left">Last Name</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="inputfieldpadding">
                                    <label className="text-left">Address</label>
                                    <textarea className="form-control" style={{ height: 60, }} placeholder=""></textarea>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="inputfieldpadding">
                                    <label className="text-left">Gender</label>
                                    <select className="form-control m-bot15">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="inputfieldpadding">
                                    <label className="text-left">E-mail</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="inputfieldpadding">
                                    <label className="text-left">Phone</label>
                                    <input type="text" className="form-control" placeholder="" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="inputfieldpadding">
                                    <label className="text-left">Country</label>
                                    <select className="form-control m-bot15">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="inputfieldpadding">
                                    <label className="text-left">State</label>
                                    <select className="form-control m-bot15">
                                        <option>Option 1</option>
                                        <option>Option 2</option>
                                        <option>Option 3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="inputfieldpadding">
                                    <label className="text-left">Zone</label>
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
                            <h4 className="label"> COMMENTS </h4>
                        </div>
                        <div className="column">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div  className="inputfieldpadding">
                                        <label className="text-left">Special Instructions/Comments</label>
                                        <input type="text" className="form-control" placeholder="" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="inputfieldpadding">
                                        <label className="text-left">Show Discounts</label>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control shw_dsct_lft" value="GENERAL" />
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control shw_dsct_rgt" value="'100 RS" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                {/*
                            <div className="row" >
                                <div className="col-sm-6"></div>
                                <div className="col-sm-6">
                                    <button type="button" className="btn btn-success btnflot w-100" > Submit</button>
                                </div>
                            </div>

                */}
                        </div>

                    </div>
                </div>
                 </ul>

            </div>

        );
    }
}

export default ReseReserveForm;