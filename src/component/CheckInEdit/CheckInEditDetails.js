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
                                <Nav.Link eventKey="third" disabled className='bg-dissabled'>C-Form <i class="bi bi-caret-right-fill"></i></Nav.Link>
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
                                     <div className="col-lg-2 mb-2 d-flex flex-column">
                                        <div className='pro-img-bg'>
                                            <i class="bi bi-person-circle profile-img"></i>
                                            <Button variant="secondary" size="sm"><i class="bi bi-upload me-2"></i>Upload Image</Button>
                                        </div>
                                    </div>
                                    <div className='col-lg-10'>
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
                                            <i class="bi bi-exclamation-circle"></i> <b>Tom</b> has already stayed with us <b>2 Nights</b> before 
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
                                    <label className="text-left left mb-2">Sharers Details</label>
                                    <div className="col-lg-12 d-flex flex-row gap-3 sharer-bg">
                                            <div>
                                                <p className='f-light'>Number of Adults</p>
                                                <InputGroup className="mb-3 group-input-width">
                                                <Button variant="btn btn-secondary" id="button-addon2">
                                                <i className="bi bi-dash"></i>
                                                </Button>
                                                <Form.Control className='text-center'
                                                    placeholder="1"
                                                    aria-label="1"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <Button variant="btn btn-secondary" id="button-addon2">
                                                <i className="bi bi-plus-lg"></i>
                                                </Button>
                                                </InputGroup>
                                                </div>

                                                <div>
                                                <p className='f-light'>Number of Children</p>
                                                    <InputGroup className="mb-3 group-input-width">
                                                    <Button variant="btn btn-secondary" id="button-addon2">
                                                    <i className="bi bi-dash"></i>
                                                    </Button>
                                                    <Form.Control className='text-center'
                                                        placeholder="1"
                                                        aria-label="1"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <Button variant="btn btn-secondary" id="button-addon2">
                                                    <i className="bi bi-plus-lg"></i>
                                                    </Button>
                                                </InputGroup>
                                                </div>
                                                </div>

                                    </div>

                                    <div className="row">

                                    <div className="col-sm-12 mt-3">
                                    <InputGroup className="pt-1 d-flex justify-content-end">
                                        <div className="pt-1 make-payer-bg">
                                        <Form.Check type='checkbox' id='default-checkbox' label='Make Guest as Payer' className='mt-1'/>
                                        </div>
                                        </InputGroup>
                                        </div>
                                        </div>


                        </Tab.Pane>
                        <Tab.Pane eventKey="second">

                                <div className="row mb-3 left">

                                     <div className="col-md-2">
                                        <Form>
                                                
                                                    <div className='left'>
                                                    <Form.Check 
                                                        type="checkbox"
                                                        id="checkbox"
                                                        label="Passport"
                                                    />

                                                    </div>
                                              
                                        </Form>
                                            </div>
                                     <div className="col-md-10">

                                        <div className="row mb-3 left">

                                                        <div className="col-md-2">
                                                            <div className="form-group ">
                                                            <label for="adults">option</label>
                                                            <select className="form-control" id="options">
                                                                <option>option 1</option>
                                                                <option>option 2</option>
                                                                <option>option 3</option>
                                                            </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <div className="form-group ">
                                                                    <label for="passportnumber">Passport Number</label>
                                                                    <input type="text" className="form-control" placeholder="" id="passportnumber" />
                                                            </div>
                                                        </div>

                                                        <div className="col-md-3">
                                                            <div className="form-group ">
                                                                    <label for="issueon">Issued</label>
                                                                    {/* <input type="text" className="form-control" placeholder="Issued On" id="issueon" /> */}
                                                                    <input type="datetime-local" className="form-control" name="issued" id="issued"/>

                                                            </div>
                                                        </div>

                                                        <div className="col-md-3">
                                                            <div className="form-group ">
                                                                    <label for="expon">Expiry</label>
                                                                    {/* <input type="text" className="form-control" placeholder="Expiry Date" id="expon" /> */}
                                                                    <input type="datetime-local" className="form-control" name="expiry" id="expiry"/>

                                                            </div>
                                                        </div>

                                                </div>

                                            <div className="row mb-3 right">

                                            <div className="col-md-12">
                                            <Button variant="light me-3" size="sm"><i class="bi bi-eye-fill me-2"></i>View Passport</Button>
                                            <Button variant="secondary" size="sm"><i class="bi bi-upload me-2"></i>Upload Image</Button>
                                            </div>
                                            
                                            
                                            </div>




                                            </div>

                                        </div>


                                        
                                        <div className="row mb-3 left">

                                     <div className="col-md-2">
                                        <Form>
                                                
                                                    <div className='left'>
                                                    <Form.Check 
                                                        type="checkbox"
                                                        id="checkbox"
                                                        label="PAN"
                                                    />

                                                    </div>
                                              
                                        </Form>
                                            </div>
                                     <div className="col-md-10">

                                        <div className="row mb-3 left">

                                                        <div className="col-md-2">
                                                            <div className="form-group ">
                                                            <label for="adults">option</label>
                                                            <select className="form-control" id="options">
                                                                <option>option 1</option>
                                                                <option>option 2</option>
                                                                <option>option 3</option>
                                                            </select>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-10">
                                                            <div className="form-group ">
                                                                    <label for="passportnumber">PAN Number</label>
                                                                    <input type="text" className="form-control" placeholder="" id="passportnumber" />
                                                            </div>
                                                        </div>

                                                </div>

                                            <div className="row mb-3 right">

                                            <div className="col-md-12">
                                            <Button variant="light me-3" size="sm"><i class="bi bi-eye-fill me-2"></i>View PAN</Button>
                                            <Button variant="secondary" size="sm"><i class="bi bi-upload me-2"></i>Upload Image</Button>
                                            </div>
                                            
                                            
                                            </div>




                                            </div>

                                        </div>
                               
                            </Tab.Pane>

                            <Tab.Pane eventKey="third">

                           


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
