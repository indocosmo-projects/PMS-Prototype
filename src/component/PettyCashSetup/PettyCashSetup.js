import React from 'react';

import './PettyCashSetup.css';

function PettyCashSetup() {
   
    const details =  
    [
    {id: 1, name :'Cash',description:''},
    {id: 2, name :'Guest Expenses',description:''},
    {id: 3, name :'Staff Welfare',description:''},
    {id: 4, name :'Hotel running Expenses',description:''},
    {id: 5, name :'Office Expenses',description:''},
    {id: 6, name :'Machine maintenance',description:''},
    {id: 7, name :'Vehicle Maintenance',description:''},
   ];


    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.id}</td>
                        <td className="left">{detail.name}</td>
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
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Petty Head</h3>
                        </div>

                           <div className="row">
                            <div className="col-sm-6">
                                <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="Search..." />
                                            <button className="btn btn-dark px-4" title="Search" ><i className ="bi bi-search"></i></button>
                                    </div>
                            </div>

                                   
                            </div>

                        <table className="table table-striped request_table table-bordered">
                            <thead >
                                <tr>
                                    <th className="thstyle left">#</th>
                                    <th className="thstyle left">Name</th>
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
 
export default PettyCashSetup;