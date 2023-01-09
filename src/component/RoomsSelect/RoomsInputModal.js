// import { CheckBox } from '@mui/icons-material';
import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

function RoomsInputModal() {

    // const [count, setCount] = useState(1);
    // const [cn, setCn] = useState(5);
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    // const details =
    //     [
    //         { id: 1, name: 'room1' },
    //         { id: 2, name: 'room2' },
    //         { id: 3, name: 'room3' },
    //         { id: 4, name: 'room4' },
    //         { id: 5, name: 'room5' },
    //     ];
        const options = [
            {value: "101", label:"FLR1 ROOM 101"},
            {value: "202", label:"FLR2 ROOM 202"},
            {value: "303", label:"FLR3 ROOM 303"},
            {value: "304", label:"FLR3 ROOM 303"},
            {value: "305", label:"FLR3 ROOM 303"},
            {value: "305", label:"FLR3 ROOM 303"},
        ];

        // const handleIncrement = () => {
        //     setCount((count + 1 ));
        //     setCn(( cn + 1 ));
        //     details.push(({ id: cn, name: 'rooms' + cn + '' }));
        // }
        
        // const handleDecrement = () => {
        //     setCount((count - 1 ));
        // }


    const tdata = () => {
        
        return(

                <div className='row'>

                <div className='col-sm-6 mb-2'>
                    <label>ROOM TYPE</label>
                    <select className="form-control form-select text-center">
                        <option>DLX</option>
                        <option>STND</option>
                        <option>PREM</option>
                        <option>CLASS</option>
                        <option>PREM</option>
                    </select>
                </div>
                <div className='col-sm-6 mb-2'>
                <label>OCCUPANCY</label>
                    <select className="form-control form-select text-center">
                        <option>Single</option>
                        <option>Double</option>
                        <option>Tripple</option>
                    </select>
                </div>
                
                <div className='col-sm-6 mb-2'>
                <label>TAX</label>
                    <InputGroup className="pt-1">
                    <Form.Check type='checkbox' id='default-checkbox' label='Incl. Tax'/>
                    </InputGroup>
                </div>

                <div className='col-sm-6 mb-2'>
                <label>ROOM RATE</label>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="₹ 1500" />
                </div>

                <div className='col-sm-6 mb-2'>
                <label>RATE CODE</label>
                    <select className="form-control form-select text-center">
                        <option> RACKRATE</option>
                        <option> 2</option>
                        <option> 3</option>
                    </select>
                </div>

                <div className='col-sm-6 mb-2'>
                <label>SUB TOTAL</label>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="₹ 100" disabled/>
                </div>
                
                <div className='col-sm-6 mb-2'>
                <label>COUNT</label>
                <InputGroup className="group-input-width">
                        <Button variant="btn btn-secondary" id="button-addon2">
                        <i className="bi bi-dash"></i>
                        </Button>
                        <Form.Control className='text-center'
                            placeholder="1"
                            aria-label="1"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="btn btn-secondary" id="button-addon2">
                        <i className="bi bi-plus-lg"></i>
                        </Button>
                    </InputGroup>
                
                </div>

                <div className='col-sm-6 mb-2'>
                <label>DISCOUNT</label>
                    {/* <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue=""/> */}
                    <InputGroup className="discount-input">
                        <Form.Control aria-label="Text input with dropdown button" />

                        <DropdownButton
                        variant="outline-secondary"
                        title=""
                        id="input-group-dropdown-2"
                        align="end"
                        >
                        <Dropdown.Item href="#">Action</Dropdown.Item>
                        <Dropdown.Item href="#">Another action</Dropdown.Item>
                        <Dropdown.Item href="#">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#">Separated link</Dropdown.Item>
                        </DropdownButton>
                    </InputGroup>
                </div>
                

                <div className='col-sm-6 mb-2'>
                <label>ROOMS</label>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            // defaultValue={}
                            isMulti
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            menuPlacement="auto"
                            // menuPortalTarget={document.body}
                            // menuPosition={'fixed'}
                        />
                </div>

                <div className='col-sm-6 mb-2'>
                <label>TOTAL</label>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="₹ 1400" disabled/>
                </div>
                
                <div className='col-sm-6 mb-2'>
                <label>EXTRAS</label>
                    <InputGroup className="pt-1">
                    <Form.Check type='checkbox' id='default-checkbox' label='Extra Bed'/>
                    </InputGroup>
                </div>

                    
            </div>
        );
    }



        return(
                <>
                    <Button variant="primary mb-3" onClick={handleShow}><i class="bi bi-plus-circle me-2"></i>Add Rooms</Button>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            {tdata()}
                            {/* <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                                </Form.Group>
                                <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                                >
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form> */}
                            </Modal.Body>
                            <Modal.Footer className='d-flex justify-content-between'>

                            <Button variant="danger" className="me-2"><i class="bi bi-x-circle me-1"></i>Reset</Button>
                            

                            <div>
                            <Button variant="dark me-2" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                                Save Changes
                            </Button>
                            </div>

                            </Modal.Footer>
      </Modal>









                    {/* <div className="padcolumn mt-1" >
                            <div className='d-flex justify-content-between'>
                                <div>
                                </div>
                            </div>
                            <table className="table type-table">
                                <thead className="">
                                    <tr>
                                        <th>ROOM TYPE</th>
                                        <th>OCCUPANCY</th>
                                        <th>ROOM RATE</th>
                                        <th>TAX</th>
                                        <th>RATE CODE</th>
                                        <th>COUNT</th>
                                        <th>ROOMS</th>
                                        <th>EXTRAS</th>
                                        <th>SUB TOTAL</th>
                                        <th>DISCOUNT</th>
                                        <th>TOTAL</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                
                                {tdata()}
                                {tdata()}
                            

                            </table>
                            <div className='row'>
                                <div>
                                         <button className="btn btn-primary btn-xs my-4" onClick={handleIncrement}><i class="bi bi-plus-circle me-2"></i>Add Rooms</button>
                                </div>
                                <hr className='gray'/>
                            <div className='col-lg-10 col-md-10 col-3 d-flex justify-content-end total-text'>Grand Total</div>
                            <div className='col-lg-2 col-md-2 col-3 d-flex justify-content-center total-text highlight-bg'>₹ 3000</div>
                            </div>
                    </div> */}
                </>
        );
}
 
export default RoomsInputModal;