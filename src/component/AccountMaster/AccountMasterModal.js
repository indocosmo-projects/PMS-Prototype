import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SwitchTog from '../Common/SwitchTog';

import './AccountMaster.css';

function AccountMasterModal() {

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
      style={{marginTop: -20}}
    >
      <Modal.Header className="bg-info" closeButton>
        <Modal.Title >Add Account Master</Modal.Title>
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
                  <td className="thwidth left">Description</td>
                  <td className="thwidth left"> 
                    <input type="text" className="form-control" id="pwd"  />
                  </td>
              </tr>
              <tr>
                  <td className="thwidth left">Txn Type <span className="asterik">*</span></td>
                  <td className="thwidth left"> 
                  <div className="form-group">
                        <select className="form-control" id="sel1">
                          <option>Room Expense</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                  </td>
              </tr>
              <tr>
                  <td className="thwidth left">Tax Code <span className="asterik">*</span></td>
                  <td className="thwidth left"> 
                    <div className="form-group">
                        <select className="form-control" id="sel1">
                          <option>No - Tax</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </div>
                  </td>
              </tr>
              <tr>
                  <td className="thwidth left">Service Charge % <span className="asterik">*</span></td>
                  <td className="thwidth left"> 
                    <input type="text" className="form-control" id="pwd" value="0" />
                  </td>
              </tr>
              <tr>
                  <td className="thwidth left">HSSN Code <span className="asterik">*</span></td>
                  <td className="thwidth left"> 
                    <input type="text" className="form-control" id="pwd" value="0" />
                  </td>
              </tr>
              <tr>
                  <td className="thwidth left">Credit days</td>
                  <td className="thwidth left"> 
                    <input type="text" className="form-control" id="pwd" value="0" />
                  </td>
              </tr>
              <tr>
                  <td className="thwidth left">Include Tax </td>
                  <td className="thwidth left"> 
                    <SwitchTog/>
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

export default AccountMasterModal;