import React, { useState} from 'react';

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

        <div className="col-sm-6" style={{ float: 'right' }} >
            <div >
                <ul className="ulistmargin">
                    {persons.map(person => <li key={person.id} className={display(person.id)} >

                        <div>
                            <form >
                                <div className="row mb-5 border-bottom">
                                    <div className="col-sm-12 ">
                                        <h4 className="label">RESERVED FOR
                                                <label className="chkbox" >
                                                <input type="checkbox" name="chkbox" /> Remember me
                                                </label>
                                        </h4>
                                    </div>

                                    <div className="border-bottom">
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="inputfieldpadding">
                                                    <label className="text-left">Title</label>
                                                    <select className="form-control m-bot15"
                                                        name="title" >
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="inputfieldpadding">
                                                    <label className="text-left">First Name</label>
                                                    <input type="text" className="form-control "
                                                        name="fname" placeholder=""
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="inputfieldpadding">
                                                    <label className="text-left">Last Name</label>
                                                    <input type="text" className="form-control "
                                                        placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <div className="inputfieldpadding">
                                                    <label className="text-left">Address</label>
                                                    <textarea className="form-control "
                                                        placeholder=""></textarea>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="inputfieldpadding">
                                                    <label className="text-left">Gender</label>
                                                    <select className="form-control m-bot15 "
                                                        name="gender">
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
                                                    <input type="text" className="form-control "
                                                        placeholder="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="inputfieldpadding">
                                                    <label className="text-left">Phone</label>
                                                    <input type="text" className="form-control phone"
                                                        name="phone" placeholder="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-4">
                                                <div className="inputfieldpadding">
                                                    <label className="text-left">Country</label>
                                                    <select className="form-control m-bot15 "
                                                        name="country">
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="inputfieldpadding">
                                                    <label className="text-left">State</label>
                                                    <select className="form-control m-bot15"
                                                        name="state">
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="inputfieldpadding">
                                                    <label className="text-left">Zone</label>
                                                    <select className="form-control m-bot15 "
                                                        name="zone">
                                                        <option>Option 1</option>
                                                        <option>Option 2</option>
                                                        <option>Option 3</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 " >
                                        <div className="col-sm-12 ">
                                            <h4 className="label">RESERVED FOR </h4>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="row ">
                                                    <div className="col-sm-4 ">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left" htmlFor="arrivaldate">Date :</label>
                                                            <input type="datetime-local" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-4">
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
                                                </div>
                                            </div>
                                            <div className="col-sm-12" >
                                                <div className="row">

                                                    <div className="col-sm-4">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Seats</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-8">
                                                        <div className="inputfieldpadding">
                                                            <label className="text-left">Remarks</label>
                                                            <input type="text" className="form-control" placeholder="" />
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                    </div>




                                </div>
                            </form>
                        </div>


                    </li>

                    )}
                </ul>
                <br />
                <div className="row">
                    <div className="col-sm-6"></div>
                    <div className="col-sm-3">
                        <button type="button" onClick={handleIncrement} className="btn btn-danger btnflot w-100" > +  Add</button>
                    </div>
                    <div className="col-sm-3">
                        <button type="button" onClick={handleDecrement} className="btn btn-warning btnflot w-100" > -  Remove</button>
                    </div>
                </div>
            </div>



        </div>
    );

}

export default ReservedFor;