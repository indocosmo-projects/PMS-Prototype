import React from 'react';
import { Link } from "react-router-dom";
import RoomModal from '../Room/RoomModal';

function Room() {

    const details =  
    [
    {id: 1, number:'101',name :'101',roomtype:'Standard',inventorystatus:'X',occupancystatus:'X',description:''},
    {id: 2, number:'101',name :'101',roomtype:'Standard',inventorystatus:'X',occupancystatus:'X',description:''},
    {id: 3, number:'101',name :'101',roomtype:'Standard',inventorystatus:'X',occupancystatus:'X',description:''},
    {id: 4, number:'101',name :'101',roomtype:'Standard',inventorystatus:'X',occupancystatus:'X',description:''},
    {id: 5, number:'101',name :'101',roomtype:'Standard',inventorystatus:'X',occupancystatus:'X',description:''},
    
  
    
];


    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.number}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.roomtype}</td>
                        <td className="left">{detail.inventorystatus}</td>
                        <td className="left">{detail.occupancystatus}</td>
                        <td className="left">{detail.description}</td>
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
                        <div className='sticky-div'>
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Rooms</h3>
                        </div>

                          <div className="row">
                                <div className="col-sm-6">
                                    <div className="input-group mb-3 ">
                                                <input type="text" className="form-control" placeholder="Search..." />
                                                <button className="btn btn-dark px-4" title="Search" ><i className ="bi bi-search"></i></button>
                                        </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="mb-3 ">
                                    <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><RoomModal/></button></Link>
                                    </div>
                                </div>
                            </div>
                        
                            <table className="table table-striped request_table table-bordered">
                                <thead >
                                    <tr>
                                        <th className="thstyle left">Number</th>
                                        <th className="thstyle left">Name</th>
                                        <th className="thstyle left">Room Type</th>
                                        <th className="thstyle left">Inventory Status</th>
                                        <th className="thstyle left">Occupancy Status</th>
                                        <th className="thstyle left">Description</th>
                                    </tr>
                                </thead>
                                {tdata()}

                            </table>



                    </div>
                </div>
            </div>
        );
}
 
export default Room;