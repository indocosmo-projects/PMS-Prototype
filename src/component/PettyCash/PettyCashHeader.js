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
                        <td className="left">{detail.datetime}</td>
                        <td className="left">{detail.opening}</td>
                        <td className="left">{detail.contra}</td>
                        <td className="left">{detail.payment}</td>
                        <td className="left">{detail.balance}</td>
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
                                        <Link to="/newrequest"><button className="btn btn-primary" title="New Reservation" style={{float : 'right', height: 50}}><i className ="bi bi-plus-circle me-2"></i>New Request</button></Link>
                                        <Link ><button className="btn btn-danger" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><PettyCashModal/></button></Link>
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
                        <table className="table request_table table-bordered">
                            <thead >
                                <tr>
                                    <th className="thstyle left">Date</th>
                                    <th className="thstyle left">Opening</th>
                                    <th className="thstyle left">Contra</th>
                                    <th className="thstyle left">Payment</th>
                                    <th className="thstyle left">Balance</th>
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