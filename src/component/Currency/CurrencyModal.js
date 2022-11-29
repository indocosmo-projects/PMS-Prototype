import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Currency.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function CurrencyModal() {

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
        <Modal.Title >Add New Currency</Modal.Title>
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
                    </Tab>
                    <Tab className='tab-content-bg tab-bg' eventKey="detail" title={<span><i className="bi bi-house-door-fill me-2"/>Details</span>}>
             
                    <table>
                        <tr>
                            <td className="thwidth left">Symbol</td>
                            <td className="thwidth left"> <input type="text" className="form-control" id="pwd"  /></td>
                        </tr>
                        <tr>
                            <td className="thwidth left">Fraction </td>
                            <td className="thwidth left"> <input type="text" className="form-control" id="pwd"  /></td>
                        </tr>
                        <tr>
                            <td className="thwidth left">Fraction Symbol </td>
                            <td className="thwidth left"> 
                              <input type="text" className="form-control" id="pwd"  />
                            </td>
                        </tr>
                        <tr>
                            <td className="thwidth left">Decimal Places<span className="asterik">*</span></td>
                            <td className="thwidth left"> <input type="number" className="form-control" id="pwd" value="0" /></td>
                        </tr>
                        <tr>
                            <td className="thwidth left">Exchange Rate <span className="asterik">*</span></td>
                            <td className="thwidth left"> <input type="text" className="form-control" id="pwd"  /></td>
                        </tr>
                        <tr>
                            <td className="thwidth left">Updated Rate <span className="asterik">*</span></td>
                            <td className="thwidth left"> 
                              <input type="text" className="form-control" id="pwd"  />
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

export default CurrencyModal;