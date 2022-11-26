import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Facility.css';
import SwitchTog from '../Common/SwitchTog';

function FacilityModal() {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    <Button variant="primary" onClick={handleShow}>
     New Facility
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      style={{marginTop: 0}}
    >
      <Modal.Header className="bg-info" closeButton>
        <Modal.Title >Facility </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <table>
              <tr>
                  <td className="thwidth left">Code <span className="asterik">*</span></td>
                  <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
              </tr>
              <tr>
                  <td className="thwidth left">Name <span className="asterik">*</span></td>
                  <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
              </tr>
              <tr>
                  <td className="thwidth left">Description </td>
                  <td className="thwidth left"> 
                    <input type="text" class="form-control" id="pwd"  />
                  </td>
              </tr>
              <tr>
                  <td className="thwidth left">Facility Type </td>
                  <td className="thwidth left"> 
                    <select class="form-control" id="ft">
                        <option>TRAVEL</option>
                        <option>THEATRE</option>
                        <option>TREATMENT</option>
                        <option>STUDY</option>
                        <option>INHOUSE</option>
                    </select>
                  </td>
              </tr>
              <tr>
                  <td className="thwidth left">Payment </td>
                  <td className="thwidth left"><SwitchTog/></td>
              </tr>
              <tr>
                  <td className="thwidth left">Amount <span className="asterik">*</span></td>
                  <td className="thwidth left"> <input type="text" class="form-control" id="email"  /></td>
              </tr>
              <tr>
                  <td className="thwidth left">Account <span className="asterik">*</span></td>
                  <td className="thwidth left"> 
                        <select class="form-control" id="acc">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                  </td>
              </tr>
          </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>Save</Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default FacilityModal;