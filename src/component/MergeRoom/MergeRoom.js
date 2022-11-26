import React,{ useState } from 'react';
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import '../../style.css';
import './MergeRoom.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function MergeRoom() {
         
    const details =  
    [
    {id: 1, room:'112',name :'Pay At Hotel',amt:'Rs. 2999',facility:'First Class',datetime:'17-08-2022 13:08:50', addonstatus:'UnProccessed',currentstatus:'Confirmed'},
    {id: 2, room:'112',name :'Credit Card',amt:'Rs. 2999',facility:'First Class',datetime:'17-08-2022 13:08:50', addonstatus:'UnProccessed',currentstatus:'Confirmed'},
    {id: 3, room:'112',name :'Pay At Hotel',amt:'Rs. 2999',facility:'First Class',datetime:'17-08-2022 13:08:50', addonstatus:'UnProccessed',currentstatus:'Confirmed'},
    ];

    const [dropdown, setDropdown] = useState(0);

    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left"><input type="checkbox" id="txn1" className="txn1"/></td>
                        <td className="left">{detail.room}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.datetime}</td>
                        <td className="left">{detail.amt}</td>
                        <td className="left">{detail.currentstatus}</td>   
                    </tr>
                    )}
                    
                </tbody>
        );
    }


    const count = () =>{

        if(dropdown === 1) {
            setDropdown(( 0 ));
        }

        if(dropdown === 0) {
            setDropdown(( 1 ));
        }
    }

    const dropdownfn = () => {
        if(dropdown === 0) return "";

        if(dropdown === 1) return (
            <div className="bg-white">
                <div className="dpdown shadow ">
                    <div className="row p-4">
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <label className="text" htmlFor="reservedby">Reserved By :</label>
                            <input type="text" className="form-control" name="reservedby" id="reservedby"/>
                        </div>
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <label className="text" htmlFor="reservedstatus">Reservation Status :</label>
                            <input type="text" className="form-control" name="reservedstatus" id="reservedstatus"/>
                        </div>
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <label className="text" htmlFor="departdate">Reserved Date :</label>
                            <input type="date" className="form-control" name="departdate" id="departdate"/>
                        </div>
                        <div className="col-sm-6 form-group inputfieldpadding">
                            <label className="text" htmlFor="arrival">Arrival Date :</label>
                            <input type="date" className="form-control " name="arrival" id="arrival"/>
                        </div>
                        <div className="col-sm-12 form-group inputfieldpadding d-flex justify-content-end mt-3">
                            <button className="btn btn-secondary m-1" onClick={() =>setDropdown(( 0 )) }>Close</button>
                            <button className="btn btn-primary m-1">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }




        return(
            <div className="section">
                    <div className="container-fluid formcontent">
                        {/* ----- Heading ------ */}
                        <div className='d-flex justify-content-between mb-2'>
                            <h3 className="header"> Transactional Details </h3>
                            <button className="btn btn-outline-dark m-1"><i className ="bi bi-caret-left-fill"></i>Back</button>
                        </div>

                        <div className="row">
                            <hr/>
                            <div className="row">
                                <div className="col-sm-6">
                                    <h4 className='header mt-1'> Room Details </h4>
                                </div>
                            </div>
                            <hr/>
                            <div className="form-group left row">
                                <div className="col-sm-2">
                                    <label for="room">Source Room :</label>
                                </div>
                                <div className="col-sm-4">
                                    <select class="form-control" id="room">
                                        <option>101</option>
                                        <option>150</option>
                                        <option>151</option>
                                        <option>170</option>
                                        <option>171</option>
                                        <option>201</option>
                                        <option>301</option>
                                        <option>501</option>
                                    </select>
                                </div>
                            </div>
                        

                                    <Tabs
                                        defaultActiveKey="roomdetails"
                                        id="justify-tab-example"
                                        className="mt-4 mb-4 status-tab"
                                        justify >
                                    <Tab className='tab-content-bg tab-bg' eventKey="roomdetails" title={<span><i className ="bi bi-house-door-fill me-2"/>Room Details</span>}>
                            
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
                                                    <th className="thstyle left"><input type="checkbox" id="txn" className="txn"/></th>
                                                    <th className="thstyle left">Txn ID</th>
                                                    <th className="thstyle left">Transaction Type</th>
                                                    <th className="thstyle left">Txn Date</th>
                                                    <th className="thstyle left">Amount</th>
                                                    <th className="tdwidthguest left">Status</th>
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
                                        </Tabs>

                          
                            <div className="form-group left row mt-2">
                            <hr/>
                                <div className="col-sm-2">
                                    <label for="room">Destination Room :</label>
                                </div>
                                <div className="col-sm-4">
                                    <select class="form-control" id="room">
                                        <option>101</option>
                                        <option>150</option>
                                        <option>151</option>
                                        <option>170</option>
                                        <option>171</option>
                                        <option>201</option>
                                        <option>301</option>
                                        <option>501</option>
                                    </select>
                                </div>
                                <div className="col-sm-4">
                                    <button type="button" className="btn btn-info roomtxn" id="roomtxn">Transfer</button>
                                </div>
                            </div>

                    </div>
                </div>
            </div>
        );
}
 
export default MergeRoom;