import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Room.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function RoomModal() {

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
        <Modal.Title > Add Rooms</Modal.Title>
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
                        <td className="thwidth left">Room No <span className="asterik">*</span></td>
                        <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
                    </tr>
                    <tr>
                        <td className="thwidth left">Room Name <span className="asterik">*</span></td>
                        <td className="thwidth left"> <input type="text" class="form-control" id="pwd"  /></td>
                    </tr>
                    <tr>
                        <td className="thwidth left">Description <span className="asterik">*</span></td>
                        <td className="thwidth left"> 
                          <textarea class="form-control" id="pwd"  ></textarea>
                        </td>
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
                        <td className="thwidth left">Floor <span className="asterik">*</span></td>
                        <td className="thwidth left"> 
                          <div class="form-group">
                                  <select class="form-control" id="sel1">
                                    <option>FLOOR 1</option>
                                    <option>FLOOR 2</option>
                                    <option>FLOOR 3</option>
                                    <option>FLOOR 4</option>
                                  </select>
                                </div>
                        </td>
                    </tr>
                </table>
                </Tab>
                <Tab className='tab-content-bg tab-bg' eventKey="roomstatus" title={<span><i className="bi bi-house-door-fill me-2"/>Room Status</span>}>
                        <table>
                          <tr>
                              <td className="thwidth left">Inventory Status<span className="asterik">*</span></td>
                              <td className="thwidth left"> 
                                  <div class="form-group">
                                      <select class="form-control" id="sel1">
                                        <option>OUT OF INVENTORY</option>
                                        <option> INCLUDED IN INVENTORY</option>
                                      </select>
                                    </div>
                              </td>
                          </tr>
                          <tr>
                              <td className="thwidth left">Housekeeping Status </td>
                              <td className="thwidth left"> <input type="text" class="form-control" id="pwd" value="DIRTY" disabled/></td>
                          </tr>
                          <tr>
                              <td className="thwidth left">Occupancy Status </td>
                              <td className="thwidth left"> 
                                <input type="text" class="form-control" id="pwd" value="VACCANT" disabled />
                              </td>
                          </tr>
                        </table>
                </Tab>
                <Tab className='tab-content-bg tab-bg' eventKey="roomfeature" title={<span><i className="bi bi-house-door-fill me-2"/>Room Features</span>}>
                     <div className="row" >
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                                 Complementary BreakFast
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                                Free WiFi
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                               Light Music
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                               Ample Car Parking
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                            Television
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                          Hair Dryer
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                              Iron Box & Iron Board
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                          Coffee Maker
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                          Self Laundry
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                          Pick & Drop
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                          24x7 Hot/Cold Water
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                          24x7 Room Service
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                          24x7 Help Desk
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                          Mini Fridge
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                          Mineral Water 500ml
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div className="col-sm-4">
                               <table>
                                    <tr>
                                          <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                          <td className="thwidth2 left"> 
                                          WIFI
                                          </td>
                                    </tr>
                              </table>
                        </div>
                        <div >
                            <button type="button" className="btn btn-primary" >Add Feature</button>
                        </div>
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

export default RoomModal;