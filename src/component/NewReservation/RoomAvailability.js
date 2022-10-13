import React, { Component } from 'react';

function RoomAvailability() {
   
    return (
        <div className="row p-3">
        <div className="col-sm-3 p-3 availability_check_bg">
                <div className="col-sm-12">
                    <div className="form-group inputfieldpadding">
                        <label className="text-left" htmlFor="arrival">Arrival :</label>
                            <input type="datetime-local" className="form-control arrival" name="arrival" id="arrival"/>
                    </div>
                    <div className="form-group inputfieldpadding">
                        <label className="text-left" htmlFor="departure">Departure :</label>
                            <input type="datetime-local" className="form-control departure" name="departure" id="departure"/>
                    </div>
                </div>
                <div className="col-sm-12 p-1">   
                    <div className="row">
                        <div className="col-sm-6 inputfieldpadding">
                            <label className="text-left" htmlFor="nights">Nights</label>
                            <div className="form-group">
                                <input type="number"  className="form-control"  placeholder="Select Nights count"  min="1" name="nights" id="nights"  />
                            </div>
                        </div>
                         <div className="col-sm-6 inputfieldpadding">
                            <label className="text-left" htmlFor="rooms">Rooms</label>
                            <div className="form-group">
                                <input type="number"  className="form-control"  placeholder="Select Rooms count" min="1"  name="rooms" id="rooms"  />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group mt-3 d-flex justify-content-end" >
                    <button type="button" className="btn btn-secondary w-25 btnstyle">Edit</button>
                    <button type="button" className="btn btn-success w-25 btnstyle">Go</button>
                </div>
        </div>
        <div className="col-sm-9">
        <div className= "roomavailability">
            <div className='m-2'>
            <table className="table" style={{marginBottom: 0,}}>
                <thead className="tabhead">
                    <tr>
                        <th>Room Type</th>
                        <th><span className='avail-date'>16-Sep-22</span><br/><span className='avail-date-head'> Fri </span></th>
                        <th><span className='avail-date'>17-Sep-22</span><br/><span className='avail-date-head'> Sat </span></th>
                        <th><span className='avail-date'>18-Sep-22</span><br/><span className='avail-date-head'> Sun </span></th>
                        <th><span className='avail-date'>19-Sep-22</span><br/><span className='avail-date-head'> Mon </span></th>
                        <th><span className='avail-date'>20-Sep-22</span><br/><span className='avail-date-head'> Tue </span></th>
                        <th><span className='avail-date'>21-Sep-22</span><br/><span className='avail-date-head'> Wed </span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>DLX</td>
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
                    </tr>
                    <tr>
                        <td>CLASS</td>
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
                    </tr>
                    <tr>
                        <td>STND</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                        <td>6</td>
                    </tr>
                </tbody>
            </table>
                <div class="d-flex justify-content-end">
                    <button type="button" className="btn"><i class="bi bi-chevron-left"></i></button>
                    <button type="button" className="btn"><i class="bi bi-chevron-right"></i></button>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
}
 
export default RoomAvailability;