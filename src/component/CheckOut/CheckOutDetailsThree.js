import React from 'react';
import './CheckOut.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import CheckOutPayment from './CheckOutPayment';


function CheckOutDetailsThree() {
    
    return(
            <div>
                <div className="container-fluid">
                
                        <div className='row'>
                            <div className='col-12'>
                                    <Card className='left'>
                                        <Card.Header className='d-flex flex-row'><h4 className='mt-1 me-2 header'><i class="bi bi-door-closed-fill me-1"></i>FLR-1, ROOM</h4><h2><Badge bg="primary">103</Badge></h2></Card.Header>
                                        <Card.Body>
                                            <Card.Title className='gray'><i class="bi bi-person-fill me-2"></i>Pam</Card.Title>
                                            <Card.Text className='gray mb-4'>
                                        <div className='row'>
                                        <div className='col-lg-6'>

                                                <div className="form-group mb-3">
                                                    <label className="text-left" htmlFor="arrival">Arrival</label>
                                                    <input type="datetime-local" className="form-control arrival" name="arrival" id="arrival" disabled/>
                                                </div>
                                        </div>
                                        <div className='col-lg-6'>

                                                <div className="form-group">
                                                    <label className="text-left" htmlFor="departure">Departure</label>
                                                    <input type="datetime-local" className="form-control departure" name="departure" id="departure" disabled/>
                                                </div>
                                        </div>
                                        </div>

                                        <div className='row'>
                                        <div className='col-lg-6'>

                                                    <label className="text-left" htmlFor="balance">Balance</label>
                                                    <input type="" className="form-control" name="balance" id="balance" value="₹ 1500" disabled/>
                                                
                                        </div>
                                        <div className='col-lg-6'>
                                                
                                                    <label className="text-left" htmlFor="status">Status</label>
                                                    <input type="" className="form-control" name="status" id="status" value="Unpaid" disabled/>
                                                
                                        </div>
                                        </div>
                                            </Card.Text>
                                           {/*.......Payment Button........ */}  <CheckOutPayment/> 
                                            <Button variant="danger me-2"><i class="bi bi-box-arrow-right me-1"></i>Checkout</Button>
                                            <Button variant="warning me-2" disabled><i class="bi bi-receipt me-1"></i>Invoice</Button>

                                        </Card.Body>
                                    </Card>
                            </div>
                        </div>
                                  
                                
                </div>
            </div>
    );

}
 
export default CheckOutDetailsThree;
