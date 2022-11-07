import React from 'react';
import './CheckInEdit.css';
import Form from 'react-bootstrap/Form';
// import { Link } from "react-router-dom";

function CheckInEditBilling() {
    return(
        <div>
            <div className="section">
                <div className="container-fluid">
                    {/* ----- Heading ------ */}
                    <div className='row'>
                        <div className='col-12'>
                        <Form>
                        <Form.Check
                            inline
                            label="Individual Billing"
                            name="group1"
                            type="radio"
                            id={`inline-radio-1`}
                        />
                        <Form.Check
                            inline
                            label="Group Billing"
                            name="group1"
                            type="radio"
                            id={`inline-radio-2`}
                        />
                        </Form>


                        </div>
                    </div>
                  

                    

                </div>
            </div>
        </div>
    );

}
 
export default CheckInEditBilling;
