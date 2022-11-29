import React from 'react';
import { Link } from "react-router-dom";
import DiscountModal from '../Discount/DiscountModal';

function Discount() {

    const details =  
    [
    {id: 1, code:'GENERAL',name :'GeneralDiscount',validfrom:'01-October-2017',validto:'31-March-2018',calculation:'Absolute amount',discountamount:'100',description:'General Discount of 100 rs',discountfor:'ROOM'},
    {id: 2, code:'GENERAL',name :'GeneralDiscount',validfrom:'01-October-2017',validto:'31-March-2018',calculation:'Absolute amount',discountamount:'100',description:'General Discount of 100 rs',discountfor:'ROOM'},
    {id: 3, code:'GENERAL',name :'GeneralDiscount',validfrom:'01-October-2017',validto:'31-March-2018',calculation:'Absolute amount',discountamount:'100',description:'General Discount of 100 rs',discountfor:'ROOM'},
    {id: 4, code:'GENERAL',name :'GeneralDiscount',validfrom:'01-October-2017',validto:'31-March-2018',calculation:'Absolute amount',discountamount:'100',description:'General Discount of 100 rs',discountfor:'ROOM'},
    {id: 5, code:'GENERAL',name :'GeneralDiscount',validfrom:'01-October-2017',validto:'31-March-2018',calculation:'Absolute amount',discountamount:'100',description:'General Discount of 100 rs',discountfor:'ROOM'},
   ];


    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.code}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.validfrom}</td>
                        <td className="left">{detail.validto}</td>
                        <td className="left">{detail.calculation}</td>
                        <td className="left">{detail.discountamount}</td>
                        <td className="left">{detail.description}</td>
                        <td className="left">{detail.discountfor}</td>
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
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Discount</h3>
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
                                        <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><DiscountModal/></button></Link>
                                        </div>
                                    </div>
                            </div>

                        <table className="table table-striped request_table table-bordered">
                            <thead >
                                <tr>
                                    <th className="thstyle left">Code</th>
                                    <th className="thstyle left">Name</th>
                                    <th className="thstyle left">Valid From</th>
                                    <th className="thstyle left">Valid To</th>
                                    <th className="thstyle left">Calculation Mode</th>
                                    <th className="thstyle left">Discount Amount</th>
                                    <th className="thstyle left">Description</th>
                                    <th className="thstyle left">Discount For</th>
                                </tr>
                            </thead>
                            {tdata()}

                        </table>

                    </div>
                </div>
            </div>

        );
}
 
export default Discount;