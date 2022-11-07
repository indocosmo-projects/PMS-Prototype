import React from 'react';
import './NewRequest.css';
import Form from 'react-bootstrap/Form';

function NewRequest() {
    return(
        <div>
            <div className="section">
                <div className="container-fluid formcontent">
                    <div>
                        <h5 className="header"> New Requests </h5>
                    </div>
                    <div className="row left bg-secondary text-white p-3"> 
                        <div className="col-sm-3"><h5>Room Number * </h5></div>
                        <div className="col-sm-3">
                            <Form.Select aria-label="Default select example">
                                <option value="0">SELECT</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row left p-3"> 
                                <div className="col-sm-3"><h6>Facility * </h6></div>
                                <div className="col-sm-6">
                                    <Form.Select aria-label="Default select example">
                                        <option value="0">SELECT</option>
                                        <option value="1">PICK UP</option>
                                        <option value="2">TREATMENT</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <div className="row left  p-3"> 
                                <div className="col-sm-3"><h6>Request Type   </h6></div>
                                <div className="col-sm-6">
                                    <Form.Select aria-label="Default select example">
                                        <option value="1">ON DATE</option>
                                        <option value="2">DAILY</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                           
                     
                        <div className="col-sm-6">
                            <div className="row left p-3"> 
                                <div className="col-sm-3"><h6>Facility Provider * </h6></div>
                                <div className="col-sm-6">
                                    <Form.Select aria-label="Default select example">
                                        <option value="0">SELECT</option>
                                        <option value="1">PICK UP TAXI</option>
                                        <option value="2">AYURVEDA</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <div className="row left  p-3"> 
                                <div className="col-sm-6">
                                <div class="form-group">
                                        <input type="datetime-local" class="form-control" id="time" defaultValue="08:00" />
                                    </div></div>
                                <div className="col-sm-6">
                                <div class="form-group">
                                        <input type="datetime-local" class="form-control" id="time" defaultValue="08:00" />
                                    </div>
                                </div>
                            </div>
                        </div>

                       
                   
                                        <div className="col-sm-3"><h6>Request Time   </h6></div>
                                        <div className="col-sm-6">
                                            <div class="form-group">
                                                <input type="time" class="form-control" id="time" defaultValue="08:00" />
                                            </div>
                                        </div>
                                   

                                    <div className="col-sm-6">
                                        <div className="col-sm-3"><h6>Request Time   </h6></div>
                                            <div class="form-group">
                                                <input type="text" class="form-control" id="time" placeholder="Remark" />
                                            </div>
                                        </div>
                                    </div>

                      
                 

                </div>
            </div>
        </div>
    );
}
 
export default NewRequest;