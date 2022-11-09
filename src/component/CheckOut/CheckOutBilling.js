import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './CheckOut.css';

const animatedComponents = makeAnimated();


function CheckOutBilling() {


    const options = [
        {value: "102", label:"FLR 1, ROOM 102 / Jack"},
        {value: "103", label:"FLR 1, ROOM 103 / Pam"},
    ];
    
    const [selected, setSelected] = useState("");
    const changeHandler = e => {
      setSelected(e.target.value);
    };

    return(
        <div className="CheckInEditBilling">
            {/* <div className="section"> */}
                <div className="container-fluid light-violet-bg">
                <h6 className='left mt-2 ps-3 grey'>Billing Type</h6>
                     <hr className='gray mb-4'/>
                   
                        <Form className='row py-3 sharer-bg mx-2'>
                            <div className="col-lg-6 border-right">
                        <Form.Check
                            inline
                            label="Individual Billing"
                            name="group1"
                            type="radio"
                            id="ind"
                            value="ind"
                            checked={selected === "ind"}
                            onChange={changeHandler}
                        />

                                    <div aria-hidden={selected !== "ind" ? true : false} className="total-bg mt-3">
                                        
                                         <Alert key="primary" variant="primary" className="mx-4 mt-3">
                                         <i class="bi bi-person-fill me-2"></i><b>Individual Billing</b> is Selected
                                        </Alert>

                                    <ListGroup as="ol" numbered className="mt-4 p-4">
                                    <p className="left gray">Guests will be billed listed down</p>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto left">
                                            <div className="fw-bold">Tom</div>
                                            FLR 1, ROOM 101
                                            </div>
                                            <Badge bg="light" className="ind-billing-badge">
                                            <i class="bi bi-check-circle-fill"></i>
                                            </Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto left">
                                            <div className="fw-bold">Jack</div>
                                            FLR 1, ROOM 102
                                            </div>
                                            <Badge bg="light" className="ind-billing-badge">
                                            <i class="bi bi-check-circle-fill"></i>
                                            </Badge>
                                        </ListGroup.Item>
                                        <ListGroup.Item
                                            as="li"
                                            className="d-flex justify-content-between align-items-start"
                                        >
                                            <div className="ms-2 me-auto left">
                                            <div className="fw-bold">Pam</div>
                                            FLR 1, ROOM 103
                                            </div>
                                            <Badge bg="light" className="ind-billing-badge">
                                            <i class="bi bi-check-circle-fill"></i>
                                            </Badge>
                                        </ListGroup.Item>
                                        </ListGroup>
                                        <Button variant="primary mb-2"><i class="bi bi-arrow-clockwise me-1"></i>Update</Button>

                                    </div>

                        </div>


                        <div className="col-lg-6">
                        <Form.Check
                            inline
                            label="Group Billing"
                            name="group1"
                            type="radio"
                            id="grp"
                            value="grp"
                            checked={selected === "grp"}
                            onChange={changeHandler}

                        />

                                    <div aria-hidden={selected !== "grp" ? true : false} className="total-bg mt-3">

                                            <Alert key="warning" variant="warning" className="mx-4 mt-3">
                                            <i class="bi bi-people-fill me-2"></i><b>Group Billing</b> is Selected
                                            </Alert>

                                            <div className="grp-bill-padding">
                                            <p className="left gray mt-4">Select the Guest to be Group billed</p>
                                            <Form.Select aria-label="Default select example">
                                                <option>Select the Room/Guest</option>
                                                <option value="1">FLR 1, ROOM 101 / Tom</option>
                                                <option value="2">FLR 1, ROOM 102 / Jack</option>
                                                <option value="3">FLR 1, ROOM 103 / Pam</option>
                                            </Form.Select>

                                            <p className="left gray mt-4">Select the Guests to be Transferred</p>

                                                <Select
                                                    closeMenuOnSelect={false}
                                                    components={animatedComponents}
                                                    // defaultValue={}
                                                    isMulti
                                                    options={options}
                                                    className="basic-multi-select"
                                                    classNamePrefix="select"
                                                    menuPlacement="auto"
                                                    menuPortalTarget={document.body}
                                                    menuPosition={'fixed'}
                                                />

                                                <Button variant="primary mb-2 mt-4"><i class="bi bi-check-lg me-1"></i>Transfer</Button>

                                            </div>
                                    </div>
                            </div>
                            

                        </Form>

                        <div className="row">
                            <div className="col-12">
                                <h6 className='left mt-4 ps-3 grey'>Deposit details</h6>
                                <hr className='gray mb-4'/>
                                <div className="sharer-bg pb-4 mx-2">
                                <Button variant="primary"><i class="bi bi-piggy-bank-fill me-2"></i>Deposit</Button>
                                </div>
                            </div>
                        </div>
                        


                </div>
            {/* </div> */}
        </div>
    );

}
 
export default CheckOutBilling;
