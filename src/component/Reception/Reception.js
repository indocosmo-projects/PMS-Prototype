import React from 'react';
import './Reception.css';
import '../../style.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import InhouseCustomers from './InhouseCustomers';
import ReceptionExpectedArrivals from './ReceptionExpectedArrivals';
import ReceptionDepartures from './ReceptionExpectedDepartures';
import ReceptionHotelStatus from './ReceptionHotelStatus';


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
                    className="mt-2 mb-4 status-tab"
                    justify >

                    <Tab className='tab-content-bg tab-bg' eventKey="inhouse" title={<span><i className="bi bi-house-door-fill me-2"/>In-House Customers</span>}>
                        <InhouseCustomers />
                    </Tab>

                    <Tab className='tab-content-bg tab-bg' eventKey="expectedarrivals" title={<span> <i className="bi bi-arrow-down-right-square-fill me-2"/>Expected Arrivals</span>}>
                        <ReceptionExpectedArrivals />
                    </Tab>

                    <Tab className='tab-content-bg tab-bg' eventKey="departures" title={<span> <i className="bi bi-arrow-up-right-square-fill me-2"/>Expected Departures</span>}>
                        <ReceptionDepartures />
                    </Tab>

                    <Tab className='tab-content-bg tab-bg' eventKey="hotelstatus" title={<span> <i className="bi bi-exclamation-circle-fill me-2"/>Hotel Status</span>}>
                        <ReceptionHotelStatus />
                    </Tab>

                </Tabs>
   
                    
                </div>
            </div>
        );

}
 
export default Reception;