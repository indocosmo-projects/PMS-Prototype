import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';



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
          Posting Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
          <div className="row">
            <div className="col-lg-6">
        <div className="availability_check_bg">

        <h5 className="mb-2 mt-1 font-light">Guest/Room Details</h5>
        <hr className='gray'/>
       <div className="row">
       <div className="col-md-12">
            <label className="mb-2 gray ps-1">Id</label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-hash gray"></i></InputGroup.Text>
            <Form.Control
              placeholder="123"
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
          <div className="col-md-12">
          <label className="mb-2 gray ps-1">Room Number & Type</label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-door-closed-fill gray"></i></InputGroup.Text>
            <Form.Control
              placeholder="FLR 1, ROOM 108"
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
          {/* <div className="col-md-4">
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
          </div> */}
      </div>

          <div className="col-md-12">
            <label className="mb-2 gray ps-1">Guest Name</label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill gray"></i></InputGroup.Text>
            <Form.Control
              placeholder="Tom Hollend"
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
          <div className="col-md-12">
            <label className="mb-2 gray ps-1">Phone Number</label>
            <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1"><i class="bi bi-telephone-fill gray"></i></InputGroup.Text>
            <Form.Control
              placeholder="916766757575"
              aria-label="Username"
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
          
      </div>
      </div>


      <div className="col-lg-6">

      <div className="availability_check_bg">
      <h5 className="mb-2 mt-1 font-light">Add New Posting</h5>
        <hr className='gray'/>
      <div className="row">
         <div className="col-md-12 mb-2">
          <label className="mb-2 gray ps-1">Date</label>
              <input type="date" className="form-control" name="date" id="date" />
          </div>
          <div className="col-md-6">
          <label className="mb-2 mt-1 gray ps-1">TXN Code</label>

                  <select className="form-control form-select">
                        <option>R-C</option>
                        <option>REFUND</option>
                        <option>E-B</option>
                        <option>POST AS-net amount/Base Amount</option>
                        <option>POS</option>
                    </select>
          
          </div>


          <div className="col-md-6">
          <label className="mb-2 mt-1 gray ps-1">Post As</label>

          <select className="form-control form-select">
                        <option>Net Amount</option>
                        <option>Base Amount</option>
                
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
              disabled
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
              disabled
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
              disabled
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
              disabled
            />
            <InputGroup.Text id="basic-addon1">%</InputGroup.Text>
          </InputGroup>
          </div>
          <div className="col-md-6">
          <label className="mb-2 mt-1 gray ps-1">Net Amount</label>
          <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">₹</InputGroup.Text>
            <Form.Control
              placeholder="0.00"
              aria-label=""
              aria-describedby="basic-addon1"
              disabled
            />
          </InputGroup>
          </div>
          <div className="col-md-6">
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



      <div className="availability_check_bg mt-3">
      <h5 className="mb-2 mt-1 font-light">Postings</h5>
        <hr className='gray'/>
      <div className="row">
          <div className="col-md-12">


          <Table variant="table table-bordered" responsive="sm">
                                <thead className="">
                                    <tr>
                                        <th>Txn Date <i className="bi bi-arrow-down-up sort-btn"></i></th>
                                        <th>Txn ID <i className="bi bi-arrow-down-up sort-btn"></i></th>
                                        <th>Transaction Type</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>

      <tbody className='type-tbody'>

                       <tr>
                <td>
                    12-11-2022
                </td>
                <td>
                    123
                </td>
                <td>
                    Room Charges
                </td>
              
                <td>
                    5000
                </td>
                <td className="green">
                  ACTIVE
                </td>
                </tr>
        </tbody>
        </Table>
          
    </div>
    </div>
    <div className="row d-flex justify-content-between">
                                    
                    {/*}                <div className="col-4 d-flex justify-content-start" ><i class="bi bi-eye-fill me-2"></i>Showing 1 to {recordno} of {details.length} entries</div>
                                {/* <div className="col-6"></div> */}
                                <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-outline-dark m-1 grey-border"><i class="bi bi-chevron-double-left"></i><span class="hide-element"></span></button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><i class="bi bi-chevron-left"></i><span class="hide-element"></span></button>
                                    <button className="btn btn-outline-dark m-1 grey-border active">1</button>
                                    <button className="btn btn-outline-dark m-1 grey-border">2</button>
                                    <button className="btn btn-outline-dark m-1 grey-border">3</button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><span class="hide-element"></span><i class="bi bi-chevron-right"></i></button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><span class="hide-element"></span><i class="bi bi-chevron-double-right"></i></button>
                                    
                                </div>
                            </div>

    {/* <div className="d-flex justify-content-center">
    <Button variant="success" size="sm"><i class="bi bi-plus-circle me-1"></i>Add Payment</Button>
    </div> */}
    </div>

      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between">
        <Button variant="secondary" onClick={props.onHide}><i class="bi bi-caret-left-fill me-1"></i>Back</Button>
        <Button onClick={props.onHide}><i class="bi bi-arrow-repeat me-1"></i>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}

function Posting() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary btn-sm" className='me-2' onClick={() => setModalShow(true)}>
      <i class="bi bi-clipboard2-check me-2"></i>Posting
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default Posting;
