import React from 'react';
import { Link } from "react-router-dom";
import RoomRatesModal from '../RoomRates/RoomRatesModal';
import './RoomRates.css';

function RoomRates() {

    const details =  
    [
    {id: 1, code:'STD',name :'STANDARD',roomtype:'STD',validfrom:'21-February-2022',validto:'27-September-2023',mealplan:'EP',status:'X'},
    {id: 2, code:'STD',name :'STANDARD',roomtype:'STD',validfrom:'21-February-2022',validto:'27-September-2023',mealplan:'EP',status:'X'},
    {id: 3, code:'STD',name :'STANDARD',roomtype:'STD',validfrom:'21-February-2022',validto:'27-September-2023',mealplan:'EP',status:'X'},
    {id: 4, code:'STD',name :'STANDARD',roomtype:'STD',validfrom:'21-February-2022',validto:'27-September-2023',mealplan:'EP',status:'X'},
    
    ];


    const tdata = () =>{

        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.code}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.roomtype}</td>
                        <td className="left">{detail.validfrom}</td>
                        <td className="left">{detail.validto}</td>
                        <td className="left">{detail.mealplan}</td>
                        <td className="left"><span className="asterik">{detail.status}</span></td>
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
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Room Rates</h3>
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
                                        <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><RoomRatesModal/></button></Link>
                                        </div>
                                    </div>
                            </div>

                        <table className="table table-striped request_table table-bordered">
                            <thead >
                                <tr>
                                <th className="thstyle left">Code</th>
                                    <th className="thstyle left">Name</th>
                                    <th className="thstyle left">Room Type</th>
                                    <th className="thstyle left">Valid From</th>
                                    <th className="thstyle left">Valid To</th>
                                    <th className="thstyle left">Meal Plan</th>
                                    <th className="thstyle left">Status</th>
                                </tr>
                            </thead>
                            {tdata()}

                        </table>

                    </div>
                </div>
            </div>

        );
}
 
export default RoomRates;