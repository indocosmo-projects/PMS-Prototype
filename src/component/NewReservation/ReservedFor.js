import React, { useState} from 'react';
import Table from 'react-bootstrap/Table';

function ReservedFor() {

    const [count, setCount] = useState(1);
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


                        <Table responsive>
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
                            <td><button className='btn btn-outline-secondary me-2'><i class="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger'><i class="bi bi-trash3"></i></button></td>
                            </tr>
                            <tr>
                            <td>2</td>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                            <td><button className='btn btn-outline-secondary me-2'><i class="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger'><i class="bi bi-trash3"></i></button></td>
                            </tr>
                            <tr>
                            <td>3</td>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <td key={index}>Table cell {index}</td>
                            ))}
                            <td><button className='btn btn-outline-secondary me-2'><i class="bi bi-pencil-square"></i></button><button className='btn btn-outline-danger'><i class="bi bi-trash3"></i></button></td>
                            </tr>
                        </tbody>
                        </Table>



            <div >
                {/* <ul> */}
                    {persons.map(person => <li key={person.id} className={display(person.id)} >

                        <div>
                            <form >
                                <div className="row mb-5">
                                    <div className="col-sm-12 ">
                                        {/* <h4 className="">RESERVED FOR
                                                <label className="chkbox" >
                                                <input type="checkbox" name="chkbox" /> Remember me
                                                </label>
                                        </h4> */}
                                    </div>

                                    <div className="border-bottom">
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

                                    <div className="col-sm-12" >
                                        <div className="col-sm-12">
                                            <h4 className="text-start">Reservation Details </h4>
                                        </div>

                                                <div className="row">
                                                    <div className="col-sm-2">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left" htmlFor="arrivaldate">Date :</label>
                                                            <input type="datetime-local" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-2">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left" htmlFor="arrivaldate">Date :</label>
                                                            <input type="datetime-local" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Location</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
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
                   
                    
                        <button type="button" onClick={handleDecrement} className="btn btn-danger px-3 me-2" > -  Remove</button>
                        <button type="button" onClick={handleIncrement} className="btn btn-primary px-4" > +  Add</button>

                  </div>
                </div>
            </div>



        </div>
    );

}

export default ReservedFor;