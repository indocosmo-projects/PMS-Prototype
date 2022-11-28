import React, { useState } from 'react';
import './Reports.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Reports() {

    const [modalid, setModalid] = useState(0);
    const [modalname, setModalname] = useState("");
    const [dropdownreceptiondetailslist, setDropdownreceptiondetailslist] = useState(0);
    const [dropdownreservationdetailslist, setDropdownreservationdetailslist] = useState(0);
    const [dropdowntransactionaldetailslist, setDropdowntransactionaldetailslist] = useState(0);
    const [dropdownfoliobalancedetails, setDropdownfoliobalancedetails] = useState(0);
    const [dropdownshiftdetails, setDropdownshiftdetails] = useState(0);
    const [dropdowncreditordetails, setDropdowncreditordetails] = useState(0);
    
    

    const receptiondetails =  
    [
    {id: 1, name:'Expected Arrival List'},
    {id: 2, name:'Actual Arrival List'}, 
    {id: 3, name:'Expected Departure List'},
    {id: 4, name:'Actual Departure List'}, 
    {id: 5, name:'In-House Guest List'},
    {id: 6, name:'Occupancy List'}, 
    {id: 7, name:'Rooms Per Day List'},
    {id: 8, name:'Plan And Room List'}, 
    {id: 9, name:'Country Statics By Month'},
    {id: 10, name:'Guest History Report'}, 
    {id: 11, name:'Room Booking Frequency Report'},
    {id: 12, name:'Customer Grading Report'}, 
    {id: 13, name:'Frequent Guest Analysis Report'}, 
   
    ];

    const reservationdetails =  
    [
    {id: 1, name:'Reservation List'},
    {id: 2, name:'Cancellation Report'},  
    ];

    const transactionaldetails =  
    [
    {id: 1, name:'Transfer Transaction List'},
    {id: 2, name:'Transaction Deleted List'}, 
    {id: 3, name:'Cash Register Closure Report'},
    {id: 4, name:'Daily Revenue Report'}, 
    {id: 5, name:'Monthly Closure Report'},
    {id: 6, name:'Collection Register Report'}, 
    {id: 7, name:'Tally Export'},
    {id: 8, name:'Contra Export'}, 
    {id: 9, name:'Corporate List'},
    {id: 10, name:'Payment Export'}, 
    {id: 11, name:'Petty Ledger Export'},
    {id: 12, name:'Petty Cash Expense Report'}, 
    {id: 13, name:'Petty Cash book'}, 
    {id: 14, name:'Credit Card Export'},
    {id: 15, name:'Credit Card Report'}, 
    {id: 16, name:'Detail Revenue Report'},
    {id: 17, name:'Detail Food Revenue Report'}, 
    {id: 18, name:'Detail POS Revenue Report'},
    {id: 19, name:'B2B Report'}, 
    {id: 20, name:'B2C Report'},
    {id: 21, name:'Day End Report'}, 
    ];

    const foliobalancedetails =  
    [
    {id: 1, name:'Folio Balance Report'},
    ];

    const shiftdetails =  
    [
    {id: 1, name:'Shift Transaction Report'},
    {id: 2, name:'Shift Transaction Transfer Report'},  
    ];

    const creditordetails =  
    [
    {id: 1, name:'Customer Outstanding Report'},
    ];



    const countreceptiondetailslist = (id, name) =>{

        setModalid(( id ));
        setModalname(( name ));
        if(dropdownreceptiondetailslist === 1) {
            setDropdownreceptiondetailslist(( 0 ));
        }

        if(dropdownreceptiondetailslist === 0) {
            setDropdownreceptiondetailslist(( 1 ));
        }
    }

    const modalreceptiondetailslist = () =>{

        if(dropdownreceptiondetailslist === 0) return "";

        if(dropdownreceptiondetailslist === 1) 
        return (
            <div className="modaldisp"  >
                <div className="bg-info left p-2">
                    <div className="row"> 
                        <div className="col-sm-6">
                            <h3> {modalname}</h3>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-danger btn-float" onClick = {()=> setDropdownreceptiondetailslist(( 0 ))}>&times;</button>
                        </div>
                    </div>
                    
                </div>
                <div className="mdbody">
                   
                    <div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="today"  />
                                    </div>
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio1">Today</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="ondate" /> 
                                    </div> 
                                    <div className="col-9 left">
                                        <label className="form-check-label" for="radio2">On Date</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control ondate" id="ondate" />
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className ="form-check-input" id="radio3" name="optradio" value="datebetween" />
                                    </div>
                                    <div className="col-9 left">
                                        <label className="form-check-label" for="radio2">Date Between</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control fromdate" id="fromdate" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control todate" id="todate" />
                                </div>
                            </div>
                        </div>
                   </div>
                   <hr/> 
                    <div className="row">
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">PDF</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">EXCEL</button>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                        <button type="button" className="btn btn-secondary btn-w" onClick = {()=> setDropdownreceptiondetailslist(( 0 ))}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    const  receptiondetailslist = () =>{
        return(
            <ul className="liststyle">
               { receptiondetails.map(receptiondetail => <li key={receptiondetail.id} className="listyle">
                    <div className="col-sm-12" >
                        <button type="button" className="btn w-100 left" 
                        onClick={() =>countreceptiondetailslist(receptiondetail.id,receptiondetail.name)}  ><h5><i className="bi bi-file-earmark " ></i> {receptiondetail.name}  </h5>
                        </button>
                    </div>
               </li>
               )}
            </ul>
        );
    }


    const countreservationdetailslist = (id, name) =>{
       
        setModalid(( id ));
        setModalname(( name ));
        if(dropdownreservationdetailslist === 1) {
            setDropdownreservationdetailslist(( 0 ));
        }

        if(dropdownreservationdetailslist === 0) {
            setDropdownreservationdetailslist(( 1 ));
        }
    }


    const modalreservationdetailslist = () =>{

        if(dropdownreservationdetailslist === 0) return "";

        if(dropdownreservationdetailslist === 1)
        return (
            <div className="modaldisp"  >
                <div className="bg-info left p-2">
                    <div className="row"> 
                        <div className="col-sm-6">
                            <h3> {modalname}</h3>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-danger btn-float" onClick = {()=> setDropdownreservationdetailslist(( 0 ))}>&times;</button>
                        </div>
                    </div>
                </div>
                <div className="mdbody">
                   
                    <div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="today"  />
                                    </div>
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio1">Today</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="ondate" /> 
                                    </div> 
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio2">On Date</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control ondate" id="ondate" />
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className ="form-check-input" id="radio3" name="optradio" value="datebetween" />
                                    </div>
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio2">Date Between</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control fromdate" id="fromdate" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control todate" id="todate" />
                                </div>
                            </div>
                        </div>
                   </div>
                   <hr/> 
                    <div className="row">
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">PDF</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">EXCEL</button>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                        <button type="button" className="btn btn-secondary btn-w" onClick = {()=> setDropdownreservationdetailslist(( 0 ))}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    const  reservationdetailslist = () =>{
        return(
            <ul className="liststyle">
               { reservationdetails.map(reservationdetail => <li key={reservationdetail.id} className="listyle">
                    <div className="col-sm-12">
                        <button type="button" className="btn w-100 left"  onClick={() =>countreservationdetailslist(reservationdetail.id,reservationdetail.name)} 
                        ><h5><i className="bi bi-file-earmark " ></i> {reservationdetail.name}  </h5>
                        </button>
                    </div>
               </li>
               )}
            </ul>
        );
    }




    const counttransactionaldetailslist = (id, name) =>{
       
        setModalid(( id ));
        setModalname(( name ));
        if(dropdowntransactionaldetailslist === 1) {
            setDropdowntransactionaldetailslist(( 0 ));
        }

        if(dropdowntransactionaldetailslist === 0) {
            setDropdowntransactionaldetailslist(( 1 ));
        }
    }


    const modaltransactionaldetailslist = () =>{

        if(dropdowntransactionaldetailslist === 0) return "";

        if(dropdowntransactionaldetailslist === 1)
        return (
            <div className="modaldisp"  >
                <div className="bg-info left p-2">
                    <div className="row"> 
                        <div className="col-sm-6">
                            <h3> {modalname}</h3>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-danger btn-float" onClick = {()=> setDropdowntransactionaldetailslist(( 0 ))}>&times;</button>
                        </div>
                    </div>
                </div>
                <div className="mdbody">
                   
                    <div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="today"  />
                                    </div>
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio1">Today</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="ondate" /> 
                                    </div> 
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio2">On Date</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control ondate" id="ondate" />
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className ="form-check-input" id="radio3" name="optradio" value="datebetween" />
                                    </div>
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio2">Date Between</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control fromdate" id="fromdate" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control todate" id="todate" />
                                </div>
                            </div>
                        </div>
                   </div>
                   <hr/> 
                    <div className="row">
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">PDF</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">EXCEL</button>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                        <button type="button" className="btn btn-secondary btn-w" onClick = {()=> setDropdowntransactionaldetailslist(( 0 ))}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



    const  transactionaldetailslist = () =>{
        return(
            <ul className="liststyle">
               { transactionaldetails.map(transactionaldetail => <li key={transactionaldetail.id} className="listyle">
                    <div className="col-sm-12">
                    <button type="button" className="btn w-100 left"  onClick={() =>counttransactionaldetailslist(transactionaldetail.id,transactionaldetail.name)} 
                        ><h5><i className="bi bi-file-earmark " ></i> {transactionaldetail.name}  </h5>
                        </button>
                    </div>
               </li>
               )}
            </ul>
        );
    }



    const countfoliobalancedetailslist = (id, name) =>{
       
        setModalid(( id ));
        setModalname(( name ));
        if(dropdownfoliobalancedetails === 1) {
            setDropdownfoliobalancedetails(( 0 ));
        }

        if(dropdownfoliobalancedetails === 0) {
            setDropdownfoliobalancedetails(( 1 ));
        }
    }


    const modalfoliobalancedetailslist = () =>{

        if(dropdownfoliobalancedetails === 0) return "";

        if(dropdownfoliobalancedetails === 1)
        return (
            <div className="modaldisp"  >
                <div className="bg-info left p-2">
                    <div className="row"> 
                        <div className="col-sm-6">
                            <h3> {modalname}</h3>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-danger btn-float" onClick = {()=> setDropdownfoliobalancedetails(( 0 ))}>&times;</button>
                        </div>
                    </div>
                </div>
                <div className="mdbody1">
                   
                    <div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="today"  />
                                    </div>
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio1">IN-HOUSE</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="ondate" /> 
                                    </div> 
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio2">Room Number</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="text" className="form-control text" id="text" />
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        
                   </div>
                   <hr/> 
                    <div className="row">
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">PDF</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">EXCEL</button>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                        <button type="button" className="btn btn-secondary btn-w" onClick = {()=> setDropdownfoliobalancedetails(( 0 ))}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }



    const  foliobalancedetailslist = () =>{
        return(
            <ul className="liststyle">
               {  foliobalancedetails.map(foliobalancedetail => <li key={foliobalancedetail.id} className="listyle">
                    <div className="col-sm-12">
                        <button type="button" className="btn w-100 left"  onClick={() =>countfoliobalancedetailslist(foliobalancedetail.id,foliobalancedetail.name)} 
                        ><h5><i className="bi bi-file-earmark " ></i> {foliobalancedetail.name}  </h5>
                        </button>
                    </div>
               </li>
               )}
            </ul>
        );
    }



    const countshiftdetailslist = (id, name) =>{
       
        setModalid(( id ));
        setModalname(( name ));
        if(dropdownshiftdetails === 1) {
            setDropdownshiftdetails(( 0 ));
        }

        if(dropdownshiftdetails === 0) {
            setDropdownshiftdetails(( 1 ));
        }
    }


    const modalshiftdetailslist = () =>{

        if(dropdownshiftdetails === 0) return "";

        if(dropdownshiftdetails === 1)
        return (
            <div className="modaldisp"  >
                <div className="bg-info left p-2">
                    <div className="row"> 
                        <div className="col-sm-6">
                            <h3> {modalname}</h3>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-danger btn-float" onClick = {()=> setDropdownshiftdetails(( 0 ))}>&times;</button>
                        </div>
                    </div>
                </div>
                <div className="mdbody">
                   
                    <div>
                        <div className="row p-2">
                            <div className="col-sm-4 left">
                                <label className="form-check-label " htmlFor="tdate">Date</label>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control tdate" id="tdate" />
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 left">
                                <label className="form-check-label " htmlFor="shift">Shift</label>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                <select className ="form-control" id="shift">
                                    <option>All</option>
                                    <option>Shift 1</option>
                                    <option>Shift 3</option>
                                    <option>Shift 4</option>
                                    <option>Taxi</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 left">
                                <label className="form-check-label " htmlFor="cashier">Cashier</label>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <select className ="form-control" id="cashier">
                                        <option>All</option>
                                        <option>Admin</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                   </div>
                   <hr/> 
                    <div className="row">
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">PDF</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">EXCEL</button>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                        <button type="button" className="btn btn-secondary btn-w" onClick = {()=> setDropdownshiftdetails(( 0 ))}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


    const  shiftdetailslist = () =>{
        return(
            <ul className="liststyle">
               {shiftdetails.map(shiftdetail => <li key={shiftdetail.id} className="listyle">
                    <div className="col-sm-12">
                        <button type="button" className="btn w-100 left"  onClick={() =>countshiftdetailslist(shiftdetail.id,shiftdetail.name)} 
                        ><h5><i className="bi bi-file-earmark " ></i> {shiftdetail.name}  </h5>
                        </button>
                    </div>
               </li>
               )}
            </ul>
        );
    }



    
    const countcreditordetailslist= (id, name) =>{
       
        setModalid(( id ));
        setModalname(( name ));
        if(dropdowncreditordetails === 1) {
            setDropdowncreditordetails(( 0 ));
        }

        if(dropdowncreditordetails === 0) {
            setDropdowncreditordetails(( 1 ));
        }
    }


    const modalcreditordetailslist = () =>{

        if(dropdowncreditordetails === 0) return "";

        if(dropdowncreditordetails === 1)
        return (
            <div className="modaldisp"  >
                <div className="bg-info left p-2">
                    <div className="row"> 
                        <div className="col-sm-6">
                            <h3> {modalname}</h3>
                        </div>
                        <div className="col-sm-6">
                            <button type="button" className="btn btn-danger btn-float" onClick = {()=> setDropdowncreditordetails(( 0 ))}>&times;</button>
                        </div>
                    </div>
                </div>
                <div className="mdbody2">
                   
                    <div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="today"  />
                                    </div>
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio1">Today</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="ondate" /> 
                                    </div> 
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio2">On Date</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control ondate" id="ondate" />
                                </div>
                            </div>
                            <div className="col-sm-4"></div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 ">
                                <div className="row">
                                    <div className="col-3">
                                        <input type="radio" className ="form-check-input" id="radio3" name="optradio" value="datebetween" />
                                    </div>
                                    <div className="col-9 left">
                                        <label className="form-check-label" htmlFor="radio2">Date Between</label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control fromdate" id="fromdate" />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="form-group">
                                    <input type="date" className="form-control todate" id="todate" />
                                </div>
                            </div>
                        </div>
                        <div className="row p-2">
                            <div className="col-sm-4 left">
                                <label className="form-check-label" htmlFor="corporate">Corporate</label>
                            </div>
                            <div className="col-sm-8">
                            <div className="form-group">
                                    <select className ="form-control" id="corporate">
                                        <option>All</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                   </div>
                    <div className="row">
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">PDF</button>
                        </div>
                        <div className="col-sm-2">
                            <button type="button" className="btn btn-primary btn-w">EXCEL</button>
                        </div>
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                        <button type="button" className="btn btn-secondary btn-w" onClick = {()=> setDropdowncreditordetails(( 0 ))}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }





    const  creditordetailslist = () =>{
        return(
            <ul className="liststyle">
               { creditordetails.map(creditordetail => <li key={creditordetail.id} className="listyle">
                    <div className="col-sm-12">
                        <button type="button" className="btn w-100 left"  onClick={() =>countcreditordetailslist(creditordetail.id,creditordetail.name)} 
                        ><h5><i className="bi bi-file-earmark " ></i> {creditordetail.name}  </h5>
                        </button>
                    </div>
               </li>
               )}
            </ul>
        );
    }

   


   


        return(
            <div>
                <div className="section">
                    <div className="container-fluid formcontent" style={{position : 'relative'}}>
                        <div>
                            <h3 className="header"> Reports </h3>
                        </div>
                        {modalreceptiondetailslist()}
                        {modalreservationdetailslist()}
                        {modaltransactionaldetailslist()}
                        {modalfoliobalancedetailslist()}
                        {modalshiftdetailslist()}
                        {modalcreditordetailslist()}
                        <hr/>
                        <div className="left gray">
                            <h4 className="bg-info roundedcorner text-white"> Reception </h4>
                            <div className="row p-2">
                                {receptiondetailslist()}
                            </div>
                        </div>

                          <div className="left gray">
                            <h4 className="bg-info roundedcorner text-white"> Reservation </h4>
                            <div className="row p-2">
                                {reservationdetailslist()}
                            </div>
                        </div>

                        
                        <div className="left gray">
                            <h4 className="bg-info roundedcorner text-white"> Transaction </h4>
                            <div className="row p-2">
                                {transactionaldetailslist()}
                            </div>
                        </div>

                         <div className="left gray">
                            <h4 className="bg-info roundedcorner text-white"> Folio Balance </h4>
                            <div className="row p-2">
                                {foliobalancedetailslist()}
                            </div>
                        </div>

                         <div className="left gray">
                            <h4 className="bg-info roundedcorner text-white"> Shift </h4>
                            <div className="row p-2">
                                {shiftdetailslist()}
                            </div>
                        </div>

                         <div className="left gray">
                            <h4 className="bg-info roundedcorner text-white"> Creditors </h4>
                            <div className="row p-2">
                                {creditordetailslist()}
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        );
}
 
export default Reports;