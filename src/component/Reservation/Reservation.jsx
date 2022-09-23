import React from 'react';

class Reservation extends React.Component {

    state = {
    
    details :  
    [{id: 1, rese:'R-000001',arrival :'22-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
    {id: 2, rese:'R-000002',arrival :'27-DEC-2018',nights:'4',rooms:'2',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
    {id: 3, rese:' R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
    {id: 4, rese:'R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
    {id: 5, rese:'R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
    {id: 6, rese:'R-000007',arrival :'16-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
    {id: 7, rese:'R-000007',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
    ],

    dropdown : 0,
    recordno : 0,

}

    tdata = () =>{
        
        return(
                <tbody>
                    {
                    this.state.details.map(detail =>  <tr key={detail.id} >
                        <td style={{color : 'blue'}} >{detail.rese}</td>
                        <td>{detail.arrival}</td>
                        <td>{detail.nights}</td>
                        <td>{detail.rooms}</td>
                        <td>{detail.departure}</td>
                        <td>{detail.bookedby}</td>
                        <td>{detail.bookedfor}</td>
                        <td>{detail.bookedon}</td>
                        <td style={{color : 'blue'}} >{detail.status}</td>
                    </tr>
                    )}
                    
                </tbody>
        );

    }


    count = () =>{

        if(this.state.dropdown === 1) {
            this.setState({dropdown : 0})
            console.log("this.state.dropdown"+this.state.dropdown);
        }

        if(this.state.dropdown === 0) {
            this.setState({dropdown : 1})
            console.log("this.state.dropdown"+this.state.dropdown);
        }
    }

    dropdown = () => {
        if(this.state.dropdown === 0) return "";

        if(this.state.dropdown === 1) return (
            <div style={{backgroundColor : 'white'}}>
            <div className="dpdown shadow ">
            <div className="row p-4">
                <div className="col-sm-6 form-group inputfieldpadding">
                    <label className="text-left" for="reservedby">Reserved By :</label>
                    <input type="text" class="form-control" name="reservedby" id="reservedby"/>
                </div>
                <div classN="col-sm-6 form-group inputfieldpadding">
                    <label className="text-left" for="reservedstatus">Reservation Status :</label>
                    <input type="text" class="form-control" name="reservedstatus" id="reservedstatus"/>
                </div>
                <div class="col-sm-6 form-group inputfieldpadding">
                    <label className="text-left" for="departdate">Reserved Date :</label>
                    <input type="date" class="form-control" name="departdate" id="departdate"/>
                </div>
                <div class="col-sm-6 form-group inputfieldpadding">
                    <label className="text-left" for="arrival">Arrival Date :</label>
                    <input type="date" class="form-control " name="arrival" id="arrival"/>
                </div>
                <div class="col-sm-6 form-group inputfieldpadding">
                    <button className="btn btn-danger m-1">Search</button>
                    <button className="btn btn-secondary m-1" onClick={() =>this.setState({dropdown : 0}) }>Close</button>
                </div>
            </div>
            </div>
            </div>
        );
    }
  
      render() { 
        return (
            <div className="section parentdpdown">
                <div className="container-fluid ">
                    {/* ----- Heading ------ */}
                    <div>
                        <h5 className="header"> RESERVATIONS </h5>
                    </div>
                    
                    <div className="p-4 ">
                    <div className="row ">
                        <div className="col-sm-6  ">
                            <div className="input-group mb-3 ">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <div className="input-group-append p-0 bg-white ">
                                    <span className="input-group-text p-0 bg-white br" ><button className="btn"  onClick={this.count}  ><i className="bi bi-caret-down"></i></button></span>
                                </div>
                                <div className="input-group-append p-0">
                                    <span className="input-group-text p-0 br"><button className="btn btn-primary br" >Search</button></span>
                                </div>
                            </div>
                            <div  style={{height : 370,width: 550, zIndex : 100, position : 'absolute',opacity: 1}}>
                                {this.dropdown()}
                            </div>
                        </div>
                       
                        <div className="col-sm-6">
                            <div className="mb-3 ">
                                <a href="/newreservation"><button className="btn btn-secondary" style={{float : 'right'}}>Add New <i className="bi bi-plus"></i></button></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mb-0">
                        <div className="row">
                            <div className="col-sm-1">
                                <div className="inputfieldpadding">
                                    <select className=" form-select" id="rec" onChange={(e) => this.setState({recordno : e.target.value}) }>
                                        <option value="5">5</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="21">All</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-sm-10 inputfieldpadding">
                                <p className="text-left">records per page</p>
                               
                            </div>
                        </div>
                    </div>
                    
                  

                    <div className="row">
                        <div className="col-sm-12 ">
                            <table className="table table-striped table-bordered" >
                                <thead >
                                    <tr>
                                        <th className="thstyle">RESV.#</th>
                                        <th className="thstyle">ARRIVAL <i class="bi bi-arrow-down-up" style={{float : 'right'}}></i></th> 
                                        <th className="thstyle">NIGHTS <i class="bi bi-arrow-down-up" style={{float : 'right'}}></i> </th>
                                        <th className="thstyle">ROOMS <i class="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle">DEPARTURE <i class="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle">BOOKED BY <i class="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle">BOOKED FOR <i class="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle">BOOKED ON <i class="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle">STATUS <i class="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
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