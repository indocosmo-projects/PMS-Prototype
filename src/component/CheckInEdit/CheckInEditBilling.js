import React, { useState } from "react";
import './CheckInEdit.css';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';



function CheckInEditBilling() {
    
    const [selected, setSelected] = useState("");
    const changeHandler = e => {
      setSelected(e.target.value);
    };

    return(
        <div className="CheckInEditBilling">
            <div className="section">
                <div className="container-fluid">
                   
                        <Form className='row'>
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

                                    <div aria-hidden={selected !== "ind" ? true : false}>
                                        
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
                            inline
                            label="Group Billing"
                            name="group1"
                            type="radio"
                            id="grp"
                            value="grp"
                            checked={selected === "grp"}
                            onChange={changeHandler}

                        />

                                    <div aria-hidden={selected !== "grp" ? true : false}>

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
            </div>
        </div>
    );

}
 
export default CheckInEditBilling;
