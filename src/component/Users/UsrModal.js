import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Users.css';
import SwitchTog from '../Common/SwitchTog';

function UsrModal() {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
  <>
    <Button variant="primary" onClick={handleShow}>
     Add User
    </Button>

    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      style={{marginTop: 0}}
    >
      <Modal.Header className="bg-info" closeButton>
        <Modal.Title >New User </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <table>
              <tr>
                  <td className="thwidth left">Login Id <span className="asterik">*</span></td>
                  <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
              </tr>
              <tr>
                  <td className="thwidth left">Password <span className="asterik">*</span></td>
                  <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
              </tr>
              <tr>
                  <td className="thwidth left">User Group <span className="asterik">*</span></td>
                  <td className="thwidth left"> 
                    <input type="text" class="form-control" id="pwd"  />
                  </td>
              </tr>
              <tr>
                  <td className="thwidth left">Status </td>
                  <td className="thwidth left"> 
                    <SwitchTog/>
                  </td>
              </tr>
              <tr>
                  <td className="thwidth left">Name <span className="asterik">*</span></td>
                  <td className="thwidth left"> <input type="text" class="form-control" id="name"  /></td>
              </tr>
              <tr>
                  <td className="thwidth left">Email <span className="asterik">*</span></td>
                  <td className="thwidth left"> <input type="text" class="form-control" id="email"  /></td>
              </tr>
              <tr>
                  <td className="thwidth left">Is Cashier </td>
                  <td className="thwidth left"> 
                      <SwitchTog/>
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

export default UsrModal;