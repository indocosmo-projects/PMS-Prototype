// import { CheckBox } from '@mui/icons-material';
import React,{ useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Dropdown from 'react-bootstrap/Dropdown';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import RoomsInputModal from './RoomsInputModal';
import '../../component/RoomsSelect/RoomRateTypeDiscount.css';
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
        //     <tbody className='type-tbody'>
        //                <tr>
        //         <td>
        //             <select className="form-control form-select text-center">
        //                 <option>DLX</option>
        //                 <option>STND</option>
        //                 <option>PREM</option>
        //                 <option>CLASS</option>
        //                 <option>PREM</option>
        //             </select>
        //         </td>
        //         <td>
        //             <select className="form-control form-select text-center">
        //                 <option>Single</option>
        //                 <option>Double</option>
        //                 <option>Tripple</option>
        //             </select>
        //         </td>
        //         <td>
        //             <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="₹ 1500" />
        //         </td>
        //         <td>
        //             <InputGroup className="pt-1">
        //             <Form.Check type='checkbox' id='default-checkbox' label='Incl. Tax'/>
        //             </InputGroup>
        //         </td>
        //         <td className='rate-col'>
        //             <select className="form-control form-select text-center">
        //                 <option> RACKRATE</option>
        //                 <option> 2</option>
        //                 <option> 3</option>
        //             </select>
        //         </td>
        //         <td>
        //         <InputGroup className="mb-3 group-input-width">
        //                 <Button variant="btn btn-secondary" id="button-addon2">
        //                 <i className="bi bi-dash"></i>
        //                 </Button>
        //                 <Form.Control className='text-center'
        //                     placeholder="1"
        //                     aria-label="1"
        //                     aria-describedby="basic-addon2"
        //                 />
        //                 <Button variant="btn btn-secondary" id="button-addon2">
        //                 <i className="bi bi-plus-lg"></i>
        //                 </Button>
        //             </InputGroup>
                
        //         </td>
        //         <td className='room-rate-col'>
        //                 <Select
        //                     closeMenuOnSelect={false}
        //                     components={animatedComponents}
        //                     isMulti
        //                     options={options}
        //                     className="basic-multi-select"
        //                     classNamePrefix="select"
        //                     menuPlacement="auto"
        //                     menuPortalTarget={document.body}
        //                     menuPosition={'fixed'}
        //                 />
        //         </td>
        //         <td>
        //             <InputGroup className="pt-1">
        //             <Form.Check type='checkbox' id='default-checkbox' label='Extra Bed'/>
        //             </InputGroup>
        //         </td>

        //         <td className='rate-col'>
        //             <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="₹ 100" disabled/>
        //         </td>
        //         <td>
        //             <InputGroup className="mb-3 discount-input">
        //                 <Form.Control aria-label="Text input with dropdown button" />

        //                 <DropdownButton
        //                 variant="outline-secondary"
        //                 title=""
        //                 id="input-group-dropdown-2"
        //                 align="end"
        //                 >
        //                 <Dropdown.Item href="#">Action</Dropdown.Item>
        //                 <Dropdown.Item href="#">Another action</Dropdown.Item>
        //                 <Dropdown.Item href="#">Something else here</Dropdown.Item>
        //                 <Dropdown.Divider />
        //                 <Dropdown.Item href="#">Separated link</Dropdown.Item>
        //                 </DropdownButton>
        //             </InputGroup>
        //         </td>
        //         <td className='rate-col'>
        //             <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="₹ 1400" disabled/>
        //         </td>
        //         <td>
        //         <button className="btn btn-outline-danger btn-xs me-2" onClick={handleDecrement}><i className="bi bi-trash "></i></button>
        //         </td>
                    
        //         </tr>
        // </tbody>

        <tbody className='type-tbody'>
                <tr>
                <td>DLX</td>
                <td>SINGLE</td>
                <td>₹1500</td>
                <td>YES</td>
                <td>RACKRATE</td>
                <td>2</td>
                <td>FLR1 ROOM 101, FLR1 ROOM 102</td>
                <td>EXTRA BED</td>
                <td>₹1500</td>
                <td>₹50</td>
                <td>₹1450</td>
                <td>
                <button className='btn btn-outline-secondary btn-sm me-2'><i className="bi bi-pencil-square"></i></button><button className="btn btn-outline-danger btn-sm me-2" onClick={handleDecrement}><i className="bi bi-trash "></i></button>
                </td>
                    
                </tr>
                 {/* )}  */}

</tbody>

        );
    }



        return(
            <div className=''>
                    <div className='row'>
                        <div className='col-12'>
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
                            </div>
                            </div>
                            <div className='row'>
                                <div className='text-center'>
                                         {/* <button className="btn btn-primary btn-xs my-4" onClick={handleIncrement}><i class="bi bi-plus-circle me-2"></i>Add Rooms</button> */}
                                         <RoomsInputModal />
                                </div>
                            </div>
                            <hr className='gray'/>

                            <div className='row px-3 py-2'>
                                <div className='col-lg-10 col-md-10 col-6 d-flex justify-content-end total-text'>Grand Total</div>
                                <div className='col-lg-2 col-md-2 col-6 d-flex justify-content-center total-text highlight-bg'>₹ 3000</div>
                            </div>
                                
                    </div>
        );
}
 
export default RoomRateTypeDiscount;