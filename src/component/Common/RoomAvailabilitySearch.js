import React, {  useState } from 'react';
import './RoomAvailability.css';
import DateRangePicker from './DateRangePicker';
import { Cascader, InputNumber, Select, Space } from 'antd';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';



function RoomAvailabilitySearch() {

    const [value,setValue] = useState(1)
    const [value2,setValue2] = useState(0)
    const [value3,setValue3] = useState(1)


    const popover = (
        <Popover id="popover-positioned-bottom">
          <Popover.Header as="h3" className='popover__head'>Booking Options</Popover.Header>
          <Popover.Body>
    
          <InputNumber
          onChange={(val)=>setValue(val)}
          addonBefore={<h6 className='min-width-popover-input m-0 py-2'>Adults</h6>}
          defaultValue={1}
          className='mb-2 input-font-size-popover'
          min={1}
        />
        <InputNumber
        onChange={(val)=>setValue2(val)}
          addonBefore={<div className='py-2'><h6 className='min-width-popover-input m-0'>Children</h6><p className='font-size-xs m-1'>Ages 0-17</p></div>}
          defaultValue={0}
          className='mb-2 input-font-size-popover'
          min={0}
          max={10}
        />
        <InputNumber
        onChange={(val)=>setValue3(val)}
          addonBefore={<h6 className='min-width-popover-input m-0 py-2'>Rooms</h6>}
          defaultValue={1}
          className='mb-2 input-font-size-popover'
          min={1}
        />
          </Popover.Body>
        </Popover>
      );
    
    
    return (
       
        <div>

        <div className="row mb-2">
 


        <div className="col-lg-4  mb-2 d-flex flex-column">

        <DateRangePicker />
        </div>

                <div className="col-lg-6 mb-2 d-flex flex-column">   

                            <OverlayTrigger trigger="click" placement="bottom" rootClose overlay={popover}>
                                <Button variant="light pop-over-input-btn-roomavail"><i class="bi bi-sliders me-2"></i>{value} Adults <span className='grey-line'>|</span> {value2} Children <span className='grey-line'>|</span> {value3} Room </Button>
                            </OverlayTrigger>
                                                        
                </div>

                <div className="col-lg-2 mb-2 text-center">   
      
                        <button type="button" className="btn btn-primary btn w-100"><i class="bi bi-search me-2"></i>Check</button>
   
                </div>
        </div> 

    </div>
    );
}
 
export default RoomAvailabilitySearch;