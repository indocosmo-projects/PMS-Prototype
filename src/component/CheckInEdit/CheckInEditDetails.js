import React from 'react';
import './CheckInEdit.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
// import { Link } from "react-router-dom";

function CheckInEditDetails() {
    return(
            <div className="section checkdetails light-violet-bg">
                <div className="container-fluid light-violet-bg">
                
                     <h4 className='left mb-3'>Details</h4>

                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                            <Col md={2}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="first">Guest Details <i class="bi bi-caret-right-fill"></i></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second">ID Proofs <i class="bi bi-caret-right-fill"></i></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third">Discounts <i class="bi bi-caret-right-fill"></i></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="four">Reserved for <i class="bi bi-caret-right-fill"></i></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="five">Misc <i class="bi bi-caret-right-fill"></i></Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col md={10}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                
                                <div className="row mb-3">
                       
                                     <div className="col-md-12 col-lg-4 mb-2">
                                        <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name" id="fname" />
                                            </div>
                                     </div>
                                     <div className="col-md-12 col-lg-4 mb-2">
                                        <div className="form-group ">
                                                <input type="text" className="form-control" placeholder="Phone Number" id="phone" />
                                            </div>
                                     </div>
                                     <div className="col-md-12 col-lg-4 mb-2">
                                        <div className="form-group ">
                                                <input type="text" className="form-control" placeholder="Email Address" id="emailaddress" />
                                            </div>
                                     </div>
                                    
                                    </div>


                                    <div className="row mb-3">

                                    <div className="col-sm-4">
                                    
                                    <Form.Select aria-label="Default select example">
                                        <option>Select Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        </Form.Select>

                                </div>
                                <div className="col-sm-4">
                              
                                        <Form.Select aria-label="Default select example">
                                            <option>Country</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            </Form.Select>
                                        </div>

                                    <div className="col-sm-4">
                                       
                                        <Form.Select aria-label="Default select example">
                                            <option>State</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            </Form.Select>
                                    </div>

                                    </div>

                                    <div className="row mb-3">

                                    <div className="col-sm-12">
                                        <div className="form-group ">
                                                <textarea type="text" className="form-control" placeholder="Enter Address" id="address" />
                                            </div>
                                     </div>
                                    
                               

                                    </div>
                               


                        </Tab.Pane>
                        <Tab.Pane eventKey="second">

                                <div className="row mb-3">

                                     <div className="col-sm-2">
                                        <Form>
                                                {['checkbox'].map((type) => (
                                                    <div key={`default-${type}`} className='left'>
                                                    <Form.Check 
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`Passport`}
                                                    />

                                                    </div>
                                                ))}
                                        </Form>
                                            </div>


                                                <div className="col-sm-2">
                                                    <div className="form-group ">
                                                    {/* <label for="adults">Adults:</label> */}
                                                    <select className="form-control" id="adults">
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-4">
                                                    <div className="form-group ">
                                                            {/* <label for="passportnumber">Passport Number:</label> */}
                                                            <input type="text" className="form-control" placeholder="Passport Number" id="passportnumber" />
                                                    </div>
                                                </div>

                                                <div className="col-sm-2">
                                                    <div className="form-group ">
                                                            {/* <label for="issueon">Issued On:</label> */}
                                                            <input type="text" className="form-control" placeholder="Issued On" id="issueon" />
                                                    </div>
                                                </div>

                                                <div className="col-sm-2">
                                                    <div className="form-group ">
                                                            {/* <label for="expon">Expiry On:</label> */}
                                                            <input type="text" className="form-control" placeholder="Expiry Date" id="expon" />
                                                    </div>
                                                </div>

                                        </div>
                                        <div className="row mb-3">

                                     <div className="col-sm-2">
                                        <Form>
                                                {['checkbox'].map((type) => (
                                                    <div key={`default-${type}`} className='left'>
                                                    <Form.Check 
                                                        type={type}
                                                        id={`default-${type}`}
                                                        label={`PAN`}
                                                    />

                                                    </div>
                                                ))}
                                        </Form>
                                            </div>


                                                <div className="col-sm-2">
                                                    <div className="form-group ">
                                                    {/* <label for="adults">Adults:</label> */}
                                                    <select className="form-control" id="adults">
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-8">
                                                    <div className="form-group ">
                                                            {/* <label for="passportnumber">Passport Number:</label> */}
                                                            <input type="text" className="form-control" placeholder="PAN Number" id="passportnumber" />
                                                    </div>
                                                </div>  

                                        </div>
                               
                            </Tab.Pane>

                            <Tab.Pane eventKey="third">

                            <div className="row">
                               
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <label className="text-left">Available Discounts</label>
                                                        <Form.Select aria-label="Default select example">
                                                            <option>Select</option>
                                                            <option value="1">GENERAL</option>
                                                            <option value="2">HOTREL50</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <label className="text-left">Discount Amount</label>
                                                        <input type="text" className="form-control shw_dsct_rgt" defaultValue="100 RS" />
                                                    </div>
                                                </div>

                             </div>


                            </Tab.Pane>

                            <Tab.Pane eventKey="four">

                                                <div className="row ">
                                                    <div className="col-sm-3">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left" htmlFor="arrivaldate">Date :</label>
                                                            <input type="datetime-local" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left" htmlFor="arrivaldate">Date :</label>
                                                            <input type="datetime-local" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Location</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-3">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Seats</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Remarks</label>
                                                            <textarea type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>

                            </Tab.Pane>

                            <Tab.Pane eventKey="five">
                            
                                    <div className="row">
                                            <div className="col-sm-12">
                                                <div className="inputfieldpadding">
                                                    <label className="text-left">Comments</label>
                                                    <textarea type="text" className="form-control" placeholder="" />
                                                </div>
                                            </div>
                                    </div>                          

                            </Tab.Pane>

                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>

                            
                                
                </div>
            </div>
    );

}
 
export default CheckInEditDetails;
