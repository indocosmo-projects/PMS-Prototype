import React, { useState } from "react";
// import Form from 'react-bootstrap/Form';
// import Badge from 'react-bootstrap/Badge';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
import './CheckOut.css';


function CheckOutConfirm() {
    
    const [selected, setSelected] = useState("");
    const changeHandler = e => {
      setSelected(e.target.value);
    };

    return(
        
                <div className="container-fluid">
                
                   
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
                                    <button type="button" className="btn btn-primary right"><i class="bi bi-cart4"></i>  Check Out</button>
                                </div>
                            </div>
                    </div>
                        


                </div>
      
    );

}
 
export default CheckOutConfirm;
