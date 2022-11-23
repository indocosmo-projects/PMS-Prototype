import React from "react";
// import Form from 'react-bootstrap/Form';
// import Badge from 'react-bootstrap/Badge';
// import ListGroup from 'react-bootstrap/ListGroup';
// import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import './CheckOut.css';


function CheckOutConfirm() {
    
    return(
        
                <div className="container-fluid d-flex justify-content-center">
                                
                                    {/* <div>
                                        <input type="checkbox" className="form-check-input me-2" value="confirm" id="confirm"/>
                                        <label for="confirm">I'm sure to check-out the selected rooms</label>
                                        </div> */}

                                {/* <button type="button" className="btn btn-primary"></button> */}
                                <Button variant="primary" size="lg"><i class="bi bi-box-arrow-right me-2"></i>Check Out</Button>


                </div>
      
    );

}
 
export default CheckOutConfirm;
