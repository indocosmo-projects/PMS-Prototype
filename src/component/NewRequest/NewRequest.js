import React, {useState} from 'react';
import './NewRequest.css';
import Form from 'react-bootstrap/Form';

function NewRequest() {

    const [todat, setTodat] = useState(0);
    const [inactive, setInactive] = useState(0);


    
    const daily = (e) =>{
        if(e === '1'){
            setTodat(0);
            setInactive(0);
        }
        if(e === '2'){
            setTodat(1);
            setInactive(1);
        }
        console.log(e);
    }

    const todatefunc = () =>{

        if(todat === 0) return "";
        if(todat === 1) return(
            <div class="form-group">
                <input type="datetime-local" class="form-control" id="time" defaultValue="08:00" />
            </div>
        );
    }
    const inactivefunc = () =>{

        if(inactive === 0) return "";
        if(inactive === 1) return(
            <div className="row left  p-3"> 
                <div className="col-sm-12">
                    <div class="form-group">
                        <input type="datetime-local" class="form-control" placeholder="" />
                    </div>
                </div>
            </div>
        );
    }

    const details =  
    [
    {id: 1,room:'105',facility:'facility',	provider:'provider',type:'type',date:'date',time:'time',remarks:'remarks',del:'del'},
    {id: 1,room:'106',facility:'facility',	provider:'provider',type:'type',date:'date',time:'time',remarks:'remarks',del:'del'},
    ];

    const tdata = () =>{
        return(
                <tbody >
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.room}</td>
                        <td className="left">{detail.facility}</td>
                        <td className="left">{detail.provider}</td>
                        <td className="left">{detail.type}</td>
                        <td className="left">{detail.date}</td>
                        <td className="left">{detail.time}</td>
                        <td className="left">{detail.remarks}</td>   
                        <td className="left">{detail.del}</td>   
                    </tr>
                    )}
                    
                </tbody>
        );
    }

    return(
        <div>
            <div className="section">
                <div className="container-fluid formcontent">
                    <div>
                        <h5 className="header"> New Requests </h5>
                    </div>
                    <div className="row left bg-secondary text-white p-5 mt-3"> 
                        <div className="col-sm-3"><h5>Room Number * </h5></div>
                        <div className="col-sm-3">
                            <Form.Select aria-label="Default select example">
                                <option value="0">SELECT</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <div className="row left p-3"> 
                                <div className="col-sm-3"><h6>Facility * </h6></div>
                                <div className="col-sm-6">
                                    <Form.Select aria-label="Default select example">
                                        <option value="0">SELECT</option>
                                        <option value="1">PICK UP</option>
                                        <option value="2">TREATMENT</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <div className="row left  p-3"> 
                                <div className="col-sm-3"><h6>Request Type   </h6></div>
                                <div className="col-sm-6">
                                    <Form.Select aria-label="Default select example" className="requesttype"
                                    onChange={(e)=> daily(e.target.value)}>
                                        <option value="1">ON DATE</option>
                                        <option value="2">DAILY</option>
                                    </Form.Select>
                                </div>
                            </div>
                        </div>
                           
                     
                        <div className="col-sm-6">
                            <div className="row left p-3"> 
                                <div className="col-sm-3"><h6>Facility Provider</h6></div>
                                <div className="col-sm-6">
                                    <Form.Select aria-label="Default select example">
                                        <option value="0">SELECT</option>
                                        <option value="1">PICK UP TAXI</option>
                                        <option value="2">AYURVEDA</option>
                                    </Form.Select>
                                </div>
                            </div>

                                <div className="row left  p-3"> 
                                    <div className="col-sm-6">
                                    <div class="form-group">
                                            <input type="datetime-local" class="form-control" id="time" defaultValue="08:00" />
                                        </div></div>
                                    <div className="col-sm-6">
                                        {todatefunc()}
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                       {inactivefunc()}
                        
                        
                        <div className="row left  p-3"> 
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-3"><h6>Request Time   </h6></div>
                                        <div className="col-sm-6">
                                            <div class="form-group">
                                                <input type="time" class="form-control" id="time" defaultValue="08:00" />
                                            </div>
                                        </div>  
                                    </div>    
                                </div>
                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <div class="form-group p-3 pt-0">
                                                <input type="text" class="form-control" id="time" placeholder="Remark" />
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                        <div className="row">
                            <div className="col-sm-8"></div>
                            <div className="col-sm-4">
                                <button className="btn btn-warning">ADD TO REQUEST LIST</button>
                            </div>
                        </div>

                        <div className="p-3 border mt-4">
                            <table className="table ">
                                <thead >
                                    <tr className="greyshade">
                                        <th className="thstyle left">Room</th>
                                        <th className="thstyle left">Facility</th>
                                        <th className="thstyle left">Provider</th>
                                        <th className="thstyle left">Type</th>
                                        <th className="thstyle left">Date</th>
                                        <th className="thstyle left">Time</th>
                                        <th className="thstyle left">Remarks</th>
                                        <th className="thstyle left">Del</th>
                                    </tr>
                                </thead>
                                {tdata()}

                            </table>
                        </div>


                        <div className="row mt-4">
                            <div className="col-sm-3">
                                <button className="btn btn-info">SAVE</button>
                            </div>
                            <div className="col-sm-6"></div>
                            <div className="col-sm-3">
                                <button className="btn btn-secondary">CANCEL</button>
                            </div>
                        </div>

                </div>
            </div>
        </div>
    );
}
 
export default NewRequest;