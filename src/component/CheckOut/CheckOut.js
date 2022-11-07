import React, { Component } from 'react';
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

                        <div className="">
                        
                        </div>

                    </div>
                </div>
            </div>
        );
}
 
export default CheckOut;