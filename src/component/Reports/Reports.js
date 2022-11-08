import React from 'react';
import './Reports.css';

function Reports() {

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
    
    const  receptiondetailslist = () =>{
        return(
            <ul className="liststyle">
               { receptiondetails.map(receptiondetail => <li key={receptiondetail.id} className="listyle">
                    <div className="col-sm-12">
                        <h5><i class="bi bi-file-earmark "></i> {receptiondetail.name} </h5>
                    </div>
               </li>
               )}
            </ul>
        );
    }

    const  reservationdetailslist = () =>{
        return(
            <ul className="liststyle">
               { reservationdetails.map(reservationdetail => <li key={reservationdetail.id} className="listyle">
                    <div className="col-sm-12">
                        <h5><i class="bi bi-file-earmark "></i> {reservationdetail.name} </h5>
                    </div>
               </li>
               )}
            </ul>
        );
    }

    const  transactionaldetailslist = () =>{
        return(
            <ul className="liststyle">
               { transactionaldetails.map(transactionaldetail => <li key={transactionaldetail.id} className="listyle">
                    <div className="col-sm-12">
                        <h5><i class="bi bi-file-earmark "></i> {transactionaldetail.name} </h5>
                    </div>
               </li>
               )}
            </ul>
        );
    }

    const  foliobalancedetailslist = () =>{
        return(
            <ul className="liststyle">
               {  foliobalancedetails.map(foliobalancedetail => <li key={foliobalancedetail.id} className="listyle">
                    <div className="col-sm-12">
                        <h5><i class="bi bi-file-earmark "></i> {foliobalancedetail.name} </h5>
                    </div>
               </li>
               )}
            </ul>
        );
    }

    const  shiftdetailslist = () =>{
        return(
            <ul className="liststyle">
               {shiftdetails.map(shiftdetail => <li key={shiftdetail.id} className="listyle">
                    <div className="col-sm-12">
                        <h5><i class="bi bi-file-earmark "></i> {shiftdetail.name} </h5>
                    </div>
               </li>
               )}
            </ul>
        );
    }

    const  creditordetailslist = () =>{
        return(
            <ul className="liststyle">
               { creditordetails.map(creditordetail => <li key={creditordetail.id} className="listyle">
                    <div className="col-sm-12">
                        <h5><i class="bi bi-file-earmark "></i> {creditordetail.name} </h5>
                    </div>
               </li>
               )}
            </ul>
        );
    }

        return(
            <div>
                <div className="section">
                    <div className="container-fluid formcontent">
                        <div>
                            <h3 className="header"> Reports </h3>
                        </div>
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