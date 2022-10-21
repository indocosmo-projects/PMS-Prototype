import React, {  useState } from 'react';



function RoomAvailability() {
    const [arrdate, setArrdate] = useState('');
    const [deptdate, setDeptdate] = useState('');
    const [nights, setNights] = useState(1);

    const nightcalculation = () =>{
        var arrd = arrdate.substring(0,10);
        var deptd = deptdate.substring(0,10);
        const date1 = new Date(arrd);
        const date2 = new Date(deptd);
        const diffTime = Math.abs(date2 - date1);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        console.log("====="+arrdate + "---" +deptdate +"----"+ diffDays);
        console.log(diffDays + " days");
        setNights((diffDays));
       
        return (
            diffDays
        );
    }
    
    return (
       
        <div className="row p-3" onMouseUp={nightcalculation}>
        <div className="col-md-3 availability_check_bg">
                <div className="col-sm-12">
                    <div className="form-group">
                        <label className="text-left" htmlFor="arrival">Arrival:</label>
                            <input type="datetime-local" className="form-control arrival" name="arrival"
                             id="arrival" onChange={(e) => setArrdate((e.target.value))}/>
                    </div>
                    <div className="form-group">
                        <label className="text-left" htmlFor="departure">Departure:</label>
                            <input type="datetime-local" className="form-control departure" name="departure"
                            onChange={(e) => setDeptdate((e.target.value))} id="departure" />
                    </div>
                    
                </div>
                <div className="col-sm-12">   
                    <div className="row">
                        {/* <div className="col-sm-6"> */}
                            <div className="form-group">
                            <label className="text-left" htmlFor="nights">Nights</label>
                                <input type="number"  className="form-control"  value={nights} 
                                 min="1" name="nights" id="nights" />
                            {/* </div> */}
                        </div>
                         {/* <div className="col-sm-6"> */}
                            <div className="form-group">
                            <label className="text-left" htmlFor="rooms">Rooms</label>
                                <input type="number"  className="form-control"  placeholder="Select Rooms count" min="1"  name="rooms" id="rooms"  />
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <h1></h1>
                <div className="form-group mt-3 d-flex justify-content-end" >
                    {/* <button type="button" className="btn btn-secondary btnstyle text-white" title="Calculate Nights" onClick={nightcalculation}>Check Nights</button> */}
                    {/* <button type="button" className="btn btn-secondary w-25 btnstyle">Edit</button> */}
                    <button type="button" className="btn btn-success w-25 btnstyle">Go</button>
                    
                </div>
        </div> 
        <div className="col-md-9">
        <div className= "roomavailability">
            <div className='m-2'>
            <table className="table avail-table" style={{marginBottom: 0,}}>
                <thead className="tabhead head-bg">
                    <tr>
                        <th>Room Type</th>
                        <th><span className='avail-date'>16-Sep-22</span><br/><span className='avail-date-head'> Fri </span></th>
                        <th><span className='avail-date'>17-Sep-22</span><br/><span className='avail-date-head'> Sat </span></th>
                        <th><span className='avail-date'>18-Sep-22</span><br/><span className='avail-date-head'> Sun </span></th>
                        <th><span className='avail-date'>19-Sep-22</span><br/><span className='avail-date-head'> Mon </span></th>
                        <th><span className='avail-date'>20-Sep-22</span><br/><span className='avail-date-head'> Tue </span></th>
                        <th><span className='avail-date'>21-Sep-22</span><br/><span className='avail-date-head'> Wed </span></th>
                        <th><span className='avail-date'>22-Sep-22</span><br/><span className='avail-date-head'> Thu </span></th>
                        <th><span className='avail-date'>23-Sep-22</span><br/><span className='avail-date-head'> Fri </span></th>
                        <th><span className='avail-date'>24-Sep-22</span><br/><span className='avail-date-head'> Sat </span></th>
                        <th><span className='avail-date'>25-Sep-22</span><br/><span className='avail-date-head'> Sun </span></th>
                        <th><span className='avail-date'>26-Sep-22</span><br/><span className='avail-date-head'> Mon </span></th>
                    </tr>
                </thead>
                <tbody className='avail-tbody'>
                    <tr>
                        <td>DLX</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>PREM</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>CLASS</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>ECON</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td>STND</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                    </tr>
                </tbody>
            </table>

                <div className="d-flex justify-content-end">
                    <button type="button" className="btn"><i className="bi bi-chevron-left me-1"></i>Prev</button>
                    <button type="button" className="btn">Next<i className="bi bi-chevron-right ms-1"></i></button>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}
 
export default RoomAvailability;