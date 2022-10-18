import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function RoomRateTypeDiscount() {
        return(
                <div>
                    <div className="padcolumn mt-1 total-bg" >
                        {/* <div className="table"> */}
                        <h4 className='left ms-2 mt-2'>Payment Details</h4>
                            <table className="table type-table">
                                <thead className="">
                                    <tr>
                                    
                                        <th>Room Type</th>
                                        <th>Discount</th>
                                        <th>Single</th>
                                        <th>Double</th>
                                        <th>Tripple</th>
                                        <th>Total</th>
                                        <th>Discount Amt</th>
                                        <th>Sub Total</th>

                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                
                        <tbody>
                        
                            <tr>
                                <td>
                                    <select className="form-control form-select text-center">
                                        <option> DLX</option>
                                        <option> STND</option>
                                        <option> 3</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-control form-select text-center">
                                        <option> RACKRATE</option>
                                        <option> 2</option>
                                        <option> 3</option>
                                    </select>
                                </td>
                                <td>
                                <InputGroup className="mb-3">
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-dash"></i>
                                        </Button>
                                        <Form.Control className='text-center'
                                            placeholder="1"
                                            aria-label="1"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-plus-lg"></i>
                                        </Button>
                                    </InputGroup>
                                 
                                </td>
                                <td>
                                <InputGroup className="mb-3">
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-dash"></i>
                                        </Button>
                                        <Form.Control className='text-center'
                                            placeholder="1"
                                            aria-label="1"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-plus-lg"></i>
                                        </Button>
                                    </InputGroup>
                                 
                                </td>
                                <td>
                                <InputGroup className="mb-3">
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-dash"></i>
                                        </Button>
                                        <Form.Control className='text-center'
                                            placeholder="1"
                                            aria-label="1"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-plus-lg"></i>
                                        </Button>
                                    </InputGroup>
                                 
                                </td>
                                <td>
                                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                </td>
                                <td>
                                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                </td>
                                <td>
                                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-xs"><i className="bi bi-trash "></i></button>
                                </td>
                            </tr>
                            <tr className="">
                                <td>
                                    <select className="form-control form-select text-center">
                                        <option> DLX</option>
                                        <option> STND</option>
                                        <option> 3</option>
                                    </select>
                                </td>
                                <td>
                                    <select className="form-control form-select text-center">
                                        <option> RACKRATE</option>
                                        <option> 2</option>
                                        <option> 3</option>
                                    </select>
                                </td>

                                <td>
                                    <InputGroup className="mb-3">
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-dash"></i>
                                        </Button>
                                        <Form.Control className='text-center'
                                            placeholder="1"
                                            aria-label="1"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-plus-lg"></i>
                                        </Button>
                                    </InputGroup>
                                </td>

                                <td>
                                <InputGroup className="mb-3">
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-dash"></i>
                                        </Button>
                                        <Form.Control className='text-center'
                                            placeholder="1"
                                            aria-label="1"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-plus-lg"></i>
                                        </Button>
                                    </InputGroup>
                                 
                                </td>
                                <td>
                                <InputGroup className="mb-3">
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-dash"></i>
                                        </Button>
                                        <Form.Control className='text-center'
                                            placeholder="1"
                                            aria-label="1"
                                            aria-describedby="basic-addon2"
                                        />
                                        <Button variant="btn btn-secondary" id="button-addon2">
                                        <i className="bi bi-plus-lg"></i>
                                        </Button>
                                    </InputGroup>
                                 
                                </td>
                                <td>
                                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                </td>
                                <td>
                                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                </td>
                                <td>
                                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                                </td>
                                <td>
                                    <button className="btn btn-primary btn-xs"><i className="bi bi-plus" ></i></button>
                                </td>
                            </tr>
                            {/* <tr className="theadpadding">
                                <td colSpan="7" align="right">
                                    TOTAL
                                </td>
                                <td align="right">
                                    5000
                                </td>
                            
                                <td>
                                    <button className="btn btn-success btn-xs"><i className="bi bi-download"></i></button>
                                </td>
                            </tr> */}
                            
                        </tbody>
                            </table>
                        {/* </div> */}
                            <div className='row'>
                            <div className='col-lg-8 col-md-8 col-3 d-flex justify-content-end total-text'>TOTAL</div>
                            <div className='col-lg-2 col-md-2 col-3 d-flex justify-content-center total-text'>50000</div>
                            <div className='col-lg-2 col-md-2 col-6 d-flex justify-content-center'><button className="btn btn-outline-secondary">Download<i className="bi bi-download ms-2"></i></button></div>
                            </div>
                    </div>
                </div>
        );
}
 
export default RoomRateTypeDiscount;