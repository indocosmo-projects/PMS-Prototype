import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import '../../style.css';
import './NightAudit.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NightAudit() {

    
    const details =  
    [
    {id: 1, room:'112',name :'DELUXE',phone:'9999999999',facility:'First Class',datetime:'17-08-2022 13:08:50', addonstatus:'UnProccessed',currentstatus:'Confirmed'},
    {id: 2, room:'112',name :'DELUXE',phone:'9999999999',facility:'First Class',datetime:'17-08-2022 13:08:50', addonstatus:'UnProccessed',currentstatus:'Confirmed'},
   ];

    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.id}</td>
                        <td className="left">{detail.room}</td>
                        <td className="left">{detail.datetime}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.phone}</td>
                        <td className="left">{detail.currentstatus}</td>
                        
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
                            <h3 className="header"> Night Audit </h3>
                            <button className="btn btn-outline-dark m-1"><i className ="bi bi-caret-left-fill"></i>Back</button>
                        </div>
                       
                        <div className="row">
                        <hr/>
                            <div className="col-sm-12 mb-3">
                               <div className="row">
                                    <div className="col-sm-3 col-md-3">
                                        <div className="row div-border">
                                            <div className="col-6 bg-info">
                                                <h5>Expected</h5>
                                            </div>
                                            <div className="col-6 bg-white text-dark">
                                                <h5>2</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-md-3">
                                        <div className="row div-border">
                                            <div className="col-6 bg-info">
                                                <h5>Expected</h5>
                                            </div>
                                            <div className="col-6 bg-white text-dark">
                                                <h5>0</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-md-3">
                                        <div className="row div-border">
                                            <div className="col-6 bg-info">
                                                <h5>No - Show</h5>
                                            </div>
                                            <div className="col-6 bg-white text-dark">
                                                <h5>0</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 col-md-3">
                                        <div className="row div-border">
                                            <div className="col-6 bg-info">
                                                <h5>In - House</h5>
                                            </div>
                                            <div className="col-6 bg-white text-dark">
                                                <h5>8</h5>
                                            </div>
                                        </div>
                                    </div>
                               </div>
                               
                            </div>
                        
                        <hr/>
                        <div className="row">
                            <div className="col-sm-6">
                                <h4 className='header mt-3'> Pre-Night Audit Checklist </h4>
                            </div>
                            <div className="col-sm-6">
                            
                            {/* <div className="mb-3 "> */}
                                      
                            </div>
                        </div>
                        

                    <Tabs
                        defaultActiveKey="expecteddeparture"
                        id="justify-tab-example"
                        className="mt-4 mb-4 status-tab"
                        justify >
                    <Tab className='tab-content-bg tab-bg' eventKey="expecteddeparture" title={<span><i className ="bi bi-house-door-fill me-2"/>Expected Departure</span>}>
              
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
                                    <th className="thstyle left">Id</th>
                                    <th className="thstyle left">Name</th>
                                    <th className="thstyle left">Reserve Date</th>
                                    <th className="thstyle left">Room Type</th>
                                    <th className="thstyle left">Phone</th>
                                    <th className="thstyle left">Reserve Status</th>
                                </tr>
                            </thead>
                            {tdata()}

                        </table>

                        <div className="row m-3 d-flex justify-content-between">
                                    
                                    {/*}                <div className="col-4 d-flex justify-content-start" ><i className="bi bi-eye-fill me-2"></i>Showing 1 to {recordno} of {details.length} entries</div>
                                                {/* <div className="col-6"></div> */}
                                                <div className="col-12 d-flex justify-content-end">
                                                <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-double-left"></i><span className="hide-element"></span></button>
                                                    <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-left"></i><span className="hide-element"></span></button>
                                                    <button className="btn btn-outline-dark m-1 grey-border active">1</button>
                                                    <button className="btn btn-outline-dark m-1 grey-border">2</button>
                                                    <button className="btn btn-outline-dark m-1 grey-border">3</button>
                                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-right"></i></button>
                                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-double-right"></i></button>
                                                    
                                                </div>
                                            </div>

                        </div>
                        </Tab>

                         <Tab className='tab-content-bg tab-bg' eventKey="expectedarrivals" title={<span><i className="bi bi-house-door-fill me-2"/>Expected Arrivals</span>}>
                            
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
                                    <tr className="">
                                        <th className="thstyle left">Id</th>
                                        <th className="thstyle left">Name</th>
                                        <th className="thstyle left">Reserve Date</th>
                                        <th className="thstyle left">Room Type</th>
                                        <th className="thstyle left">Phone</th>
                                        <th className="thstyle left">Reserve Status</th>
                                    </tr>
                                </thead>
                                {tdata()}

                            </table>
                            <div className="row m-3 d-flex justify-content-between">
                                    
                    {/*}                <div className="col-4 d-flex justify-content-start" ><i class="bi bi-eye-fill me-2"></i>Showing 1 to {recordno} of {details.length} entries</div>
                                {/* <div className="col-6"></div> */}
                                <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-double-left"></i><span className="hide-element"></span></button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-left"></i><span className="hide-element"></span></button>
                                    <button className="btn btn-outline-dark m-1 grey-border active">1</button>
                                    <button className="btn btn-outline-dark m-1 grey-border">2</button>
                                    <button className="btn btn-outline-dark m-1 grey-border">3</button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-right"></i></button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-double-right"></i></button>
                                    
                                </div>
                            </div>
                            </div>
                            </Tab>

                        </Tabs>

                    </div>
                </div>
            </div>
        );
}
 
export default NightAudit;