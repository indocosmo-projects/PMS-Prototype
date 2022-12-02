import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Floor.css';

function FloorModal() {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    <Button variant="primary" onClick={handleShow}>
    New
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      style={{marginTop: 100}}
    >
      <Modal.Header className="bg-info" closeButton>
        <Modal.Title >Add Floor</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <table>
              <tr>
                  <td className="thwidth left">Code <span className="asterik">*</span></td>
                  <td className="thwidth left"> <input type="text" className="form-control" id="pwd"  /></td>
              </tr>
              <tr>
                  <td className="thwidth left">Name <span className="asterik">*</span></td>
                  <td className="thwidth left"> <input type="text" className="form-control" id="pwd"  /></td>
              </tr>
              <tr>
                  <td className="thwidth left">Description <span className="asterik">*</span></td>
                  <td className="thwidth left"> 
                   <textarea className="form-control" id="pwd" ></textarea>
                  </td>
              </tr>
          </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>Submit</Button>
        <Button variant="danger" onClick={handleClose}>Reset</Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default FloorModal;