import React from 'react';

class Reservation extends React.Component {

    state = {
        details :  
    
    [{id: 1, rese:'R-000001',arrival :'22-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
    {id: 2, rese:'R-000002',arrival :'27-DEC-2018',nights:'4',rooms:'2',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
    {id: 3, rese:' R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
    {id: 4, rese:'R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
    {id: 5, rese:'R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
    ],

}

    tdata = () =>{
        
        return(
                <tbody>
                    {
                    this.state.details.map(detail => <tr key={detail.id} >
                        <td>{detail.rese}</td>
                        <td>{detail.arrival}</td>
                        <td>{detail.nights}</td>
                        <td>{detail.rooms}</td>
                        <td>{detail.departure}</td>
                        <td>{detail.bookedby}</td>
                        <td>{detail.bookedfor}</td>
                        <td>{detail.bookedon}</td>
                        <td>{detail.status}</td>
                    </tr>
                    )}
                    
                </tbody>
        );

    }


    render() { 
        return (
            <div className="section">
                <div className="container-fluid">
                    {/* ----- Heading ------ */}
                    <div>
                        <h5 className="header"> RESERVATION </h5>
                    </div>
                    
                    <div className="p-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <div className="input-group-append p-0 bg-white">
                                    <span className="input-group-text p-0 bg-white br" ><button className="btn" ><i className="bi bi-caret-down"></i></button></span>
                                </div>
                                <div className="input-group-append p-0">
                                    <span className="input-group-text p-0 br"><button className="btn btn-primary br" >Search</button></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="mb-3 ">
                                <a href="/newreservation"><button className="btn btn-secondary" style={{float : 'right'}}>Add New <i className="bi bi-plus"></i></button></a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-group mb-3">
                        <div className="row">
                            <div className="col-sm-1">
                                <select class="form-control" id="sel1">
                                    <option>5</option>
                                    <option>15</option>
                                    <option>20</option>
                                    <option>All</option>
                                </select>
                            </div>
                            <div className="col-sm-11">
                                <label for="sel1" style={{float : 'left'}}> records per page</label>
                            </div>
                        </div>
                    </div>
                    
                  

                    <div className="row">
                        <div className="col-sm-12 ">
                            <table className="table table-bordered">
                                <thead >
                                    <tr>
                                        <th className="thstyle">RESV.#</th>
                                        <th className="thstyle">ARRIVAL</th>
                                        <th className="thstyle">NIGHTS</th>
                                        <th className="thstyle">ROOMS</th>
                                        <th className="thstyle">DEPARTURE</th>
                                        <th className="thstyle">BOOKED BY</th>
                                        <th className="thstyle">BOOKED FOR</th>
                                        <th className="thstyle">BOOKED ON</th>
                                        <th className="thstyle">STATUS</th>
                                    </tr>
                                </thead>
                                
                                        {this.tdata()}
                        
                            </table>
                        </div>
                    
                    </div>

                    </div>
                </div>
            </div>
        );
    }
}
 
export default Reservation;