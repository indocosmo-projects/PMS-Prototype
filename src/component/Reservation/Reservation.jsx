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
            <div className="bg-white">
            <div className="dpdown shadow ">
            <div className="row p-4">
                <div className="col-sm-6 form-group inputfieldpadding">
                    <label className="text-left" htmlFor="reservedby">Reserved By :</label>
                    <input type="text" className="form-control" name="reservedby" id="reservedby"/>
                </div>
                <div className="col-sm-6 form-group inputfieldpadding">
                    <label className="text-left" htmlFor="reservedstatus">Reservation Status :</label>
                    <input type="text" className="form-control" name="reservedstatus" id="reservedstatus"/>
                </div>
                <div className="col-sm-6 form-group inputfieldpadding">
                    <label className="text-left" htmlFor="departdate">Reserved Date :</label>
                    <input type="date" className="form-control" name="departdate" id="departdate"/>
                </div>
                <div className="col-sm-6 form-group inputfieldpadding">
                    <label className="text-left" htmlFor="arrival">Arrival Date :</label>
                    <input type="date" className="form-control " name="arrival" id="arrival"/>
                </div>
                <div className="col-sm-6 form-group inputfieldpadding">
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
                                <div className="inputfieldpadding p-0">
                                    <select className=" form-select" id="rec" onChange={(e) => this.setState({recordno : e.target.value}) }>
                                        <option defaultValue="5">5</option>
                                        <option defaultValue="15">15</option>
                                        <option defaultValue="20">20</option>
                                        <option defaultValue="21">All</option>
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
                                        <th className="thstyle">ARRIVAL <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th> 
                                        <th className="thstyle">NIGHTS <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i> </th>
                                        <th className="thstyle">ROOMS <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle">DEPARTURE <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle">BOOKED BY <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle">BOOKED FOR <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle">BOOKED ON <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                        <th className="thstyle">STATUS <i className="bi bi-arrow-down-up" style={{float : 'right'}}></i></th>
                                    </tr>
                                </thead>
                                
                                        {this.tdata()}
                        
                            </table>
                        </div>
                    
                    </div>

                    <div className="row">
                        <div className="col-sm-3" >Showing 1 to 5 of 7 entries</div>
                        <div className="col-sm-6"></div>
                        <div className="col-sm-3" >
                            <button className="btn bg-white  btn-outline-dark">Prev</button>
                            <button className="btn bg-white  btn-outline-dark">1</button>
                            <button className="btn bg-white  btn-outline-dark">2</button>
                            <button className="btn bg-white  btn-outline-dark">Next</button>
                        </div>
                    </div>


                    </div>
                </div>
            </div>
        );
    }
}
 
export default Reservation;