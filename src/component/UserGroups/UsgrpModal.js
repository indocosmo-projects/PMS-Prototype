import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './UserGroups.css';

function UsgrpModal() {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    <Button variant="primary" onClick={handleShow}>
     Add Group
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      style={{marginTop: 100}}
    >
      <Modal.Header className="bg-info" closeButton>
        <Modal.Title >New User Group</Modal.Title>
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
                  <td className="thwidth left">Description <span className="asterik">*</span></td>
                  <td className="thwidth left"> 
                    <input type="text" class="form-control" id="pwd"  />
                  </td>
              </tr>
          </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>Save</Button>
        <Button variant="danger" onClick={handleClose}>Reset</Button>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default UsgrpModal;