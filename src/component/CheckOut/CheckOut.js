import React from 'react';
import './CheckOut.css';

function CheckOut() {
        return(
            <div>
                <div className="section">
                    <div className="container-fluid formcontent">
                        {/* ----- Heading ------ */}
                        <div>
                            <h5 className="header"> Check Out </h5>
                        </div>
                        <div className="btnright">
                            <ul className="ullist">
                                <li><button className="btn btn-success m-1">Back</button></li>
                            </ul>
                        </div>

                         <div className="bordertopbottom">
                            <h6 className="header"> Room / Guest </h6>
                        </div>

                        <div className="box">
                            <div className="row">
                                <div className="col-sm-4">
                                    <div className="bg-info roomcol text-white p-1" >
                                        <h3>CHECK-OUT</h3>
                                        <h2 className="roomno"><b>104</b></h2>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <div className="thick">
                                        <table>
                                            <tr>
                                                <th className="tdwidth"><h4>Name:</h4></th>
                                                <th className="tdwidth"><h4>Paulose</h4></th>
                                            </tr>
                                            <tr>
                                                <td className="tdwidth"><h5>Balance:</h5></td>
                                                <td className="tdwidth"><h5>₹ 0</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="tdwidth"><h5>Departure:</h5></td>
                                                <td className="tdwidth"><h5>22-05-2022</h5></td>
                                            </tr>
                                            <tr>
                                                <td className="tdwidth"><h5>Status:</h5></td>
                                                <td className="tdwidth"></td>
                                            </tr>
                                        </table>
                                        <div >
                                            <button className="btn btn-primary mt-3">Print Bill</button>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="container-fluid formcontent mt-3 ">
                            <div className="hght">
                                <h5 className="left p-2 bg-primary roundcorner text-white">Confirm</h5>
                                <div class="form-check left">
                                    <label class="form-check-label">
                                        <input type="checkbox" class="form-check-input" value="" />
                                        I'm sure to check-out the selected rooms
                                    </label>
                                </div>
                                <div >
                                    <button type="button" className="btn btn-primary right">Check Out</button>
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        );
}
 
export default CheckOut;