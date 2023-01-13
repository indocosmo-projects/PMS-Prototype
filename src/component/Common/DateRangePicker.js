import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

function DateRangePicker () {


return (
  <div>
  {/* <Space direction="vertical" size={12}> */}
    <RangePicker  showTime 
    style={{ width: '100%' }} />
    {/* <RangePicker showTime />
    <RangePicker picker="week" />
    <RangePicker picker="month" />
    <RangePicker picker="quarter" />
    <RangePicker picker="year" /> */}
  {/* </Space> */}
  </div>
);
}

export default DateRangePicker;