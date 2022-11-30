import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './RoomRates.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RoomRatesModal() {

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
        <Modal.Title > Add Room Rates </Modal.Title>
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
                        <td className="thwidth left">Description <span className="asterik">*</span></td>
                        <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
                    </tr>
                    <tr>
                        <td className="thwidth left">Room Type <span className="asterik">*</span></td>
                        <td className="thwidth left"> 
                              <div class="form-group">
                                <select class="form-control" id="sel1">
                                  <option>STD</option>
                                  <option>SLA</option>
                                  <option>ECN</option>
                                  <option>DMY</option>
                                </select>
                              </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="thwidth left">Status <span className="asterik">*</span></td>
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
                <div className='left bg-info p-1 rborder'>
                          <h5>Validity Period</h5>
                 </div>

                  <table>
                   <tr>
                        <td className="thwidth left">From <span className="asterik">*</span></td>
                        <td className="thwidth left"> 
                              <div class="form-group">
                                    <input type="date" class="form-control" id="usr" />
                              </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="thwidth left">To <span className="asterik">*</span></td>
                        <td className="thwidth left"> 
                              <div class="form-group">
                                    <input type="date" class="form-control" id="usr" />
                              </div>
                        </td>
                    </tr>
                </table>

                </Tab>
                <Tab className='tab-content-bg tab-bg' eventKey="tariff" title={<span><i className="bi bi-house-door-fill me-2"/>Tariff</span>}>
                        <table>
                              <tr>
                                    <td className="thwidth left">Tariff include the taxes? <span className="asterik">*</span></td>
                                    <td className="thwidth left"> 
                                          <div class="form-group">
                                                <select class="form-control" id="sel1">
                                                      <option>Yes</option>
                                                      <option>No</option>
                                                </select>
                                          </div>
                                    </td>
                              </tr>
                        </table>

                        <div className='left bg-info p-1 rborder'>
                              <h5>Meal Plan</h5>
                        </div>
                        
                        <table>
                              <tr>
                                    <td className="thwidth left">
                                          <input type="radio" className="mealplan" name="mealplan" value="ep" /> EP
                                    </td>
                                    <td className="thwidth left"> 
                                          <input type="radio" className="mealplan" name="mealplan" value="cp" /> CP
                                    </td>
                                    <td className="thwidth left"> 
                                          <input type="radio" className="mealplan" name="mealplan" value="map" /> MAP
                                    </td>
                                    <td className="thwidth left"> 
                                          <input type="radio" className="mealplan" name="mealplan" value="ap" /> AP
                                    </td>
                              </tr>
                        </table>

                         <div className='left bg-info p-1 rborder'>
                              <h5>Tariff </h5>
                              <span className="right bg-dark rborder mt-2">Amounts shown below do not include taxes</span>
                        </div>
                        
                        <div style={{overflow: 'auto', width : 450}}>
                        <table className="table table-bordered table-responsive" >
                              
                              <tr>
                                    <th  className="thwidth left">Season</th>
                                    <th  className="thwidth left">Single</th>
                                    <th  className="thwidth left"></th>
                                    <th  className="thwidth left">Double</th>
                                    <th  className="thwidth left"></th>
                                    <th  className="thwidth left">Triple</th>
                                    <th  className="thwidth left"></th>
                                    <th  className="thwidth left">Quad</th>
                                    <th  className="thwidth left"></th>
                              </tr>
                              <tr>
                                    <th  className="thwidth left"></th>
                                    <th  className="thwidth left">N</th>
                                    <th  className="thwidth left">S</th>
                                    <th  className="thwidth left">N</th>
                                    <th  className="thwidth left">S</th>
                                    <th  className="thwidth left">N</th>
                                    <th  className="thwidth left">S</th>
                                    <th  className="thwidth left">N</th>
                                    <th  className="thwidth left">S</th>
                              </tr>
                              <tr>
                                    <td  className="thwidth left">All Season</td>
                                    <td  className="thwidth left">
                                          <div class="form-group">
                                                <select class="form-control" id="sel1">
                                                      <option>True</option>
                                                      <option>False</option>
                                                </select>
                                          </div>
                                    </td>
                                    <td  className="thwidth left">
                                          <div class="form-group">
                                                <select class="form-control" id="sel1">
                                                      <option>True</option>
                                                      <option>False</option>
                                                </select>
                                          </div>
                                    </td>
                                    <td  className="thwidth left"><input type="text" class="form-control" id="pwd" disabled /></td>
                                    <td  className="thwidth left"><input type="text" class="form-control" id="pwd" disabled /></td>
                                    <td  className="thwidth left"><input type="text" class="form-control" id="pwd" disabled /></td>
                                    <td  className="thwidth left"><input type="text" class="form-control" id="pwd" disabled /></td>
                                    <td  className="thwidth left"><input type="text" class="form-control" id="pwd" disabled /></td>
                                    <td  className="thwidth left"><input type="text" class="form-control" id="pwd" disabled /></td>
                              </tr>
                        </table>
                        </div>

                    

                </Tab>
                <Tab className='tab-content-bg tab-bg' eventKey="revenuesharing" title={<span><i className="bi bi-house-door-fill me-2"/>Revenue Sharing</span>}>

                   <div style={{overflow: 'auto', width : 450}}>
                        <table className="table table-bordered table-responsive" >
                              <thead>
                                    <tr>
                                          <th  className="thwidth left">Department</th>
                                          <th  className="thwidth left">Single(%)</th>                               
                                          <th  className="thwidth left">Double(%)</th>                            
                                          <th  className="thwidth left">Triple(%)</th>                                 
                                          <th  className="thwidth left">Quad(%)</th>
                                          <th  className="thwidth left"><i className ="bi bi-plus me-2"></i></th>
                                    </tr>
                              </thead>
                              <tbody>
                                    <tr>
                                          <td className="thwidth left">
                                                <div class="form-group">
                                                      <select class="form-control" id="sel1">
                                                            <option>SECURITY</option>
                                                            <option>FRONT OFFICE</option>
                                                            <option>HOUSE KEEPING</option>
                                                            <option>ACCOUNTS</option>
                                                            <option>MAINTENANCE</option>
                                                            <option>ADMINISTRATION</option>
                                                            <option>SYSTEM ADMIN DFG</option>
                                                      </select>
                                                </div>
                                          </td>
                                          <td className="thwidth left">
                                                <div class="form-group">
                                                      <input type="text" class="form-control" id="usr" />
                                                </div>      
                                          </td>
                                          <td className="thwidth left"></td>
                                          <td className="thwidth left"></td>
                                          <td className="thwidth left"></td>
                                          <td className="thwidth left"><i className ="bi bi-recycle me-2"></i></td>
                                    </tr>
                              </tbody>

                        </table>
                  
                  </div>

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

export default RoomRatesModal;