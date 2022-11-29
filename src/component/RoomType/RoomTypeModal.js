import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './RoomType.css';

function RoomTypeModal() {

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
      style={{marginTop: 10}}
    >
      <Modal.Header className="bg-info" closeButton>
        <Modal.Title >Room Type</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <table>
              <tr>
                  <td className="thwidth left">Code <span className="asterik">*</span></td>
                  <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
    
                  <td className="thwidth left">Name <span className="asterik">*</span></td>
                  <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
              </tr>
              <tr>
                  <td className="thwidth left">Overbooking % </td>
                  <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
    
                  <td className="thwidth left">Display order </td>
                  <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
              </tr>
              </table>
              <table>
              <tr>
                  <td className="thwidth left">Description</td>
                  <td className="thwidth left"><input type="text" class="form-control " id="pwd"  /></td>
                  <td className="thwidth left"></td>
                  <td className="thwidth left"></td>
              </tr>
          </table>
                    <div >
                      <div className='left bg-info p-1 rborder'>
                          <h5>Applicable occupancies</h5>
                      </div>

                            <table>
                                <tr>
                                    <td className="thwidth left">Single <input type="checkbox" id="chk" className="chk"/> </td>
                                    <td className="thwidth left">Double <input type="checkbox" id="chk" className="chk"/> </td>
                                    <td className="thwidth left">Triple <input type="checkbox" id="chk" className="chk"/> </td>
                                    <td className="thwidth left">Quad <input type="checkbox" id="chk" className="chk"/> </td>
                                </tr>
                            </table>
                        </div>


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

export default RoomTypeModal;