import React, { Component } from 'react';
import '../../style.css';
import './NewReservation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

/*
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
*/

function NewReservation() {
    return(
        <div>
            <div className="section">
                <div className="container-fluid">
                    {/* ----- Heading ------ */}
                    <div>
                        <h5 className="header"> NEW RESERVATION </h5>
                    </div>

                     {/* ----- Form   ------ */}
                    <div className="formcontent">
                        <form action="#">
                            <div className="row ">
                                <div className="col-sm ">
                                    <div className="inputfieldpadding">
                                        <label className="text-left" htmlFor="reseNumber">Reservation Number :</label>
                                            <input type="number" className="form-control" id="reseNumber" defaultValue="100" name="reseNumber" disabled />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="inputfieldpadding">
                                        <label className="text-left" htmlFor="arrivaldate">Date :</label>
                                            <input type="date" className="form-control" id="arrivaldate" placeholder="Enter Arrival Date" name="arrivaldate" />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="inputfieldpadding">
                                        <label className="text-left" htmlFor="departdate">By :</label>
                                            <input type="date" className="form-control" id="departdate" placeholder="Enter Depart Date" name="departdate" />
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div  className="inputfieldpadding">
                                        <label className="text-left" htmlFor="email">Source :</label>
                                        <select className="form-select">
                                            <option>FIT/TA/CORPORATE</option>
                                            <option>FIT/TA/CORPORATE</option>
                                            <option>FIT/TA/CORPORATE</option>
                                            <option>FIT/TA/CORPORATE</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div  className="inputfieldpadding">
                                        <label className="text-left" htmlFor="email">TA/Company Name : </label>
                                        <select className="form-select">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div  className="inputfieldpadding">
                                        <label className="text-left" htmlFor="email">GST :</label>
                                        <select className="form-select">
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 3</option>
                                            <option>Option 4</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                     {/* ----- Room Availability ------ */}
                    <div className="row p-3">
                        <div className="col-sm-3 p-3 ">
                                <div className="col-sm-12">
                                    <div className="form-group inputfieldpadding">
                                        <label className="text-left" htmlFor="arrival">Arrival :</label>
                                            <input type="datetime-local" className="form-control arrival" name="arrival" id="arrival"/>
                                    </div>
                                    <div className="form-group inputfieldpadding">
                                        <label className="text-left" htmlFor="departure">Departure :</label>
                                            <input type="datetime-local" className="form-control departure" name="departure" id="departure"/>
                                    </div>
                                </div>
                                <div className="col-sm-12 p-1">   
                                    <div className="row">
                                        <div className="col-sm-6 inputfieldpadding">
                                            <label className="text-left" htmlFor="nights">Nights</label>
                                            <div className="form-group">
                                                <input type="number"  className="form-control"  placeholder="Select Nights count"  min="1" name="nights" id="nights"  />
                                            </div>
                                        </div>
                                         <div className="col-sm-6 inputfieldpadding">
                                            <label className="text-left" htmlFor="rooms">Rooms</label>
                                            <div className="form-group">
                                                <input type="number"  className="form-control"  placeholder="Select Rooms count" min="1"  name="rooms" id="rooms"  />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3" >
                                    <button type="button" className="btn btn-success w-25 btnstyle">Go</button>
                                    <button type="button" className="btn btn-info w-25 btnstyle">Edit</button>
                                </div>
                        </div>
                        <div className="col-sm-9">
                        <div className= "roomavailability">
                            <table className="table " style={{marginBottom: 0,}}>
                                <thead className="tabhead">
                                    <tr>
                                        <th>Room Type</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                        <th>Tue <br/> 16-Oct-18</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>DLX</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>PREM</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>CLASS</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>ECON</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>STND</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                        <td>6</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                        
                     {/* ----- Room Rate Type Discount ------ */}
                    <div>
                                <div className="padcolumn mt-1" >
                            <div className="table-responsive table ">

                                <table className="table">
                                    <thead className="theadpadding">
                                        <tr>
                                            <th className="thstyle">ROOM TYPE</th>
                                            <th className="thstyle">RATE CODE</th>
                                            <th>SINGLE</th>
                                            <th>DOUBLE</th>
                                            <th>TRIPPLE</th>
                                            <th className="thstyle">TOTAL</th>
                                            <th className="thstyle">DISCOUNT</th>
                                            <th className="thstyle">SUB TOTAL</th>
                                            <th>&nbsp;</th>
                                        </tr>
                                    </thead>
                                    
                            <tbody>
                            
                                <tr className="">
                                    <td>
                                        <select className="form-control">
                                            <option> DLX</option>
                                            <option> 2</option>
                                            <option> 3</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select className="form-control">
                                            <option> RACKRATE</option>
                                            <option> 2</option>
                                            <option> 3</option>
                                        </select>
                                    </td>
                                    <td>
                                    <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <input type="text" className="input-group-text appendsize" defaultValue="2" />
                                            </div>
                                            <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <input type="text" className="input-group-text appendsize" defaultValue="2" />
                                            </div>
                                            <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <input type="text" className="input-group-text appendsize" defaultValue="2" />
                                            </div>
                                            <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                    </td>
                                    <td>
                                        <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                    </td>
                                    <td>
                                        <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                    </td>
                                    <td>
                                        <button className="btn btn-danger btn-xs"><i className="bi bi-trash "></i></button>
                                    </td>
                                </tr>
                                <tr className="">
                                    <td>
                                        <select className="form-control">
                                            <option> DLX</option>
                                            <option> 2</option>
                                            <option> 3</option>
                                        </select>
                                    </td>
                                    <td>
                                        <select className="form-control">
                                            <option> RACKRATE</option>
                                            <option> 2</option>
                                            <option> 3</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <input type="text" className="input-group-text appendsize" defaultValue="2" />
                                            </div>
                                            <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <input type="text" className="input-group-text appendsize" defaultValue="2" />
                                            </div>
                                            <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    <div className="input-group mb-3">
                                            <div className="input-group-prepend">
                                                <input type="text" className="input-group-text appendsize" defaultValue="2" />
                                            </div>
                                            <input type="text" className="form-control apptexboxsize" placeholder=""/>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-danger prependsize" type="button"><i className="bi bi-pencil"></i></button>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                    </td>
                                    <td>
                                        <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                    </td>
                                    <td>
                                        <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                    </td>
                                    <td>
                                        <button className="btn btn-primary btn-xs"><i className="bi bi-plus" ></i></button>
                                    </td>
                                </tr>
                                <tr style={{backgroundColor :  'rgb(241, 238, 238)'}} >
                                    <td colSpan="7" align="right">
                                        TOTAL
                                    </td>
                                    <td align="right">
                                        5000
                                    </td>
                                
                                    <td>
                                        <button className="btn btn-success btn-xs"><i className="bi bi-download"></i></button>
                                    </td>
                                </tr>
                                
                            </tbody>
                            
                                </table>

                            </div>
                        </div>
                    </div>


                     {/* ----- Room Reserved By  ------ */}
                     
                        <div className="row formxs mt-1 pb-5" >
                            <div className="col-sm-6" >
                                    <div>
                                            <ul className="ulistmargin">
                                                <div>
                                                    <h4 className="label"> RESERVED BY </h4>
                                                </div>
                                                <div className="border-bottom">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <div className="inputfieldpadding">
                                                                <label className="text-left">Title</label>
                                                                <select className="form-control m-bot15">
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                    <option>Option 3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="inputfieldpadding">
                                                                <label className="text-left">First Name</label>
                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="inputfieldpadding">
                                                                <label className="text-left">Last Name</label>
                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-8">
                                                            <div className="inputfieldpadding">
                                                                <label className="text-left">Address</label>
                                                                <textarea className="form-control" style={{ height: 60, }} placeholder=""></textarea>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="inputfieldpadding">
                                                                <label className="text-left">Gender</label>
                                                                <select className="form-control m-bot15">
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
                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="inputfieldpadding">
                                                                <label className="text-left">Phone</label>
                                                                <input type="text" className="form-control" placeholder="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <div className="inputfieldpadding">
                                                                <label className="text-left">Country</label>
                                                                <select className="form-control m-bot15">
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                    <option>Option 3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="inputfieldpadding">
                                                                <label className="text-left">State</label>
                                                                <select className="form-control m-bot15">
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                    <option>Option 3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <div className="inputfieldpadding">
                                                                <label className="text-left">Zone</label>
                                                                <select className="form-control m-bot15">
                                                                    <option>Option 1</option>
                                                                    <option>Option 2</option>
                                                                    <option>Option 3</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                

                                                </div>
                                        

                                            <div>
                                                <div className="col-sm-12">
                                                    <div>
                                                        <h4 className="label"> COMMENTS </h4>
                                                    </div>
                                                    <div className="column">
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div  className="inputfieldpadding">
                                                                    <label className="text-left">Special Instructions/Comments</label>
                                                                    <input type="text" className="form-control" placeholder="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                <div className="inputfieldpadding">
                                                                    <label className="text-left">Show Discounts</label>
                                                                    <div className="row">
                                                                        <div className="col-sm-6">
                                                                            <input type="text" className="form-control shw_dsct_lft" defaultValue="GENERAL" />
                                                                        </div>
                                                                        <div className="col-sm-6">
                                                                            <input type="text" className="form-control shw_dsct_rgt" defaultValue="'100 RS" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                            
                                                    </div>

                                                </div>
                                            </div>
                                            </ul>

                                        </div>


                            </div>

                            {/* -------- Reserved For----------- */}

                            <div className="col-sm-6" style={{float : 'right'}} >
                                {/*     <div >
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
                                            */}


                            </div>
                        </div>
                    
                    
               
                     {/* ----- Buttons ------ */}
                     <div className="row " >
                                <div className="col-sm-3"></div>
                                <div className="col-sm-6">
                                <div className="row mb-3">
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-secondary btnflot w-100" > Back</button>
                                    </div>
                                    <div className="col-sm-6">
                                        <button type="button" className="btn btn-success btnflot w-100" > Update</button>
                                    </div>
                                </div>
                                </div>
                                <div className="col-sm-3"></div>
                    </div>

                    

                </div>
            </div>
        </div>
    );
}
 
export default NewReservation; 