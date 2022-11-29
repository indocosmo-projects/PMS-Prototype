import React from 'react';
import { Link } from "react-router-dom";
import RoomTypeModal from '../RoomType/RoomTypeModal';

function RoomType() {

    const details =  
    [
    {id: 1, code:'CLA',name :'Classic',description:'',single:'X',double:'X',triple:'X',quad:'X'},
    {id: 2, code:'CLA',name :'Classic',description:'',single:'X',double:'X',triple:'X',quad:'X'},
    {id: 3, code:'CLA',name :'Classic',description:'sd',single:'X',double:'X',triple:'X',quad:'X'},
    {id: 4, code:'CLA',name :'Classic',description:'',single:'X',double:'X',triple:'X',quad:'X'},
    {id: 5, code:'CLA',name :'Classic',description:'',single:'X',double:'X',triple:'X',quad:'X'},
    {id: 6, code:'CLA',name :'Classic',description:'',single:'X',double:'X',triple:'X',quad:'X'},
    
];


    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.code}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.description}</td>
                        <td className="left">{detail.single}</td>
                        <td className="left">{detail.double}</td>
                        <td className="left">{detail.triple}</td>
                        <td className="left">{detail.quad}</td>
                     
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
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Room Type</h3>
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
                                <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><RoomTypeModal/></button></Link>
                                </div>
                            </div>
                        </div>

                          <table className="table table-striped request_table table-bordered">
                            <thead >
                                <tr>
                                    <th className="thstyle left">Code</th>
                                    <th className="thstyle left">Name</th>
                                    <th className="thstyle left">Description</th>
                                    <th className="thstyle left">Single Occ</th>
                                    <th className="thstyle left">Double Occ</th>
                                    <th className="thstyle left">Triple Occ</th>
                                    <th className="thstyle left">Quad Occ</th>
                                </tr>
                            </thead>
                            {tdata()}

                        </table>


                    </div>
                </div>
            </div>
        );
}
 
export default RoomType;