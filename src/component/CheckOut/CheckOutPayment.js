// import React, { useState } from "react";
import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
// import Badge from 'react-bootstrap/Badge';
// import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function MyVerticallyCenteredModal(props) {
    // const [selected, setSelected] = useState("");
    // const changeHandler = e => {
    //   setSelected(e.target.value);
    // };
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Payment Methods
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        <div className="availability_check_bg">
        <h5 className="mb-2 mt-1 font-light">Guest/Room Details</h5>
        <hr className='gray'/>
       <div className="row">
       <div className="col-md-2">
            <label className="mb-2 gray ps-1">Id</label>
            <InputGroup className="mb-3">
            {/* <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text> */}
            <Form.Control
              placeholder="123"
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
          <div className="col-md-5">
            <label className="mb-2 gray ps-1">Guest Name</label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text>
            <Form.Control
              placeholder="Tom Hollend"
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
          <div className="col-md-5">
            <label className="mb-2 gray ps-1">Phone Number</label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-telephone-fill"></i></InputGroup.Text>
            <Form.Control
              placeholder="916766757575"
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
          
      </div>

      <div className="row">
      <div className="col-md-4">
          <label className="mb-2 gray ps-1">Room Number</label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-door-closed-fill"></i></InputGroup.Text>
            <Form.Control
              placeholder="FLR 1, ROOM 108"
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
          <div className="col-md-4">
          <label className="mb-2 gray ps-1">Room Type</label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-list-ul"></i></InputGroup.Text>
            <Form.Control
              placeholder="DELUX"
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
          <div className="col-md-4">
          <label className="mb-2 gray ps-1">Payable Amount</label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-cash-stack"></i></InputGroup.Text>
            <Form.Control
              placeholder="1500"
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
      </div>
      </div>

      <div className="availability_check_bg mt-3">
      <h5 className="mb-2 mt-1 font-light">Discount Details</h5>
        <hr className='gray'/>
      <div className="row">
          <div className="col-md-8">
          <label className="mb-2 gray ps-1">Available Discounts</label>

              <InputGroup className="mb-3">
                <Form.Control aria-label="Text input with dropdown button" />

                <DropdownButton
                  variant="primary"
                  title="Discounts"
                  id="input-group-dropdown-2"
                  align="end"
                >
                  <Dropdown.Item href="#">DISCOUNT50</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#">DISCOUNT100</Dropdown.Item>
                </DropdownButton>
              </InputGroup>
          
          </div>


          <div className="col-md-4">
          <label className="mb-2 gray ps-1">Amount after Discount</label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-percent"></i></InputGroup.Text>
            <Form.Control
              placeholder="1500"
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
      </div>
      </div>

      <div className="availability_check_bg mt-3">
      <h5 className="mb-2 mt-1 font-light">Payment Details</h5>
        <hr className='gray'/>
      <div className="row">
          <div className="col-md-12">


          <table className="table type-table">
                                <thead className="">
                                    <tr>
                                        <th>PAYMENT TYPE</th>
                                        <th>PAYMENT MODE</th>
                                        <th>SOURCE NAME</th>
                                        <th>AMOUNT</th>
                                        <th>RECIEVED FROM</th>
                                        <th>REMARKS</th>
                                        <th></th>
                                    </tr>
                                </thead>

      <tbody className='type-tbody'>

                       <tr>
                <td>
                    <select className="form-control form-select text-center">
                        <option>PAID-IN</option>
                        <option>OPTION-2</option>
                    </select>
                </td>
                <td>
                    <select className="form-control form-select text-center">
                        <option>CASH</option>
                        <option>CARD</option>
                        <option>UPI</option>
                    </select>
                </td>
                <td>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="Bank Name" disabled/>
                </td>
              
                <td className='rate-col'>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue=""/>
                </td>
                <td className='rate-col'>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue=""/>
                </td>
                <td className='rate-col'>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue=""/>
                </td>
                <td>
                <button className="btn btn-outline-danger btn-xs me-2" ><i className="bi bi-trash "></i></button>
                </td>
                    
                </tr>
        </tbody>
        </table>

    </div>
    </div>
    <div className="d-flex justify-content-center">
    <Button variant="success" size="sm"><i class="bi bi-plus-circle me-1"></i>Add Payment</Button>
    </div>
    </div>




      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}

function CheckOutPayment() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="success" className='me-2 mb-2' onClick={() => setModalShow(true)}>
      <i class="bi bi-credit-card-fill me-1"></i>Payment
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default CheckOutPayment;
