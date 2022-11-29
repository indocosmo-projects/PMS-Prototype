import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import './Discount.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function DiscountModal() {

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
        <Modal.Title >New User Group</Modal.Title>
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
                            <td className="thwidth left"> <input type="text" className="form-control" id="pwd"  /></td>
                        </tr>
                        <tr>
                            <td className="thwidth left">Name <span className="asterik">*</span></td>
                            <td className="thwidth left"> <input type="text" className="form-control" id="pwd"  /></td>
                        </tr>
                        <tr>
                            <td className="thwidth left">Description <span className="asterik">*</span></td>
                            <td className="thwidth left"> 
                              <input type="text" className="form-control" id="pwd"  />
                            </td>
                        </tr>
                    </table>
                    <div >
                            <div className='left bg-info p-1 rborder'>
                                <h5>Validity Period</h5>
                            </div>
                    </div>
                      <table>
                        <tr>
                            <td className="thwidth left">From <span className="asterik">*</span></td>
                            <td className="thwidth left"> <input type="date" className="form-control" id="pwd"  /></td>
                        </tr>
                        <tr>
                            <td className="thwidth left">To <span className="asterik">*</span></td>
                            <td className="thwidth left"> <input type="date" className="form-control" id="pwd"  /></td>
                        </tr>
                      </table>

                    </Tab>
                    <Tab className='tab-content-bg tab-bg' eventKey="detail" title={<span><i className="bi bi-house-door-fill me-2"/>Details</span>}>
             
                    <table>
                        <tr>
                            <td className="thwidth left">Discount Type <span className="asterik">* </span></td>
                            <td className="thwidth left"> 
                                <div class="form-group">
                                  <select class="form-control" id="sel1">
                                    <option>GENERAL DISCOUNT</option>
                                    <option>PLAN BASED DISCOUNT</option>
                                  </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="thwidth left">Discount For <span className="asterik">* </span></td>
                            <td className="thwidth left">
                              <div class="form-group">
                                  <select class="form-control" id="sel1">
                                    <option>ROOM</option>
                                    <option>FOOD</option>
                                  </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="thwidth left">Rate Plan <span className="asterik">*</span></td>
                            <td className="thwidth left"> 
                              <div class="form-group">
                                  <select class="form-control" id="sel1">
                                    <option>STD</option>
                                    <option>CLA</option>
                                    <option>ECN</option>
                                  </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="thwidth left">Calculation Mode <span className="asterik">*</span></td>
                            <td className="thwidth left"> 
                              <div class="form-group">
                                  <select class="form-control" id="sel1">
                                    <option>ABSOLUTE MOUNT</option>
                                    <option>PERCENTAGE</option>
                                  </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="thwidth left">Discount Amount <span className="asterik">*</span></td>
                            <td className="thwidth left"> 
                              <input type="text" className="form-control" id="pwd"  value="0" />
                            </td>
                        </tr>
                    </table>
             </Tab>
          </Tabs>
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

export default DiscountModal;