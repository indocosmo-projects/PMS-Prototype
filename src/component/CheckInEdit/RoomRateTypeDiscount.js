// import { CheckBox } from '@mui/icons-material';
import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

function RoomRateTypeDiscount() {

    const [count, setCount] = useState(1);
    const [cn, setCn] = useState(5);
    // const [del, setDel] = useState(0);
    const details =
        [
            { id: 1, name: 'room1' },
            { id: 2, name: 'room2' },
            { id: 3, name: 'room3' },
            { id: 4, name: 'room4' },
            { id: 5, name: 'room5' },
        ];

        const handleIncrement = () => {
            setCount((count + 1 ));
            setCn(( cn + 1 ));
            details.push(({ id: cn, name: 'rooms' + cn + '' }));
        }
        
        const handleDecrement = () => {
            setCount((count - 1 ));
        }

        // const deleteEachRow = (e) => {
        //     setDel(e);
        // }
        
        // const display = (e) => {
        //     let classes = "left ";
        //     if(del === e){
        //         classes += "hide" 
        //         return classes;
        //     }
        //     classes += e <= count ? "show " : "hide";
        //     return classes;
        // }
        

    const tdata = () => {
        const options = [
            {value: "101", label:"FLR 1, ROOM 101"},
            {value: "202", label:"FLR 2, ROOM 202"},
            {value: "303", label:"FLR 3, ROOM 303"},
            {value: "304", label:"FLR 3, ROOM 303"},
            {value: "305", label:"FLR 3, ROOM 303"},
            {value: "305", label:"FLR 3, ROOM 303"},
        ];
        return(
            <tbody className='type-tbody'>

            {/* { details.map(detail =>  <tr key={detail.id} className={display(detail.id)} > */}
                       <tr>
                <td>
                    <select className="form-control form-select text-center">
                        <option>DLX</option>
                        <option>STND</option>
                        <option>PREM</option>
                        <option>CLASS</option>
                        <option>PREM</option>
                    </select>
                </td>
                <td>
                    <select className="form-control form-select text-center">
                        <option>Single</option>
                        <option>Double</option>
                        <option>Tripple</option>
                    </select>
                </td>
                <td>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="₹ 1500" disabled/>
                </td>
                <td className='rate-col'>
                    <select className="form-control form-select text-center">
                        <option> RACKRATE</option>
                        <option> 2</option>
                        <option> 3</option>
                    </select>
                </td>

                {/* <td>
                    <InputGroup className="mb-3">
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
                </td> */}

                {/* <td>
                <InputGroup className="mb-3">
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
                
                </td> */}
                <td>
                <InputGroup className="mb-3">
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
                
                </td>
                <td className='room-rate-col'>
                        <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            // defaultValue={}
                            isMulti
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            menuPlacement="auto"
                            menuPortalTarget={document.body}
                            menuPosition={'fixed'}
                        />
                </td>
                <td>
                    <InputGroup className="pt-1">
                    <Form.Check type='checkbox' id='default-checkbox' label='Extra Bed'/>
                    </InputGroup>
                </td>

                <td className='rate-col'>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="₹ 1500" disabled/>
                </td>
                <td className='rate-col'>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="₹ 100" disabled/>
                </td>
                <td className='rate-col'>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="₹ 1400" disabled/>
                </td>
                <td>
                    {/* <button className="btn btn-danger btn-xs me-2" onClick={(e) => deleteEachRow(detail.id)}><i className="bi bi-trash "></i></button> */}
                <button className="btn btn-outline-danger btn-xs me-2" onClick={handleDecrement}><i className="bi bi-trash "></i></button>
                </td>
                    
                </tr>
                 {/* )}  */}
        </tbody>
        );
    }



        return(
                <div>
                    <div className="padcolumn mt-1" >
                        {/* <div className="table"> */}
                            <div className='d-flex justify-content-between'>
                                {/* <h4 className='left ms-2 mt-2'>Room Details</h4> */}
                                <div>
                                {/* <button className="btn btn-danger btn-xs me-2" onClick={handleDecrement}><i className="bi bi-trash "></i></button> */}
                                </div>
                            </div>
                            <table className="table type-table">
                                <thead className="">
                                    <tr>
                                        <th>ROOM TYPE</th>
                                        <th>OCCUPANCY</th>
                                        <th>RATE CODE</th>
                                        <th>RATE</th>
                                        <th>COUNT</th>
                                        <th>ROOMS</th>
                                        {/* <th>DOUBLE</th> */}
                                        {/* <th>TRIPPLE</th> */}
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
                        {/* </div> */}
                            <div className='row'>
                                <div>
                                         <button className="btn btn-primary btn-xs my-4" onClick={handleIncrement}><i class="bi bi-plus-circle me-2"></i>Add Rooms</button>
                                </div>
                                <hr className='gray'/>
                            <div className='col-lg-10 col-md-10 col-3 d-flex justify-content-end total-text'>Grand Total</div>
                            <div className='col-lg-2 col-md-2 col-3 d-flex justify-content-center total-text highlight-bg'>₹ 3000</div>
                            </div>
                    </div>
                </div>
        );
}
 
export default RoomRateTypeDiscount;