import React from 'react';
import './CheckInEdit.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Alert from 'react-bootstrap/Alert';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

// import { Link } from "react-router-dom";

const animatedComponents = makeAnimated();


function CheckInEditDetails() {
    const options = [
        {value: "101", label:"FLR 1, ROOM 101"},
        {value: "202", label:"FLR 2, ROOM 202"},
        {value: "303", label:"FLR 3, ROOM 303"},
        {value: "304", label:"FLR 3, ROOM 303"},
        {value: "305", label:"FLR 3, ROOM 303"},
        {value: "305", label:"FLR 3, ROOM 303"},
    ];
    return(
            <div className="section checkdetails light-violet-bg">
                <div className="container-fluid light-violet-bg">
                
                     <h4 className='left mb-3'><i class="bi bi-person-fill me-2"></i>Guest 1</h4>

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
                                <Nav.Link eventKey="third" disabled>C-Form <i class="bi bi-caret-right-fill"></i></Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="four">Rooms <i class="bi bi-caret-right-fill"></i></Nav.Link>
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
                                     <div className="col-md-12 col-lg-2 mb-2 d-flex flex-column">
                                     <i class="bi bi-person-circle profile-img"></i>
                                     <Button variant="secondary"><i class="bi bi-upload me-2"></i>Upload Image</Button>

                                    </div>
                                    <div className='col-10'>
                                <div className="row mb-3">

                                     <div className="col-md-12 col-lg-4 mb-2">
                                        <div className="form-group">
                                                <label className="text-left">Name<b className='text-danger'>*</b></label>
                                                <input type="text" className="form-control" placeholder="" id="fname" />
                                            </div>
                                     </div>
                                     <div className="col-md-12 col-lg-4 mb-2">
                                        <div className="form-group ">
                                                <label className="text-left">Phone Number<b className='text-danger'>*</b></label>
                                                <input type="text" className="form-control" placeholder="" id="phone" />
                                            </div>
                                     </div>
                                     <div className="col-md-12 col-lg-4 mb-2">
                                        <div className="form-group ">
                                                <label className="text-left">E mail<b className='text-danger'>*</b></label>
                                                <input type="text" className="form-control" placeholder="" id="emailaddress" />
                                            </div>
                                     </div>
                                     </div>
                                     <div className="row mb-3">
                                    <div className="col-sm-12">
                                            <Alert variant="primary">
                                            <i class="bi bi-exclamation-circle"></i> <b>George</b> has already stayed with us <b>2</b> times before 
                                                <Alert.Link href="#"></Alert.Link>
                                                </Alert>
                                                </div>
                                    </div>

                                     </div>
                                    
                                    </div>
                                    


                                    <div className="row mb-3">

                                    <div className="col-sm-4">
                                    <label className="text-left">Gender<b className='text-danger'>*</b></label>
                                    <Form.Select aria-label="Default select example">
                                        <option>Select Gender</option>
                                        <option value="1">Male</option>
                                        <option value="2">Female</option>
                                        </Form.Select>

                                </div>
                                <div className="col-sm-4">
                                        <label className="text-left">Country<b className='text-danger'>*</b></label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select Country</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            </Form.Select>
                                        </div>

                                    <div className="col-sm-4">
                                        <label className="text-left">State<b className='text-danger'>*</b></label>
                                        <Form.Select aria-label="Default select example">
                                            <option>Select State</option>
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

                                    <div className="row mb-3">

                                    <div className="col-sm-12">
                                    <InputGroup className="pt-1 d-flex justify-content-end">
                                        <div className="pt-1 make-payer-bg">
                                        <Form.Check type='checkbox' id='default-checkbox' label='Make Guest as Payer' className='mt-1'/>
                                        </div>
                                        </InputGroup>
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

                            {/* <div className="row">
                               
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

                             </div> */}


                            </Tab.Pane>

                            <Tab.Pane eventKey="four">
                                <div className="row mt-4">
                                    <div className="col-lg-12">
                                    <p className='gray'>Select the Rooms assigned for this Guest<b className='text-danger'>*</b></p>
                                </div>
                                </div>
                                <div className="row d-flex justify-content-center">
                                <div className="col-lg-4">
                                        {/* <label className="text-left" htmlFor="arrivaldate">Select Room</label> */}
                                            <Select
                                            closeMenuOnSelect={false}
                                            components={animatedComponents}
                                            // defaultValue={}
                                            isMulti
                                            options={options}
                                            className="basic-multi-select"
                                            classNamePrefix="select"
                                            menuPlacement="auto"
                                            menuPortalTarget={document.body}
                                            menuPosition={'fixed'}
                                            />
                                </div>
                                </div>

                                                {/* <div className="row ">
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
                                                </div> */}

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
