import React, {  useState } from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import './RoomAvailability.css';
// import DateRangePicker from './DateRangePicker';
// import { Cascader, InputNumber, Select, Space } from 'antd';
// import Button from 'react-bootstrap/Button';
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';
import RoomAvailabilitySearch from './RoomAvailabilitySearch';
import Button from 'react-bootstrap/Button';




function RoomAvailability() {
    // const [arrdate, setArrdate] = useState('');
    // const [deptdate, setDeptdate] = useState('');
    const [nights, setNights] = useState(1);


    // const nightcalculation = () =>{
    //     var arrd = arrdate.substring(0,10);
    //     var deptd = deptdate.substring(0,10);
    //     const date1 = new Date(arrd);
    //     const date2 = new Date(deptd);
    //     const diffTime = Math.abs(date2 - date1);
    //     var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    //     console.log("====="+arrdate + "---" +deptdate +"----"+ diffDays);
    //     console.log(diffDays + " days");
    //     setNights((diffDays));

    //     const selectionRange = {
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         key: 'selection',
    //       }
       
    //     return (
    //         diffDays
    //     );
    // }
    
    return (
       
        // <div onMouseUp={nightcalculation}>
        <div>
        <div className="light-violet-bg">

        <div className="row">

        <RoomAvailabilitySearch />

        </div> 

        <div className="row ">
        <div className="col-md-12">
        <div className= "roomavailability white-back">
            <div className='m-1'>
                
            <Table bordered responsive="md" className="avail-table">
                <thead className="tabhead head-bg">
                    <tr className='text-center'>
                        <th>Room Type</th>
                        <th><span className='avail-date'>16-Sep-22</span><br/><span className='avail-date-head'> Fri </span></th>
                        <th><span className='avail-date'>17-Sep-22</span><br/><span className='avail-date-head'> Sat </span></th>
                        <th><span className='avail-date'>18-Sep-22</span><br/><span className='avail-date-head'> Sun </span></th>
                        <th><span className='avail-date'>19-Sep-22</span><br/><span className='avail-date-head'> Mon </span></th>
                        <th><span className='avail-date'>20-Sep-22</span><br/><span className='avail-date-head'> Tue </span></th>
                        <th><span className='avail-date'>21-Sep-22</span><br/><span className='avail-date-head'> Wed </span></th>
                        <th><span className='avail-date'>22-Sep-22</span><br/><span className='avail-date-head'> Thu </span></th>
                        <th><span className='avail-date'>23-Sep-22</span><br/><span className='avail-date-head'> Fri </span></th>
                        <th><span className='avail-date'>24-Sep-22</span><br/><span className='avail-date-head'> Sat </span></th>
                        <th><span className='avail-date'>25-Sep-22</span><br/><span className='avail-date-head'> Sun </span></th>
                        <th><span className='avail-date'>26-Sep-22</span><br/><span className='avail-date-head'> Mon </span></th>
                        <th><span className='avail-date'>27-Sep-22</span><br/><span className='avail-date-head'> Tue </span></th>
                        <th><span className='avail-date'>28-Sep-22</span><br/><span className='avail-date-head'> Wed </span></th>
                        <th><span className='avail-date'>29-Sep-22</span><br/><span className='avail-date-head'> Thu </span></th>
                        <th><span className='avail-date'>30-Sep-22</span><br/><span className='avail-date-head'> Fri </span></th>
                        <th><span className='avail-date'>01-Oct-22</span><br/><span className='avail-date-head'> Sat </span></th>
                        <th><span className='avail-date'>02-Oct-22</span><br/><span className='avail-date-head'> Sun </span></th>
                        <th><span className='avail-date'>03-Oct-22</span><br/><span className='avail-date-head'> Mon </span></th>
                        <th><span className='avail-date'>04-Oct-22</span><br/><span className='avail-date-head'> Tue </span></th>
                        <th><span className='avail-date'>05-Oct-22</span><br/><span className='avail-date-head'> Wed </span></th>
                    </tr>
                </thead>
                <tbody className='avail-tbody'>
                    <tr className='table-dark-row'>
                        <td className='table-dark-row'>Total</td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>0</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                        <td><strong>30</strong></td>
                    </tr>
                    <tr>
                        <td><strong>DLX</strong></td>
                        <td><Button variant="btn-sm room-avail-td-btn p-0"><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1700</Badge></div></Button></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹4000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1900</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1800</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1500</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td>0</td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                    </tr>
                    <tr>
                        <td><strong>PREM</strong></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹15000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹18000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>10</strong><Badge className='mt-1' bg="secondary">₹20000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>10</strong><Badge className='mt-1' bg="secondary">₹20000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹20000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹15000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹18000</Badge></div></td>
                        <td>0</td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹30000</Badge></div></td>
                    </tr>
                    <tr>
                        <td><strong>CLASS</strong></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1500</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1800</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1500</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td>0</td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                    </tr>
                    <tr>
                        <td><strong>ECON</strong></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1800</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1500</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1500</Badge></div></td>
                        <td>0</td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                    </tr>
                    <tr>
                        <td><strong>STND</strong></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1800</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹2000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1500</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹1800</Badge></div></td>
                        <td>0</td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                        <td><div className='d-flex justify-content-between'><strong className='me-2'>6</strong><Badge className='mt-1' bg="secondary">₹3000</Badge></div></td>
                    </tr>
                </tbody>
            </Table>

                <div className="d-flex justify-content-end">
                    <button type="button" className="btn"><i className="bi bi-chevron-left me-1"></i>Prev</button>
                    <button type="button" className="btn">Next<i className="bi bi-chevron-right ms-1"></i></button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </div>
    );
}
 
export default RoomAvailability;