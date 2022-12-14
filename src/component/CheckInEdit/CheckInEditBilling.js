import React, { useState } from "react";
import './CheckInEdit.css';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
// import Select from 'react-select';
// import makeAnimated from 'react-select/animated';

// const animatedComponents = makeAnimated();

function CheckInEditBilling() {
    
    const [selected, setSelected] = useState("");
    const changeHandler = e => {
      setSelected(e.target.value);
    };
    // const options = [
    //     {value: "101", label:"FLR 1, ROOM 101"},
    //     {value: "202", label:"FLR 2, ROOM 202"},
    //     {value: "303", label:"FLR 3, ROOM 303"},
    //     {value: "304", label:"FLR 3, ROOM 303"},
    //     {value: "305", label:"FLR 3, ROOM 303"},
    //     {value: "305", label:"FLR 3, ROOM 303"},
    // ];


    return(
        <div className="CheckInEditBilling">
            {/* <div className="section"> */}
                <div className="container-fluid">
                    <div className="availability_check_bg light-violet-bg">
                <div className='d-flex flex-row justify-content-between pt-2'>
                <h6 className='left ps-3 grey'>Billing Type</h6>
                <p className='pe-3'>* Visible only for group</p>
                </div>
                     <hr className='gray mb-4 mt-0'/>
                   
                        <Form className='row py-3 mx-2'>
                            <div className="col-lg-6 border-right">
                        <Form.Check
                            className="form-check-bg"
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
                                            Cras justo odio
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
                                            Cras justo odio
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
                                            Cras justo odio
                                            </div>
                                            <Badge bg="light" className="ind-billing-badge">
                                            <i class="bi bi-check-circle-fill"></i>
                                            </Badge>
                                        </ListGroup.Item>
                                        </ListGroup>
                                    </div>

                        </div>


                        <div className="col-lg-6">
                        <Form.Check
                        className="form-check-bg"
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
                                                <option>Select the Guest</option>
                                                <option value="1">Tom</option>
                                                <option value="2">Jack</option>
                                                <option value="3">Pam</option>
                                            </Form.Select>
                                            </div>
                                    </div>

                            </div>

                        </Form>
                        </div>
                        

                        {/* <div className="availability_check_bg mt-3">
                        <div className="row">
                            <div className="col-12">
                                <h6 className='left ps-3 grey py-2'>Payment Details</h6>
                                <hr className='gray mb-4 mt-0'/>

                                <div className="col-12">
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
                            </div>
                        </div>
                        </div>
                        </div> */}

                        <div className="availability_check_bg mt-3">
                        <div className="row">
                            <div className="col-12">
                                <h6 className='left ps-3 grey py-2'>Payment Details</h6>
                                <hr className='gray mb-4 mt-0'/>

                                <div className="form-group mb-3 d-flex justify-content-center">
                                    <label className="text-left" htmlFor="source">Payment method<b className='text-danger'>*</b></label>
                                            <Form.Select className="payment-width" aria-label="Default select example">
                                            <option value="1">INDIVIDUAL</option>
                                            <option value="2">CORPORATE</option>
                                            </Form.Select>
                                 
                                </div>

                               
                        </div>
                        </div>
                        </div>

                                
                        <div className="availability_check_bg mt-3">
                        <div className="row">
                            <div className="col-12">
                                <h6 className='left ps-3 grey py-2'>Deposit Details</h6>
                                <hr className='gray mb-4 mt-0'/>
                                <div className="sharer-bg pb-4 mx-2">
                                <Button variant="primary"><i class="bi bi-piggy-bank-fill me-2"></i>Deposit</Button>
                                </div>
                            </div>
                        </div>
                        </div>
                        


                </div>
        </div>
    );

}
 
export default CheckInEditBilling;
