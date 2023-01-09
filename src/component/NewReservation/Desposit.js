import React from 'react';
// import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Deposit() {
    return(
        <div className="col-12 grey-bg px-2 py-2" >
                        <div className="row">
                            <div className="col-12 text-center">
                                <Button variant="primary"><i class="bi bi-piggy-bank-fill me-2"></i>Deposit</Button>
                            </div>
                        </div>

        </div>
    );
}
 
export default Deposit;