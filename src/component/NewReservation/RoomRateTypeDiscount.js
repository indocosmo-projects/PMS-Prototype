import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function RoomRateTypeDiscount() {

    const [count, setCount] = useState(1);
    const [cn, setCn] = useState(5);
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
        
        const display = (e) => {
            let classes = "w-100 left ";
            classes += e <= count ? "show " : "hide";
            return classes;
        }
        

    const tdata = () => {
        return(
            <tbody>
            { details.map(detail =>  <tr key={detail.id} className={display(detail.id)} >
                <td>
                    <select className="form-control form-select text-center">
                        <option> DLX</option>
                        <option> STND</option>
                        <option> PREM</option>
                        <option> CLASS</option>
                        <option> PREM</option>
                    </select>
                </td>
                <td>
                    <select className="form-control form-select text-center">
                        <option> RACKRATE</option>
                        <option> 2</option>
                        <option> 3</option>
                    </select>
                </td>

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
                <td>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                </td>
                <td>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                </td>
                <td>
                    <input className="form-control form-control-inline input-medium default-date-picker inner_login" size="16" type="text" defaultValue="" />
                </td>
                <td>
                   
                </td>
            
                </tr>
                )}
        </tbody>
        );
}


        return(
                <div>
                    <div className="padcolumn mt-1 total-bg" >
                        {/* <div className="table"> */}
                        <h4 className='left ms-2 mt-2'>Payment Details</h4>
                            <table className="table type-table">
                                <thead className="">
                                    <tr>
                                        <th className="thstyle">ROOM TYPE</th>
                                        <th className="thstyle">RATE CODE</th>
                                        <th>SINGLE</th>
                                        <th>DOUBLE</th>
                                        <th>TRIPPLE</th>
                                        <th className="thstyle">TOTAL</th>
                                        <th className="thstyle">DISCOUNT</th>
                                        <th className="thstyle">SUB TOTAL</th>
                                        <th><button className="btn btn-primary btn-xs" onClick={handleIncrement}><i className="bi bi-plus" ></i></button>
                                            <button className="btn btn-danger btn-xs" onClick={handleDecrement}><i className="bi bi-trash "></i></button>
                                        </th>
                                    </tr>
                                </thead>
                                
                                {tdata()}
                            </table>
                        {/* </div> */}
                            <div className='row'>
                            <div className='col-lg-8 col-md-8 col-3 d-flex justify-content-end total-text'>TOTAL</div>
                            <div className='col-lg-2 col-md-2 col-3 d-flex justify-content-center total-text'>50000</div>
                            <div className='col-lg-2 col-md-2 col-6 d-flex justify-content-center'><button className="btn btn-outline-secondary">Download<i className="bi bi-download ms-2"></i></button></div>
                            </div>
                    </div>
                </div>
        );
}
 
export default RoomRateTypeDiscount;