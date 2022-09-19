import React from 'react';
import './Reception.css';

class Reception extends React.Component {
    state = {
    details :  [{id: 1, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018', departure: '20-07-2018', foliobalance:'2780' },  
                {id: 2, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018', departure: '20-07-2018', foliobalance:'2780' },  
                {id: 3, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018', departure: '20-07-2018', foliobalance:'2780' },  
                {id: 4, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018', departure: '20-07-2018', foliobalance:'2780' },  
                {id: 5, roomno:'104',guest:'Ameen Ajwad, India, Mumbai',  arrival: '20-07-2018', departure: '20-07-2018', foliobalance:'2780' },  
                ],
    }


    tdata = () =>{
        
        return(
                <tbody>
                    {
                    this.state.details.map(detail => <tr key={detail.id} >
                        <td>{detail.roomno}</td>
                        <td >{detail.guest}</td>
                        <td>{detail.arrival}</td>
                        <td>{detail.departure}</td>
                        <td>{detail.foliobalance}</td>
                        <td><button className="btn btn-success w-100">CHECK-IN</button></td>
                        <td className="tdwidth">
                            <div className="row">
                                <div className="col-2">
                                    <button className="btn btn-primary">Deposit</button>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary">Posting</button>
                                </div>
                                <div className="col-3">
                                    <button className="btn btn-primary">Bill Review</button>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary">Sharer</button>
                                </div>
                                <div className="col-2">
                                    <button className="btn btn-primary">Reprint</button>
                                </div>
                            </div>
                        </td>
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
                        <h5 className="header"> RESERVATIONS </h5>
                    </div>
                    

                     <table className="table table-bordered">
                        <thead >
                            <tr>
                                <th className="thstyle">Room No.</th>
                                <th className="tdwidthguest">Guest</th>
                                <th className="thstyle">Arrival</th>
                                <th className="thstyle">Departure</th>
                                <th className="thstyle">Folio Balance</th>
                                <th className="thstyle">Status</th>
                                <th className="tdwidth"></th>
                            </tr>
                        </thead>
                                {this.tdata()}

                    </table>
                    
                </div>
            </div>
        );
    }
}
 
export default Reception;