import React,{ useState} from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import '../../style.css';
import './PettyCash.css';
import PettyCashModal from './PettyCashModal';



function PettyCashHeader() {
    const details =  
    [
    {id: 1, datetime:'7-08-2022',opening :'0.00',contra:'2000.00',payment:'0.00',balance:'2000.00'},
    {id: 2, datetime:'7-08-2022',opening :'0.00',contra:'2000.00',payment:'0.00',balance:'2000.00'},
    {id: 3, datetime:'7-08-2022',opening :'0.00',contra:'2000.00',payment:'0.00',balance:'2000.00'},
    {id: 4, datetime:'7-08-2022',opening :'0.00',contra:'2000.00',payment:'0.00',balance:'2000.00'},
    {id: 5, datetime:'7-08-2022',opening :'0.00',contra:'2000.00',payment:'0.00',balance:'2000.00'},
    ];


    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.id}</td>
                        <td className="left">
                            <div class="form-group">
                                <select class="form-control" id="sel1">
                                    <option>Anju</option>
                                    <option>Cash</option>
                                    <option>Building Maintenance</option>
                                </select>
                            </div>
                        </td>
                        <td className="left">
                            <div class="form-group">
                                <select class="form-control" id="sel1">
                                    <option>Payment</option>
                                    <option>Journal</option>
                                    <option>Contra</option>
                                </select>
                            </div>
                        </td>
                        <td className="left">
                        <div class="form-group">
                                <input type="number" class="form-control usr" id="usr" value="0"/>
                            </div>
                        </td>
                        <td className="left">
                            <div class="form-group">
                                <input type="number" class="form-control usr" id="usr" value="0"/>
                            </div>
                        </td>
                        <td className="left">
                            <div class="form-group">
                                <input type="number" class="form-control usr" id="usr" value="0"/>
                            </div>
                        </td>
                        <td className="left">
                            <div class="form-group">
                                <input type="text" class="form-control usr" id="usr" value="0"/>
                            </div>
                        </td>
                        <td><button className="btn btn-danger"><i class="bi bi-dash"></i>Delete</button></td>
                    </tr>
                    )}
                     <tr className="table-bordered">
                                <td className="left"></td>
                                <td className="left"></td>
                                <td className="left">Total</td>
                                <td className="left">0.00</td>
                                <td className="left">0.00</td>
                                <td className="left">0.00</td>
                                <td className="left"></td>
                                <td className=""><button className="btn btn-primary"><i className ="bi bi-plus-circle me-2"></i>Add</button></td>
                            </tr>
                </tbody>
        );
    }


        return(
                 <div className="section">
                    <div className="container-fluid formcontent">
                        {/* ----- Heading ------ */}
                        <div className='d-flex justify-content-between mb-4'>
                            <h3 className="header"> Petty Expense Head </h3>
                            <Link to="/pettycash"><button className="btn btn-outline-dark m-1"><i className ="bi bi-caret-left-fill"></i>Back</button></Link>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="input-group mb-3 ">
                                            <input type="date" className="form-control"  />
                                            <button className="btn btn-dark px-4" title="Search" ><i className ="bi bi-search"></i></button>
                                    </div>
                            </div>

            

                                    <div className="col-sm-6">
                                        <div className="mb-3 ">
                                        <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right', height: 50}}><i className ="bi bi-plus-circle me-2"></i>Save</button></Link>
                                        <Link ><button className="btn btn-danger" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><PettyCashModal/></button></Link>
                                        </div>
                                    </div>

                        

                    
                        <div className="">

                                <table>
                                    <tr>
                                        <td className="thwidth left">Code <span className="asterik">*</span></td>
                                        <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
                                    </tr>
                                    <tr>
                                        <td className="thwidth left">Name <span className="asterik">*</span></td>
                                        <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
                                    </tr>
                                    <tr>
                                        <td className="thwidth left">Description <span className="asterik">*</span></td>
                                        <td className="thwidth left"> 
                                            <input type="text" class="form-control" id="pwd"  />
                                        </td>
                                    </tr>
                                </table>

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
                        <table className="table request_table table-bordered">
                            <thead >
                                <tr>
                                    <th className="thstyle left">#</th>
                                    <th className="thstyle left">Head</th>
                                    <th className="thstyle left">Voucher Type</th>
                                    <th className="thstyle left">Debit</th>
                                    <th className="thstyle left">Credit</th>
                                    <th className="thstyle left">Credit(Credit Card)</th>
                                    <th className="thstyle left">Narration</th>
                                    <th className="thstyle left"></th>
                                </tr>
                            </thead>
                            {tdata()}
                           

                        </table>


                        </div>
                      

                    </div>
                </div>
            </div>

        );
}
 
export default PettyCashHeader;