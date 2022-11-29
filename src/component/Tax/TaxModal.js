import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Tax.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function TaxModal() {

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
                  
                        <tr>
                            <td className="thwidth left">Indicator <span className="asterik">*</span></td>
                            <td className="thwidth left"> 
                                <input type="text" className="form-control" id="pwd"  />
                            </td>
                        </tr>
                      </table>

                    </Tab>
                    <Tab className='tab-content-bg tab-bg' eventKey="detail" title={<span><i className="bi bi-house-door-fill me-2"/>Details</span>}>

                    <div >
                            <div className='left bg-info p-1 rborder'>
                                <h5>Tax Settings</h5>
                            </div>
                    </div>
                    <table className="table table-responsive">
                        <tr>
                            <td className="thwidth left  text-dark">Applicable From </td>
                            <td className="thwidth left text-dark">CGST(%) </td>
                            <td className="thwidth left text-dark">SGST(%)</td>
                            <td className="thwidth left text-dark">Cess(%) </td>
                            <td className="thwidth left text-dark"> </td>
                            <td className="thwidth left  text-dark bg-secondary"><i className="bi bi-plus me-2" style={{fontSize : 24}}></i> </td>
                        </tr>
                        <tr>
                            <td className="thwidth left"> 
                                <div class="form-group">
                                  <select class="form-control" id="sel1">
                                    <option>GENERAL DISCOUNT</option>
                                    <option>PLAN BASED DISCOUNT</option>
                                  </select>
                                </div>
                            </td>
                            <td className="thwidth left">
                              <input type="text" className="form-control" id="pwd"  />
                            </td>
                            <td className="thwidth left">
                              <input type="text" className="form-control" id="pwd"  />
                            </td>
                            <td className="thwidth left">
                              <input type="text" className="form-control" id="pwd"  />
                            </td>
                            <td className="thwidth left">
                            </td>
                            <td className="thwidth left">
                                  <i className="bi bi-recycle me-2" style={{fontSize : 24}}></i> 
                            </td>
                        </tr>
                    </table>
             </Tab>
          </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>Submit</Button>
        <Button variant="danger" onClick={handleClose}>Reset</Button>
        <Button variant="secondary" onClick={handleClose}>
          Back
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);
}

export default TaxModal;