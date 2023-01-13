import React, { useState} from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
// import Alert from 'react-bootstrap/Alert';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



function ReservedFor() {

    const [count, setCount] = useState(0);
    const [cn, setCn] = useState(5);
    const persons =
        [
            { id: 1, name: 'person1' },
            { id: 2, name: 'person2' },
            { id: 3, name: 'person3' },
            { id: 4, name: 'person4' },
            { id: 5, name: 'person5' },
        ];


    
const handleIncrement = () => {
    setCount((count + 1 ));
    setCn(( cn + 1 ));
    persons.push({ id: cn, name: 'person' + cn + '' });
}

const handleDecrement = () => {
    setCount((count - 1 ));
}

const display = (e) => {
    let classes = "";
    classes += e <= count ? "show" : "hide";
    return classes;
}

    return (

        <div className="col-12">

                        <Table className='overflow-reservefor' responsive>
                        <thead>
                            <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Gender</th>
                            <th>Country</th>
                            <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            {/* {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))} */}
                                    <td>Tom</td>
                                    <td>tom@mail.com</td>
                                    <td>917786676757</td>
                                    <td>Male</td>
                                    <td>India</td>
                            <td><button className='btn btn-outline-secondary me-2 btn-sm'><i className="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger btn-sm'><i className="bi bi-trash3"></i></button></td>
                            </tr>
                            <tr>
                            <td>2</td>
                            {/* {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))} */}
                                    <td>Jack</td>
                                    <td>jack@mail.com</td>
                                    <td>918787867554</td>
                                    <td>Male</td>
                                    <td>India</td>
                            <td><button className='btn btn-outline-secondary me-2 btn-sm'><i className="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger btn-sm'><i className="bi bi-trash3"></i></button></td>
                            </tr>
                            <tr>
                            <td>3</td>
                            {/* {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))} */}
                                    <td>Pam</td>
                                    <td>pam@mail.com</td>
                                    <td>912544678907</td>
                                    <td>Female</td>
                                    <td>India</td>
                            <td><button className='btn btn-outline-secondary me-2 btn-sm'><i className="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger btn-sm'><i className="bi bi-trash3"></i></button></td>
                            </tr>
                        </tbody>
                        </Table>



            <div >
                {/* <ul> */}
                    {persons.map(person => <li key={person.id} className={display(person.id)} >

                        <div>
                            <form >
                                <div className="row white-back mt-2 px-2 py-2 round-1">
                                    <div className="col-sm-12 d-flex justify-content-between">
                                            <h4 className="text-start">Add Guest details</h4>
                                            <button type="button" onClick={handleDecrement} className="btn btn-outline-danger px-3 me-2 btn-sm"><i class="bi bi-x-circle me-2"></i>Close</button>
                                    </div>

                                    <div className="border-bottom m-0">

                                    <div className="row">  

                                    <div className="col-md-6"> {/* ....left......*/}
                                        
                                <div className="row">
                                    <div className="col-sm-12 col-md-12">
                                    <div className='row'>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="inputfieldpadding">
                                            <label>First Name<b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="inputfieldpadding">
                                            <label>Last Name <b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                    </div>
                                    <div className='row'>
                                    <div className='col-12 text-center'>
                                            <div className='font-small-gray'>
                                                <i class="bi bi-exclamation-circle"></i> <b>Tom</b> has already stayed with us <b>2 Nights</b> before 
                                            </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="inputfieldpadding">
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
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="inputfieldpadding">
                                            <label>E-mail<b className='text-danger'>*</b></label>
                                            <input type="text" className="form-control" placeholder="" />
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="row">
                                   
                                    <div className="col-lg-4 col-md-6 col-sm-4">
                                        <div className="inputfieldpadding">
                                            <label>Gender<b className='text-danger'>*</b><b className='text-danger'>*</b></label>
                                            
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">Male</option>
                                                    <option value="2">Female</option>
                                            </Form.Select>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6 col-sm-4">
                                        <div className="inputfieldpadding">
                                            <label>Country<b className='text-danger'>*</b><b className='text-danger'>*</b></label>
                                          
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">India</option>
                                                    <option value="2">Japan</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-4">
                                        <div className="inputfieldpadding">
                                            <label>State<b className='text-danger'>*</b><b className='text-danger'>*</b></label>
                                            
                                            <Form.Select aria-label="Default select example">
                                                    <option>Select</option>
                                                    <option value="1">State 1</option>
                                                    <option value="2">State 2</option>
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-6">
                                        <div className="inputfieldpadding">
                                        <label>PIN/ZIP</label>
                                            <input className="form-control"  placeholder=""></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 col-md-12">
                                        <div className="inputfieldpadding">
                                        <label>Street Address</label>
                                            <textarea className="form-control" style={{ height: 30, }} placeholder=""></textarea>
                                        </div>
                                    </div>
                                 
                                </div>

                                </div> {/* ....left-end......*/}


                                <div className="col-md-6 border-left"> {/* ....right......*/}

                                <div className="row mb-3">
                                    <h6 className="left mb-4">Sharers Details</h6>
                                    <div className="row sharer-bg">
                                            <div className='col-md-6 col-sm-6 col-6 mb-2'>
                                                <p className='f-light'>Male Audults</p>
                                                <div className='d-flex justify-content-center'>
                                                <InputGroup className="mb-3 group-input-width">
                                                <Button variant="btn btn-secondary" id="button-addon2">
                                                <i className="bi bi-dash"></i>
                                                </Button>
                                                <Form.Control className='text-center'
                                                    placeholder="0"
                                                    aria-label="1"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <Button variant="btn btn-secondary" id="button-addon2">
                                                <i className="bi bi-plus-lg"></i>
                                                </Button>
                                                </InputGroup>
                                                </div>
                                                </div>

                                                <div className='col-md-6 col-sm-6 col-6 mb-2'>
                                                <p className='f-light'>Female Adults</p>
                                                <div className='d-flex justify-content-center'>
                                                    <InputGroup className="mb-3 group-input-width">
                                                    <Button variant="btn btn-secondary" id="button-addon2">
                                                    <i className="bi bi-dash"></i>
                                                    </Button>
                                                    <Form.Control className='text-center'
                                                        placeholder="0"
                                                        aria-label="1"
                                                        aria-describedby="basic-addon2"
                                                    />
                                                    <Button variant="btn btn-secondary" id="button-addon2">
                                                    <i className="bi bi-plus-lg"></i>
                                                    </Button>
                                                </InputGroup>
                                                </div>
                                                </div>

                                                <div className='col-md-6 col-sm-6 col-6 mb-2'>
                                                <p className='f-light'>Male Childrens</p>
                                                <div className='d-flex justify-content-center'>
                                                <InputGroup className="mb-3 group-input-width">
                                                <Button variant="btn btn-secondary" id="button-addon2">
                                                <i className="bi bi-dash"></i>
                                                </Button>
                                                <Form.Control className='text-center'
                                                    placeholder="0"
                                                    aria-label="1"
                                                    aria-describedby="basic-addon2"
                                                />
                                                <Button variant="btn btn-secondary" id="button-addon2">
                                                <i className="bi bi-plus-lg"></i>
                                                </Button>
                                                </InputGroup>
                                                </div>
                                                </div>

                                                <div className='col-md-6 col-sm-6 col-6 mb-2'>
                                                <p className='f-light'>Female Childrens</p>
                                                <div className='d-flex justify-content-center'>
                                                <InputGroup className="mb-3 group-input-width">
                                                <Button variant="btn btn-secondary" id="button-addon2">
                                                <i className="bi bi-dash"></i>
                                                </Button>
                                                <Form.Control className='text-center'
                                                    placeholder="0"
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

                                    </div>
                                </div> {/* ....right-end......*/}
                            </div> {/* ....sperator-row-end......*/}

                            </div>

                                    <div className="col-sm-12" >
                                                <div className="row">
                                                    {/* <div className="col-lg-3 col-md-4 col-sm-6">
                                                        <div className="inputfieldpadding">
                                                            <label htmlFor="arrivaldate">Check-in Date<b className='text-danger'>*</b></label>
                                                            <input type="datetime-local" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-3 col-md-4 col-sm-6">
                                                        <div className="inputfieldpadding">
                                                            <label htmlFor="arrivaldate">Check-out Date<b className='text-danger'>*</b></label>
                                                            <input type="datetime-local" className="form-control" id="departuredate" placeholder="Enter Departure Date" name="departuredate" />
                                                        </div>
                                                    </div> */}
                                                   

                                                    <div className="col-lg-12">
                                                        <div className="inputfieldpadding">
                                                            <label>Remarks</label>
                                                            <textarea type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                    
                                     </div>


                                </div>
                            </form>
                            
                        </div>


                    </li>

                    )}
                {/* </ul> */}
                <br />
                <div className="row">
                    
                <div className='col-12 d-flex justify-content-center'>
                   
                        <button type="button" onClick={handleIncrement} className="btn btn-primary px-4" ><i class="bi bi-plus-circle me-2"></i>Add</button>
                        

                  </div>
                </div>
            </div>
        </div>
    );

}

export default ReservedFor;