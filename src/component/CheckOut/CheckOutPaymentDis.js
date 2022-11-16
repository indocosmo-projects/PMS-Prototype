import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';


function MyVerticallyCenteredModal(props) {
    const [selected, setSelected] = useState("");
    const changeHandler = e => {
      setSelected(e.target.value);
    };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Payment Methods
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Available payment methods</h5>
        <p>
          
        </p>
        <Form className='row py-3 mx-2'>
            <div className="col-lg-12 mb-4">
        <Form.Check
                            inline
                            label="Card Payment"
                            name="group2"
                            type="radio"
                            id="cardpay"
                            value="cardpay"
                            checked={selected === "cardpay"}
                            onChange={changeHandler}
                        />

                                    <div aria-hidden={selected !== "cardpay" ? true : false} className="total-bg mt-3">
                                        
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


                        <div className="col-lg-12">
                        <Form.Check
                            inline
                            label="Internet Banking"
                            name="group2"
                            type="radio"
                            id="internetbank"
                            value="internetbank"
                            checked={selected === "internetbank"}
                            onChange={changeHandler}

                        />

                                    <div aria-hidden={selected !== "internetbank" ? true : false} className="total-bg mt-3">

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



      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function CheckOutPaymentDis() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="success" className='me-2 mb-2' onClick={() => setModalShow(true)} disabled>
      <i class="bi bi-credit-card-fill me-1"></i>Payment
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default CheckOutPaymentDis;
