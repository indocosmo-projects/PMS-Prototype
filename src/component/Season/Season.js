import React from 'react';
import { Link } from "react-router-dom";
import SeasonModal from '../Season/SeasonModal';
import './Season.css';

function Season() {
        
    const details =  
    [
    {id: 1, code:'ALL',name :'All Season',color:'Green',startday:'1-January',endday:'31-December'},
   ];


    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.code}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.color}</td>
                        <td className="left">{detail.startday}</td>
                        <td className="left">{detail.endday}</td>
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
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Season</h3>
                        </div>

                           <div className="row">
                            <div className="col-sm-6">
                                <div className="input-group mb-3 ">
                                            <input type="text" className="form-control" placeholder="Search..." />
                                            <button className="btn btn-dark px-4" title="Search" ><i className ="bi bi-search"></i></button>
                                    </div>
                            </div>
                            <div className="col-sm-2">
                            <button className="btn btn-outline-danger px-4" title="" ><i className ="bi bi-calendar"></i>Calendar</button>
                            </div>
                                    <div className="col-sm-4">
                                        <div className="mb-3 ">
                                        <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><SeasonModal/></button></Link>
                                        </div>
                                    </div>
                            </div>

                        <table className="table table-striped request_table table-bordered">
                            <thead >
                                <tr>
                                    <th className="thstyle left">Code</th>
                                    <th className="thstyle left">Name</th>
                                    <th className="thstyle left">Color</th>
                                    <th className="thstyle left">Start Day</th>
                                    <th className="thstyle left">End Day</th>
                                </tr>
                            </thead>
                            {tdata()}

                        </table>

                    </div>
                </div>
            </div>

        );
}
 
export default Season;