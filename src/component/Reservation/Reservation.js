import React from 'react';
import Form from 'react-bootstrap/Form';
import '../../style.css';
import './Reservation.css';

class Reservation extends React.Component {

    state = {
    
        details :  
        [{id: 1, rese:'R-000001',arrival :'22-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',status:'GRANTED'},
        {id: 2, rese:'R-000002',arrival :'27-DEC-2018',nights:'4',rooms:'2',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        {id: 3, rese:' R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',status:'CANCELLED'},
        {id: 4, rese:'R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
        {id: 5, rese:'R-000003',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'CANCELLED'},
        {id: 6, rese:'R-000007',arrival :'16-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        {id: 7, rese:'R-000007',arrival :'27-DEC-2018',nights:'4',rooms:'1',departure:'27-DEC-2018', bookedby:'BOOKING.COM',bookedfor:'MR. SURESH', bookedon:'27-DEC-2018',	status:'GRANTED'},
        ],

        dropdown : 0,
        recordno : 5,

    }

    tdata = () =>{
        
        var pageno = ( this.state.details.length / this.state.recordno );
        var balancepage = ( this.state.details.length % this.state.recordno );
        console.log("pageno==>" + pageno + "balancepage==>" + balancepage);
        return(
                <tbody>
                    {
                    this.state.details.map(detail =>  <tr key={detail.id} >
                        <td className="left" style={{color : 'blue'}} >{detail.rese}</td>
                        <td className="left">{detail.arrival}</td>
                        <td >{detail.nights}</td>
                        <td >{detail.rooms}</td>
                        <td className="left">{detail.departure}</td>
                        <td className="left">{detail.bookedby}</td>
                        <td className="left">{detail.bookedfor}</td>
                        <td className="left">{detail.bookedon}</td>
                        <td className="left" style={{color : 'blue'}} >{detail.status}</td>
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
            <div className="section ">
                <div className="container-fluid ">
                    {/* ----- Heading ------ */}
                    {/* <div>
                    </div> */}
                    
                    <div className="row search-area-bg">

                    <div className="col-sm-6">
                        <h5 className="header mt-2"> Reservations </h5>
                       </div>

                       
                        <div className="col-sm-6">
                            <div className="input-group mt-1">
                                <input type="text" className="form-control" placeholder="Search..." />
                                <div className="input-group-append p-0">
                                    <button className="btn btn-secondary search-opt-btn"  onClick={this.count}  ><i className="bi bi-caret-down-fill"></i></button>
                                </div>
                                <div className="input-group-append p-0">
                                    <button className="btn btn-primary ms-3" title="Search" >Search</button>
                                </div>
                            </div>
                            <div className="parentdpdown">
                                <div className="ddw" >
                                    {this.dropdown()}
                                </div>
                            </div>
                        </div>
                      
                        
                    </div>
                    
                        <div className="row mt-4">
                            <div className="col-md-2 col-lg-1 col-3">
                                    {/* <select className=" form-select" title="select" name="rec" id="rec" onChange={(e) => this.setState({recordno : e.target.value}) }>
                                        <option defaultValue="5">5</option>
                                        <option defaultValue="15">15</option>
                                        <option defaultValue="20">20</option>
                                        <option defaultValue="21">All</option>
                                    </select> */}
                                       <Form.Select size='sm' aria-label="No of Records" name="rec" id="rec" onChange={(e) => this.setState({recordno : e.target.value})}>
                                            <option value="1">5</option>
                                            <option value="2">10</option>
                                            <option value="3">15</option>
                                            <option value="3">All</option>
                                        </Form.Select>

                            </div>
                            <div className="col-md-6 col-5 col-lg-7 d-flex justify-content-start">
                                <p className="text-left">records per page</p>
                            </div>

                            <div className="col-sm-4 col-4 col-lg-4">
                            <div className="mb-3 ">
                                <a href="/newreservation"><button className="btn btn-success"  title="New Reservation" style={{float : 'right'}}>Add New <i className="bi bi-plus"></i></button></a>
                            </div>
                        </div>
                        </div>
                    
                  

                    <div className="row">
                        <div className="col-sm-12 reservation_table">
                            <table className="table table-striped table-bordered" >
                                <thead >
                                    <tr>
                                        <th className="thstyle left">RESV.#</th>
                                        <th className="thstyle left">ARRIVAL <i className="bi bi-arrow-down-up sort-btn" style={{float : 'right'}}></i></th> 
                                        <th className="thstyle left">NIGHTS <i className="bi bi-arrow-down-up sort-btn" style={{float : 'right'}}></i> </th>
                                        <th className="thstyle left">ROOMS <i className="bi bi-arrow-down-up sort-btn" style={{float : 'right'}}></i></th>
                                        <th className="thstyle left">DEPARTURE <i className="bi bi-arrow-down-up sort-btn" style={{float : 'right'}}></i></th>
                                        <th className="thstyle left">BOOKED BY <i className="bi bi-arrow-down-up sort-btn" style={{float : 'right'}}></i></th>
                                        <th className="thstyle left">BOOKED FOR <i className="bi bi-arrow-down-up sort-btn" style={{float : 'right'}}></i></th>
                                        <th className="thstyle left">BOOKED ON <i className="bi bi-arrow-down-up sort-btn" style={{float : 'right'}}></i></th>
                                        <th className="thstyle left">STATUS <i className="bi bi-arrow-down-up sort-btn" style={{float : 'right'}}></i></th>
                                    </tr>
                                </thead>
                                
                                        {this.tdata()}
                        
                            </table>
                        </div>
                    
                    </div>

                    <div className="row mt-3">
                        <div className="col-sm-3" style={{textAlign : 'left'}}>Showing 1 to {this.state.recordno} of {this.state.details.length} entries</div>
                        <div className="col-sm-6"></div>
                        <div className="col-sm-3" style={{textAlign : 'right'}}>
                            <button className="btn btn-outline-dark m-1">Prev</button>
                            <button className="btn btn-outline-dark m-1">1</button>
                            <button className="btn btn-outline-dark m-1">2</button>
                            <button className="btn btn-outline-dark m-1">Next</button>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}
 
export default Reservation;