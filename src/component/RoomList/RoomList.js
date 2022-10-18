import React from 'react';

import './RoomList.css' ;

function RoomList(){

    const details =  
    [
    {id: 1, roomtype:'RACKRATE',occuancy :'Single',room:'2',adults:'₹ 2500',children:'++', infants:'₹ 999999',guestname:'₹ 999999'},
    {id: 2, roomtype:'RACKRATE',occuancy :'Single',room:'2',adults:'₹ 2500',children:'++', infants:'₹ 999999',guestname:'₹ 999999'},
    {id: 3, roomtype:'RACKRATE',occuancy :'Single',room:'2',adults:'₹ 2500',children:'++', infants:'₹ 999999',guestname:'₹ 999999'},
    {id: 4, roomtype:'RACKRATE',occuancy :'Single',room:'2',adults:'₹ 2500',children:'++', infants:'₹ 999999',guestname:'₹ 999999'},
    {id: 5, roomtype:'RACKRATE',occuancy :'Single',room:'2',adults:'₹ 2500',children:'++', infants:'₹ 999999',guestname:'₹ 999999'},
    {id: 6, roomtype:'RACKRATE',occuancy :'Single',room:'2',adults:'₹ 2500',children:'++', infants:'₹ 999999',guestname:'₹ 999999'},

    ];

    const roomdetails =  
    [{id: 1, rese:'RS-097865',resefor :'',resedate:'4/10/2018',entered:'CLERK-1',arrdate:'4-10-2018', rms:'2',nts:'2', source:'OTS',status:'CNF'},
    ];

    const roomtdata = () =>{
        return(
                <tbody>
                    {
                    roomdetails.map(roomdetail => <tr key={roomdetail.id} >
                        <td className="left">{roomdetail.rese}</td>
                        <td className="left">{roomdetail.resefor}</td>
                        <td className="left">{roomdetail.resedate}</td>
                        <td className="left">{roomdetail.entered}</td>
                        <td className="left">{roomdetail.arrdate}</td>
                        <td className="left">{roomdetail.rms}</td>
                        <td className="left">{roomdetail.nts}</td>
                        <td className="left">{roomdetail.source}</td>
                        <td className="left text-success">{roomdetail.status}</td>
                        
                    </tr>
                    )}  
                </tbody>
        );
    }


    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">
                            <input type="radio" name="sel" id="sel" className="sel" />
                        </td>
                        <td className="left">{detail.roomtype}</td>
                        <td className="left">{detail.occuancy}</td>
                        <td className="left">{detail.room}</td>
                        <td className="left">{detail.adults}</td>
                        <td className="left">{detail.children}</td>
                        <td className="left">{detail.infants}</td>
                        <td className="left">{detail.guestname}</td>   
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
                        <div>
                            <h5 className="header"> ROOMING LIST </h5>
                        </div>

                        <div className="border">
                        <table className="table ">
                            <thead >
                                <tr className="greyshade">
                                    <th className="thstyle left">RESV.#</th>
                                    <th className="tdwidthguest left">RESERVED FOR</th>
                                    <th className="thstyle left">RESERV DATE</th>
                                    <th className="thstyle left">ENTERED</th>
                                    <th className="thstyle left">ARR.DATE</th>
                                    <th className="thstyle left">#RMS</th>
                                    <th className="thstyle left">#NTS</th>
                                    <th className="thstyle left">SOURCE</th>
                                    <th className="thstyle left">STATUS</th>
                                </tr>
                            </thead>
                            {roomtdata()}

                        </table>
                        </div>

                        <div className="border">
                         <table className="table ">
                            <thead >
                                <tr className="greyshade">
                                    <th className="thstyle left">SEL</th>
                                    <th className="thstyle left">ROOM TYPE</th>
                                    <th className="thstyle left">OCCUANCY</th>
                                    <th className="thstyle left">ROOM#</th>
                                    <th className="thstyle left">ADULTS</th>
                                    <th className="thstyle left">CHILDREN</th>
                                    <th className="thstyle left">INFANTS</th>
                                    <th className="thstyle left">GUEST NAME</th>
                                </tr>
                            </thead>
                            {tdata()}

                        </table>
                        </div>
                        <hr/>

                        <div className="roomform">
                            <h5 className="roomheader mb-0">
                                PERSONAL DETAILS & ROOM NUMBER
                            </h5>
                            <div className="bggrey" >
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group inline">
                                            <label for="bookedrooms">Booked Rooms:</label>
                                            <input type="text" className="form-control" placeholder="Enter Booked Rooms" id="bookedrooms" />
                                        </div>
                                        <div className="form-group inline">
                                            <label for="date">Date:</label>
                                            <input type="datetime-local" className="form-control" placeholder="Enter Date" id="date" />
                                        </div>
                                        <div className="form-group inline">
                                            <button type="button" className="btn btn-success">UPDATE</button>
                                        </div>
                                    </div>
                                    <div className="col-sm-6"></div>
                                </div>
                                </div>

                                <div>
                                <div className="row colpadding left">
                                    <div className="col-sm-3">
                                        <div className="form-group ">
                                            <label for="title">Title:</label>
                                            <select className="form-control" id="title">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                            </select>
                                        </div>
                                    </div>

                                     <div className="col-sm-3">
                                        <div className="form-group ">
                                                <label for="fname">First Name:</label>
                                                <input type="text" className="form-control" placeholder="Enter First Name" id="fname" />
                                            </div>
                                     </div>

                                      <div className="col-sm-3">
                                        <div className="form-group ">
                                                <label for="lname">Last Name:</label>
                                                <input type="text" className="form-control" placeholder="Enter Last Name" id="lname" />
                                            </div>
                                     </div>

                                     <div className="col-sm-3">
                                        <div className="form-group ">
                                            <label for="sel1">Gender:</label>
                                            <select className="form-control" id="sel1">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    </div>

                                    <div className="row colpadding left">
                                    <div className="col-sm-6">
                                        <div className="form-group ">
                                                <label for="address">Address:</label>
                                                <input type="text" className="form-control" placeholder="Enter Address" id="address" />
                                            </div>
                                     </div>

                                    <div className="col-sm-6">
                                        <div className="form-group ">
                                                <label for="emailaddress">Email Address:</label>
                                                <input type="text" className="form-control" placeholder="Enter Email Address" id="emailaddress" />
                                            </div>
                                     </div>
                                    </div>
                                    <div className="row colpadding left">
                                    <div className="col-sm-3">
                                        <div className="form-group ">
                                            <label for="country">Country:</label>
                                            <select className="form-control" id="country">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group ">
                                            <label for="state">State:</label>
                                            <select className="form-control" id="state">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="form-group ">
                                            <label for="zone">Zone:</label>
                                            <select className="form-control" id="zone">
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                            </select>
                                        </div>
                                    </div>

                                     <div className="col-sm-3">
                                        <div className="form-group ">
                                                <label for="phone">Phone:</label>
                                                <input type="text" className="form-control" placeholder="Enter Phone" id="phone" />
                                            </div>
                                     </div>

                                    </div>
                                </div>


                                <div >
                                    <h5 className="roomheader">
                                       MISC.DETAILS
                                    </h5>

                                    <div >
                                        <div className="row colpadding left">
                                            <div className="col-sm-2">
                                                <div className="form-group ">
                                                        <label for="adults">Adults:</label>
                                                        <input type="text" className="form-control" placeholder="Enter Adults" id="adults" />
                                                </div>
                                            </div>
                                             <div className="col-sm-2">
                                                <div className="form-group ">
                                                        <label for="children">Children:</label>
                                                        <input type="text" className="form-control" placeholder="Enter Children" id="children" />
                                                </div>
                                            </div>
                                             <div className="col-sm-2">
                                                <div className="form-group ">
                                                        <label for="infants">Infants:</label>
                                                        <input type="text" className="form-control" placeholder="Enter Infants" id="infants" />
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="form-group ">
                                                        <label for="remarks">Remarks:</label>
                                                        <input type="text" className="form-control" placeholder="Enter Remarks" id="remarks" />
                                                </div>
                                            </div>
                                            <div className="col-sm-2">
                                                <div className="form-group ">
                                                        <label for="gst">GST#:</label>
                                                        <input type="text" className="form-control" placeholder="Enter GST" id="gst" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div >
                                    <h5 className="roomheader">
                                      PASSPORT DETAILS
                                    </h5>

                                    <div>
                                        <div className="row colpadding left">
                                                <div className="col-sm-3">
                                                    <div className="form-group ">
                                                    <label for="adults">Adults:</label>
                                                    <select className="form-control" id="adults">
                                                        <option>option 1</option>
                                                        <option>option 2</option>
                                                        <option>option 3</option>
                                                    </select>
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div className="form-group ">
                                                            <label for="passportnumber">Passport Number:</label>
                                                            <input type="text" className="form-control" placeholder="Enter Passport Number" id="passportnumber" />
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div className="form-group ">
                                                            <label for="issueon">Issued On:</label>
                                                            <input type="text" className="form-control" placeholder="Enter Issued On" id="issueon" />
                                                    </div>
                                                </div>

                                                <div className="col-sm-3">
                                                    <div className="form-group ">
                                                            <label for="expon">Expiry On:</label>
                                                            <input type="text" className="form-control" placeholder="Enter Expiry Date" id="expon" />
                                                    </div>
                                                </div>

                                        </div>
                                    </div>
                                </div>

                        </div>

                        <div className="colpadding" style={{textAlign: 'right'}}>
                            <button type="button" className="btn btn-success" >Update</button>
                            <button type="button" className="btn btn-secondary" >Back</button>
                        </div>

                    </div>
                </div>
            </div>
        );
}
 
export default RoomList;