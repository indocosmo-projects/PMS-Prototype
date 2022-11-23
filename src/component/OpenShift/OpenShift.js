import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './OpenShift.css';


function OpenShift() {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        New Request
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        style={{marginTop: 100}}
      >
        <Modal.Header className="bg-info" closeButton>
          <Modal.Title >Open Shift</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <table>
                <tr>
                    <td className="thwidth left">Hotel Date</td>
                    <td className="thwidth left">21-05-2022</td>
                </tr>
                <tr>
                    <td className="thwidth left">User</td>
                    <td className="thwidth left">Admin</td>
                </tr>
                <tr>
                    <td className="thwidth left">Shift</td>
                    <td className="thwidth left"> 
                            <Form.Select aria-label="Default select example">
                                <option value="0">SELECT</option>
                                <option value="1">Shift 1</option>
                                <option value="2">Shift 2</option>
                                <option value="3">Shift 3</option>
                            </Form.Select></td>
                </tr>
                <tr>
                    <td className="thwidth left">Password</td>
                    <td className="thwidth left">
                          <input type="text" class="form-control" id="pwd"  />
                    </td>
                </tr>
                <tr>
                    <td className="thwidth left">Floating Amount</td>
                    <td className="thwidth left">
                          <input type="text" class="form-control" id="amt"  />
                    </td>
                </tr>
            </table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Save</Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
 
export default OpenShift;