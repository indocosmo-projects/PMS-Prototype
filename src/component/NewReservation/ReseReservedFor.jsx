import React from 'react';
import '../../style.css';
import './NewReservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';



class ReseReservedFor extends React.Component {

    constructor(props) {
        super(props);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    state = {
        count: 1,
        cn: 5,
        persons: [
            { id: 1, name: 'person1' },
            { id: 2, name: 'person2' },
            { id: 3, name: 'person3' },
            { id: 4, name: 'person4' },
            { id: 5, name: 'person5' },
        ],
    }



    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
        this.setState({ cn: this.state.cn + 1 });
        this.state.persons.push({ id: this.state.cn, name: 'person' + this.state.cn + '' });
        console.log(this.state.persons);
        console.log(this.state.count);
    }

    handleDecrement = () => {
        this.setState({ count: this.state.count - 1 });
        console.log(this.state.persons);
        console.log(this.state.count);
    }

    display = (e) => {
        let classes = "";
        classes += e <= this.state.count ? "show" : "hide";
        return classes;
    }


    render() {

        return (

            <div >
                <ul className="ulistmargin">
                    {this.state.persons.map(person => <li key={person.id} className={this.display(person.id)} >

                        <div>
                            <form >
                                <div className="row mb-5 border-bottom">
                                        <div className="col-sm-12 ">
                                                <h4 className="label">RESERVED FOR 
                                                    <label className="chkbox" >
                                                        <input type="checkbox"  name="chkbox"/> Remember me
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
                                                    style={this.addressstyle} placeholder=""></textarea>
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
                        <button type="button" onClick={this.handleIncrement} className="btn btn-danger btnflot w-100" > +  Add</button>
                    </div>
                    <div className="col-sm-3">
                        <button type="button" onClick={this.handleDecrement} className="btn btn-warning btnflot w-100" > -  Remove</button>
                    </div>
                </div>
            </div>
        );
    }

}
export default ReseReservedFor;