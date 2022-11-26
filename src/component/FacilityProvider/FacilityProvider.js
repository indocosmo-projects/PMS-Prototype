import React from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';

function FacilityProvider() {
       
const details =  
[
{id: 1, loginId:'112',name :'Peter',email:'abc@gmail.com',usergroup:'First Class',active:'X'},
{id: 2, loginId:'112',name :'Lewis',email:'abc@gmail.com',usergroup:'First Class',active:'X'},
{id: 3, loginId:'112',name :'Peter',email:'abc@gmail.com',usergroup:'First Class',active:'X'},
{id: 4, loginId:'112',name :'Lewis',email:'abc@gmail.com',usergroup:'First Class',active:'X'},
];

const tdata = () =>{
    return(
            <tbody>
                {
                details.map(detail => <tr key={detail.id} >
                    <td className="left">{detail.loginId}</td>
                    <td className="left">{detail.name}</td>
                    <td className="left">{detail.email}</td>
                    <td className="left">{detail.usergroup}</td>
                    <td className="left">{detail.active}</td>
                </tr>
                )}
                
            </tbody>
    );
}


    return(
        <div className="section">
                <div className="container-fluid formcontent">
                    {/* ----- Heading ------ */}
                    <div className='d-flex justify-content-between mb-4'>
                        <h3 className="header">Users </h3>
                        <button className="btn btn-outline-dark m-1"><i className ="bi bi-caret-left-fill"></i>Back</button>
                    </div>
                   
                    <div className="row">
                    <hr/>

                    <div className="row">
                        <div className="col-sm-6">
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Search" id="usr" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                        
                                    <div className="mb-3 ">
                                    <Link><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i></button></Link>
                                    </div>
                                  
                        </div>
                    </div>
                    

              
                    <div className="">
                    <div className="row ms-2 mt-4">
                            <div className="col-md-2 col-lg-1 col-3">
                                <Form.Select size='sm' aria-label="No of Records" name="rec" id="rec" /*onChange={(e) => setRecordno((e.target.value))}*/ >
                                    <option value="1">5</option>
                                    <option value="2">10</option>
                                    <option value="3">15</option>
                                    <option value="3">All</option>
                                </Form.Select>

                            </div>
                            <div className="col-md-6 col-5 col-lg-7 d-flex justify-content-start">
                                <p className="text">Records per Page</p>
                            </div>

                           
                        </div>
                    <table className="table table-striped request_table table-bordered">
                        <thead >
                            <tr>
                                <th className="thstyle left">Login Id</th>
                                <th className="thstyle left">Name</th>
                                <th className="thstyle left">Email</th>
                                <th className="thstyle left">User Group</th>
                                <th className="thstyle left">Active</th>
                            </tr>
                        </thead>
                        {tdata()}

                    </table>

                    </div>
                
                    <div className="right">
                       <button type="button" className="btn btn-secondary" >Cancel</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );

}
 
export default FacilityProvider;