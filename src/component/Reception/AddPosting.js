import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
import Table from 'react-bootstrap/Table';
// import DropdownButton from 'react-bootstrap/DropdownButton';



function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Posting
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
          <div className="row">

      <div className="col-lg-12">

      <div className="availability_check_bg">
      <h5 className="mb-2 mt-1 font-light">Add New Posting</h5>
        <hr className='gray'/>
      <div className="row">
         <div className="col-md-12">
          <label className="mb-2 gray ps-1">Date</label>
              <input type="date" className="form-control" name="date" id="date" />
          </div>
          <div className="col-md-6">
          <label className="mb-2 mt-1 gray ps-1">TXN Code</label>

          <select className="form-control form-select text-center">
                        <option>COMPANY</option>
                       
                    </select>
          
          </div>


          <div className="col-md-6">
          <label className="mb-2 mt-1 gray ps-1">Post As</label>

          <select className="form-control form-select text-center">
                        <option>COMPANY</option>
                        <option>CASH</option>
                
                    </select>
          </div>
          <div className="col-md-12">
          <label className="mb-2 mt-1 gray ps-1">Amount<b className='text-danger'>*</b></label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
            <Form.Control
              placeholder="0.00"
              aria-label=""
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          </div>
          <div className="col-md-12">
          <label className="mb-2 mt-1 gray ps-1">Base Amount</label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
            <Form.Control
              placeholder="0.00"
              aria-label=""
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          </div>
          <div className="col-md-4">
          <label className="mb-2 mt-1 gray ps-1">CGST</label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="0.00"
              aria-label=""
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
          </InputGroup>
          </div>
          <div className="col-md-4">
          <label className="mb-2 mt-1 gray ps-1">SGST</label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="0.00"
              aria-label=""
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
          </InputGroup>
          </div>
          <div className="col-md-4">
          <label className="mb-2 mt-1 gray ps-1">Cess</label>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="0.00"
              aria-label=""
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
          </InputGroup>
          </div>
          <div className="col-md-12">
          <label className="mb-2 mt-1 gray ps-1">Net Amount</label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
            <Form.Control
              placeholder="0.00"
              aria-label=""
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          </div>
          <div className="col-md-12">
          <label className="mb-2 mt-1 gray ps-1">Is Adjust</label>

          <select className="form-control form-select text-center">
                        <option>Yes</option>
                        <option>No</option>
                
                    </select>
          </div>
          <div className="col-md-12">
          <label className="mb-2 mt-1 gray ps-1">Remarks</label>
          <InputGroup>
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 d-flex justify-content-between ms-3">
                <Button variant="secondary" size="sm"><i class="bi bi-x-lg me-1"></i>Cancel</Button>
                <Button variant="success" size="sm"><i class="bi bi-check-lg me-1"></i>Save</Button>
            </div>
          </div>
      </div>
      </div>
      </div>
      </div>


      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AddPosting() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" className='me-2 mb-2' onClick={() => setModalShow(true)}>
      <i class="bi bi-send me-2"></i>Add Posting
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AddPosting;
