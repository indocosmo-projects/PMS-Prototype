import React from 'react';
import { Link } from "react-router-dom";
import AccountMasterModal from '../AccountMaster/AccountMasterModal';

function AccountMaster() {
    const details =  
    [
    {id: 1, code:'DEPOSIT',name :'Deposit',hsn:'996311',permission:'Deposit',notax:'NO-TAX',charge:'0',credit:'0',status:'x',description:'Deposit'},
    {id: 2, code:'DEPOSIT',name :'Deposit',hsn:'996311',permission:'Deposit',notax:'NO-TAX',charge:'0',credit:'0',status:'x',description:'Deposit'},
    {id: 3, code:'DEPOSIT',name :'Deposit',hsn:'996311',permission:'Deposit',notax:'NO-TAX',charge:'0',credit:'0',status:'x',description:'Deposit'},
    {id: 4, code:'DEPOSIT',name :'Deposit',hsn:'996311',permission:'Deposit',notax:'NO-TAX',charge:'0',credit:'0',status:'x',description:'Deposit'},
    {id: 5, code:'DEPOSIT',name :'Deposit',hsn:'996311',permission:'Deposit',notax:'NO-TAX',charge:'0',credit:'0',status:'x',description:'Deposit'},
   
   ];

    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.code}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.hsn}</td>
                        <td className="left">{detail.permission}</td>
                        <td className="left">{detail.notax}</td>
                        <td className="left">{detail.charge}</td>
                        <td className="left">{detail.credit}</td>
                        <td className="left"><span className="asterik">{detail.status}</span></td>
                        <td className="left">{detail.description}</td>
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
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Account Master</h3>
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
                                        <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><AccountMasterModal/></button></Link>
                                        </div>
                                    </div>
                            </div>

                        <table className="table table-striped request_table table-bordered">
                            <thead >
                                <tr>
                                    <th className="thstyle left">Code</th>
                                    <th className="thstyle left">Name</th>
                                    <th className="thstyle left">HSN/SAC</th>
                                    <th className="thstyle left">Account Type</th>
                                    <th className="thstyle left">Tax</th>
                                    <th className="thstyle left">Service Charge	</th>
                                    <th className="thstyle left">Credit Days</th>
                                    <th className="thstyle left">Tax Include</th>
                                    <th className="thstyle left">Description</th>
                                </tr>
                            </thead>
                            {tdata()}

                        </table>

                    </div>
                </div>
            </div>

        );
}
 
export default AccountMaster;