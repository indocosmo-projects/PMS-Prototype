import React from 'react';
import { Link } from "react-router-dom";
import CurrencyModal from '../Currency/CurrencyModal';
import './Currency.css';

function Currency() {
    
    const details =  
    [
    {id: 1, code:'INR',name :'Indian Rupees',symbol:'Rs',decimal:'2',exchangerate:'60',description:'YEN'},
    {id: 2, code:'YEN',name :'Japaneese Yen',symbol:'Y',decimal:'2',exchangerate:'60',description:'YEN'},
    {id: 3, code:'EURO',name :'Euro',symbol:'',decimal:'2',exchangerate:'80',description:'hjkh'},
   ];


    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.code}</td>
                        <td className="left">{detail.name}</td>
                        <td className="left">{detail.symbol}</td>
                        <td className="left">{detail.code}</td>
                        <td className="left">{detail.name}</td>
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
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Currency</h3>
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
                                        <Link ><button className="btn btn-primary" title="New Reservation" style={{float : 'right'}}><i className ="bi bi-plus-circle me-2"></i><CurrencyModal/></button></Link>
                                        </div>
                                    </div>
                            </div>

                        <table className="table table-striped request_table table-bordered">
                            <thead >
                                <tr>
                                    <th className="thstyle left">Code</th>
                                    <th className="thstyle left">Name</th>
                                    <th className="thstyle left">Symbol</th>
                                    <th className="thstyle left">Decimal</th>
                                    <th className="thstyle left">Exchange Rate</th>
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

 
export default Currency;