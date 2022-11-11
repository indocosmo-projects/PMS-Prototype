import React, { useState} from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';



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
                            <th>State</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>1</td>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                            <td><button className='btn btn-outline-secondary me-2'><i className="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger'><i className="bi bi-trash3"></i></button></td>
                            </tr>
                            <tr>
                            <td>2</td>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                            <td><button className='btn btn-outline-secondary me-2'><i className="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger'><i className="bi bi-trash3"></i></button></td>
                            </tr>
                            <tr>
                            <td>3</td>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                            <td><button className='btn btn-outline-secondary me-2'><i className="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger'><i className="bi bi-trash3"></i></button></td>
                            </tr>
                        </tbody>
                        </Table>



            <div >
                {/* <ul> */}
                    {persons.map(person => <li key={person.id} className={display(person.id)} >

                        <div>
                            <form >
                                <div className="row my-5 grey-bg px-2 py-4">
                                    <div className="col-sm-12 d-flex justify-content-between">
                                            <h4 className="text-start">Add Customer details</h4>
                                            <button type="button" onClick={handleDecrement} className="btn btn-outline-danger px-3 me-2"><i class="bi bi-x-circle me-2"></i>Close</button>
                                    </div>

                                    <div className="border-bottom">
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
                                <div className='row'>
                                    <div className='col-12 px-3'>
                                            <Alert variant="primary">
                                                <i class="bi bi-exclamation-circle"></i> <b>Tom</b> has already stayed with us <b>2 Nights</b> before 
                                                <Alert.Link href="#"></Alert.Link>
                                            </Alert>
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
                                            <label className="text-left"></label>
                                            <textarea className="form-control" style={{ height: 60, }} placeholder="Address"></textarea>
                                        </div>
                                    </div>
                                 
                                </div>

                            

                            </div>

                                    <div className="col-sm-12" >
                                        <div className="col-sm-12">
                                            <h5 className="text-start">Reservation Details </h5>
                                        </div>

                                                <div className="row my-3">
                                                    <div className="col-sm-2">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left" htmlFor="arrivaldate">Arrival Date <b className='text-danger'>*</b></label>
                                                            <input type="datetime-local" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left" htmlFor="arrivaldate">Departure Date <b className='text-danger'>*</b></label>
                                                            <input type="datetime-local" className="form-control" id="departuredate" placeholder="Enter Departure Date" name="departuredate" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Location <b className='text-danger'>*</b></label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Seats <b className='text-danger'>*</b></label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            
                                                <div className="row my-3">

                                                    <div className="col-sm-12">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Remarks</label>
                                                            <textarea type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>

                                                    <label className="chkbox left ms-2 mt-3" >
                                                        <input type="checkbox" name="chkbox" /> Remember me
                                                    </label>
                                    
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