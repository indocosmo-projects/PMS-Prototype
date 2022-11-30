import React from 'react';
import { Link } from "react-router-dom";
import CorporatesModal from '../Corporates/CorporatesModal';
import './Corporates.css';

function Corporates() {
    
    const details =  
    [
    {id: 1, code:'MAKE MY TRIP',name :'MAKE MY TRIP',customer:'TRAVEL_AGENT',contactperson:'',email:'',mobile:'',status:'X'},
    {id: 2, code:'INDOCOSMO',name :'INDOCOSMO',customer:'CORPORATE',contactperson:'',email:'',mobile:'',status:'X'},
    {id: 3, code:'INDOCOSMO',name :'INDOCOSMO',customer:'CORPORATE',contactperson:'',email:'',mobile:'',status:'X'},
  
];


    const tdata = () =>{

        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.code}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.customer}</td>
                        <td className="left">{detail.contactperson}</td>
                        <td className="left">{detail.email}</td>
                        <td className="left">{detail.mobile}</td>
                        <td className="left">{detail.status}</td>
                    </tr>
                    )}
                    
                </tbody>
        );
    }



        return(
            <div>
                <div className="section">
                    <div className="container-fluid formcontent">
                        {/* ----- Heading ------ */}
                        <div className='sticky-div'>
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Corporate </h3>
                        </div>

                           <div className="row">
                            <div className="col-sm-6">
                                <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="Search..." />
                                            <button className="btn btn-dark px-4" title="Search" ><i className ="bi bi-search"></i></button>
                                    </div>
                            </div>

                                    <div className="col-sm-6">
                                        <div className="mb-3 ">
                                        <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><CorporatesModal/></button></Link>
                                        </div>
                                    </div>
                            </div>

                        <table className="table table-striped request_table table-bordered">
                            <thead >
                                <tr>
                                    <th className="thstyle left">Code</th>
                                    <th className="thstyle left">Name</th>
                                    <th className="thstyle left">Customer</th>
                                    <th className="thstyle left">Contact Person</th>
                                    <th className="thstyle left">Email</th>
                                    <th className="thstyle left">Mobile</th>
                                    <th className="thstyle left">Status</th>
                                </tr>
                            </thead>
                            {tdata()}

                        </table>

                    </div>
                </div>
            </div>

        );
}
 
export default Corporates;