import React from 'react';
import Form from 'react-bootstrap/Form';

function Pickup() {
    return(
        <>
                <div className="row">
                                    <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label className="text-left">Location</label>
                                           
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">Airport</option>
                                                    <option value="2">Railway Station</option>
                                                    <option value="2">Other</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-md-3">
                                    <div className="form-group">
                                        <label className="text-left" htmlFor="departure">Date & Time</label>
                                        <input type="datetime-local" className="form-control departure" name="departure" id="pickup-date" />
                                    </div>
                                    </div>
                                    {/* <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <label className="text-left">Phone Number</label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div> */}
                                    <div className="col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <label className="text-left">Instructions</label>
                                            <textarea className="form-control" style={{ height: 30, }} placeholder=""></textarea>
                                        </div>
                                    </div>
                                </div>

        </>
    );
}
 
export default Pickup;