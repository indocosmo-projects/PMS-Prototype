import React from 'react';
import { Link } from "react-router-dom";
import './ShiftItems.css';
import ShiftItemsModal from '../ShiftItems/ShiftItemsModal';

function ShiftItems() {

    const details =  
    [
    {id: 1, code:'SHIFT4',name :'SHIFT4',starttime:'21:36',endtime:'21:37'},
    {id: 2, code:'SHIFT2',name :'SHIFT2',starttime:'21:36',endtime:'21:37'},
    {id: 3, code:'SHIFT3',name :'SHIFT3',starttime:'21:36',endtime:'21:37'},
    {id: 4, code:'SHIFT1',name :'SHIFT1',starttime:'21:36',endtime:'21:37'},
    {id: 5, code:'SHIFT5',name :'SHIFT5',starttime:'21:36',endtime:'21:37'},
   
   ];


    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.code}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.starttime}</td>
                        <td className="left">{detail.endtime}</td>
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
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Department</h3>
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
                                        <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><ShiftItemsModal/></button></Link>
                                        </div>
                                    </div>
                            </div>

                        <table className="table table-striped request_table table-bordered">
                            <thead >
                                <tr>
                                    <th className="thstyle left">Code</th>
                                    <th className="thstyle left">Name</th>
                                    <th className="thstyle left">Start Time</th>
                                    <th className="thstyle left">End Time</th>
                                </tr>
                            </thead>
                            {tdata()}

                        </table>

                    </div>
                </div>
            </div>
        );
}
 
export default ShiftItems;