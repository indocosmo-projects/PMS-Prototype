import React, { Component } from 'react';

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
                        <hr/>

                        <div className="roomform">
                            <h5 className="roomheader">
                                PERSONAL DETAILS & ROOM NUMBER
                            </h5>
                            <div className="row bggrey" >
                                <div className="col-sm-6">
                                    <div class="form-group inline">
                                        <label for="bookedrooms">Booked Rooms:</label>
                                        <input type="text" class="form-control" placeholder="Enter Booked Rooms" id="bookedrooms" />
                                    </div>
                                    <div class="form-group inline">
                                        <label for="date">Date:</label>
                                        <input type="datetime-local" class="form-control" placeholder="Enter Date" id="date" />
                                    </div>
                                    <div class="form-group inline">
                                        <button type="button" className="btn btn-success">UPDATE</button>
                                    </div>
                                </div>
                                <div className="col-sm-6"></div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
}
 
export default RoomList;