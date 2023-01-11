import React from 'react';
import './Reception.css';
import '../../style.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import InhouseCustomers from './InhouseCustomers';
import ReceptionExpectedArrivals from './ReceptionExpectedArrivals';
import ReceptionDepartures from './ReceptionExpectedDepartures';
import ReceptionHotelStatus from './ReceptionHotelStatus';
import ReceptionEnquiryConfirmation from './ReceptionEnquiryConfirmation';


function Reception() {
  
        return (
            <div className="section p-0">
                <div className="container-fluid h-100 mb-3">
                    {/* ----- Heading ------ */}
                    <div className='sticky-div'>
                        <h3 className="header"><i className="bi bi-person-workspace me-2"></i>Reception</h3>
                    </div>
                    
                <Tabs
                    defaultActiveKey="inhouse"
                    id="justify-tab-example"
                    className="mt-2 status-tab"
                    justify >

                    <Tab className='tab-content-bg tab-bg p-2' eventKey="inhouse" title={<div><i className="bi bi-house-door-fill me-2"/><p className='p-0 m-0'>In-House Customers</p></div>}>
                        <InhouseCustomers />
                    </Tab>

                    <Tab className='tab-content-bg tab-bg p-2' eventKey="expectedarrivals" title={<div><i className="bi bi-arrow-down-right-square-fill me-2"/><p className='p-0 m-0'>Expected Arrivals</p></div>}>
                        <ReceptionExpectedArrivals />
                    </Tab>

                    <Tab className='tab-content-bg tab-bg p-2' eventKey="departures" title={<div><i className="bi bi-arrow-up-right-square-fill me-2"/><p className='p-0 m-0'>Expected Departures</p></div>}>
                        <ReceptionDepartures />
                    </Tab>

                    <Tab className='tab-content-bg tab-bg p-2' eventKey="enquiries" title={<div><i className="bi bi-exclamation-circle-fill me-2"/><p className='p-0 m-0'>Enquiry Confirmation</p></div>}>
                        <ReceptionEnquiryConfirmation />
                    </Tab>

                    <Tab className='tab-content-bg tab-bg p-2' eventKey="hotelstatus" title={<div><i className="bi bi-exclamation-circle-fill me-2"/><p className='p-0 m-0'>Hotel Status</p></div>}>
                        <ReceptionHotelStatus />
                    </Tab>

                </Tabs>
   
                    
                </div>
            </div>
        );

}
 
export default Reception;