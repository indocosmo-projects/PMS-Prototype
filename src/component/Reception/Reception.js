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
                <div className="container-fluid">
                    {/* ----- Heading ------ */}
                    <div className='sticky-div'>
                        <h3 className="header"><i className="bi bi-person-workspace me-2"></i>Reception</h3>
                    </div>
                    
                <Tabs
                    defaultActiveKey="inhouse"
                    id="justify-tab-example"
                    className="mt-4 mb-4 status-tab"
                    justify >
                <Tab className='tab-content-bg tab-bg' eventKey="inhouse" title={<span><i className="bi bi-house-door-fill me-2"/>In-House Customers</span>}>
                        <InhouseCustomers/>
                    <div className="row me-1 d-flex justify-content-between">
                                    
                                    {/*}                <div className="col-4 d-flex justify-content-start" ><i className="bi bi-eye-fill me-2"></i>Showing 1 to {recordno} of {details.length} entries</div>
                                                {/* <div className="col-6"></div> */}
                                                <div className="col-12 d-flex justify-content-end">
                                                <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-double-left"></i><span className="hide-element"></span></button>
                                                    <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-left"></i><span className="hide-element"></span></button>
                                                    <button className="btn btn-outline-dark m-1 grey-border active">1</button>
                                                    <button className="btn btn-outline-dark m-1 grey-border">2</button>
                                                    <button className="btn btn-outline-dark m-1 grey-border">3</button>
                                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-right"></i></button>
                                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-double-right"></i></button>
                                                    
                                                </div>
                                            </div>

                    </Tab>
                    <Tab className='tab-content-bg tab-bg' eventKey="expectedarrivals" title={<span> <i className="bi bi-arrow-down-right-square-fill me-2"/>Expected Arrivals</span>}>
                        <ReceptionExpectedArrivals />
                        <div className="row me-1 d-flex justify-content-between">
                                    
                    {/*}                <div className="col-4 d-flex justify-content-start" ><i className="bi bi-eye-fill me-2"></i>Showing 1 to {recordno} of {details.length} entries</div>
                                {/* <div className="col-6"></div> */}
                                <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-double-left"></i><span className="hide-element"></span></button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-left"></i><span className="hide-element"></span></button>
                                    <button className="btn btn-outline-dark m-1 grey-border active">1</button>
                                    <button className="btn btn-outline-dark m-1 grey-border">2</button>
                                    <button className="btn btn-outline-dark m-1 grey-border">3</button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-right"></i></button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-double-right"></i></button>
                                    
                                </div>
                            </div>

                        
                    </Tab>
                    <Tab className='tab-content-bg tab-bg' eventKey="departures" title={<span> <i className="bi bi-arrow-up-right-square-fill me-2"/>Expected Departures</span>}>
                        <ReceptionDepartures />
                        <div className="row me-1 d-flex justify-content-between">
                                    
                    {/*}                <div className="col-4 d-flex justify-content-start" ><i className="bi bi-eye-fill me-2"></i>Showing 1 to {recordno} of {details.length} entries</div>
                                {/* <div className="col-6"></div> */}
                                <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-double-left"></i><span className="hide-element"></span></button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><i className="bi bi-chevron-left"></i><span className="hide-element"></span></button>
                                    <button className="btn btn-outline-dark m-1 grey-border active">1</button>
                                    <button className="btn btn-outline-dark m-1 grey-border">2</button>
                                    <button className="btn btn-outline-dark m-1 grey-border">3</button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-right"></i></button>
                                    <button className="btn btn-outline-dark m-1 grey-border"><span className="hide-element"></span><i className="bi bi-chevron-double-right"></i></button>
                                    
                                </div>
                            </div>

                        
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