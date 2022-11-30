import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Corporates.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function CorporatesModal() {

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
      style={{marginTop: 0}}
    >
      <Modal.Header className="bg-info" closeButton>
        <Modal.Title > Add Corporate </Modal.Title>
      </Modal.Header>
      <Modal.Body>
              <Tabs
                   defaultActiveKey="general"
                    id="justify-tab-example"
                    className="mt-4 mb-4 status-tab"
                    justify >
                    <Tab className='tab-content-bg tab-bg' eventKey="general" title={<span><i className="bi bi-house-door-fill me-2"/>General</span>}>
             
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
                        <td className="thwidth left">Address <span className="asterik">*</span></td>
                        <td className="thwidth left"> 
                              <textarea  class="form-control" id="pwd" ></textarea>
                        </td>
                    </tr>
                    </table>
                    
                    <div className='left bg-info p-1 rborder'>
                          <h5>Classification And Status</h5>
                      </div>

                    <table>
                    <tr>
                        <td className="thwidth left">Customer Classification <span className="asterik">*</span></td>
                        <td className="thwidth left"> 
                              <div class="form-group">
                                <select class="form-control" id="sel1">
                                  <option>Corporate</option>
                                  <option>Travel Agent</option>
                                </select>
                              </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="thwidth left">Customer Rating </td>
                        <td className="thwidth left"> 
                              <div class="form-group">
                                <select class="form-control" id="sel1">
                                  <option>A</option>
                                  <option>B</option>
                                  <option>C</option>
                                  <option>D</option>
                                  <option>E</option>
                                </select>
                              </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="thwidth left">Customer Status </td>
                        <td className="thwidth left"> 
                              <div class="form-group">
                                <select class="form-control" id="sel1">
                                  <option>Active</option>
                                  <option>Inactive</option>
                                </select>
                              </div>
                        </td>
                    </tr>
                  
                 
                </table>
                </Tab>
                <Tab className='tab-content-bg tab-bg' eventKey="contact" title={<span><i className="bi bi-house-door-fill me-2"/>Contact Details</span>}>
                        <table>
                          <tr>
                              <td className="thwidth left">Contact Person </td>
                              <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
                          </tr>
                          <tr>
                              <td className="thwidth left">Email Address </td>
                              <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
                          </tr>
                          <tr>
                              <td className="thwidth left">Mobile </td>
                              <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
                          </tr>
                          <tr>
                              <td className="thwidth left">Office Phone </td>
                              <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
                          </tr>
                          <tr>
                              <td className="thwidth left">Fax </td>
                              <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
                          </tr>
                          </table>
      
                      <div className='left bg-info p-1 rborder'>
                          <h5>Back Office Account</h5>
                      </div>
                          <table>
                          <tr>
                              <td className="thwidth left">Back Office Account No </td>
                              <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
                          </tr>
                        </table>
                  </Tab>
                </Tabs>
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

export default CorporatesModal;