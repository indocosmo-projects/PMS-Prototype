import React from 'react';
import '../../style.css';
import './Reservation_style.css';

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
                <h5 className="header"> RESERVATION </h5>

                    <div className='reservation_table'>
                    {/* ----- Heading ------ */}
                    {/* <div className='reservation_table_head'> */}
                    {/* </div> */}
                    
                    
                            <table className="table table-bordered">
                                <thead>
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
            
        );
    }
}
 
export default Reservation;