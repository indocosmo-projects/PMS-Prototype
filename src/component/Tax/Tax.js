import React from 'react';
import { Link } from "react-router-dom";
import TaxModal from '../Tax/TaxModal';
import './Tax.css';

function Tax() {
    const details =  
    [
    {id: 1, code:'NO-TAX',name :'No Tax',indicator:'*',description:'No Tax'},
    {id: 2, code:'NO-TAX',name :'No Tax',indicator:'*',description:'No Tax'},
    {id: 3, code:'NO-TAX',name :'No Tax',indicator:'*',description:'No Tax'},
    {id: 4, code:'NO-TAX',name :'No Tax',indicator:'*',description:'No Tax'},
    {id: 5, code:'NO-TAX',name :'No Tax',indicator:'*',description:'No Tax'},

   ];


    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.code}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.indicator}</td>
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
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Tax</h3>
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
                                        <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><TaxModal/></button></Link>
                                        </div>
                                    </div>
                            </div>

                        <table className="table table-striped request_table table-bordered">
                            <thead >
                                <tr>
                                    <th className="thstyle left">Code</th>
                                    <th className="thstyle left">Name</th>
                                    <th className="thstyle left">Indicator</th>
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
 
export default Tax;