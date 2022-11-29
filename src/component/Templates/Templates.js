import React from 'react';
import './Templates.css'
import SwitchTog from '../Common/SwitchTog';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Templates() {
        return(
            <div>
                <div className="section">
                    <div className="container-fluid formcontent">
                        {/* ----- Heading ------ */}
                        <div className='sticky-div'>
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>Templates</h3>
                        </div>
                        
                        <Tabs
                            defaultActiveKey="invoice"
                                id="justify-tab-example"
                                className="mt-4 mb-4 status-tab"
                                justify >
                                <Tab className='tab-content-bg tab-bg' eventKey="invoice" title={<span><i className="bi bi-house-door-fill me-2"/>Invoice</span>}>

                                      <div >
                                            <div className='left bg-info p-1 rborder'>
                                                <h5>HEADER</h5>
                                            </div>
                                            
                                            <div className="row">
                                                <div className="col-sm-4 col-md-4">
                                                    <table>
                                                    <tr>
                                                            <td className="thwidth left">LINE 1 </td>
                                                            <td className="thwidth left"> 
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" id="usr" value="INDOCOSMO SYSTEMS"/>
                                                                 </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>

                                                <div className="col-sm-4 col-md-4">
                                                    <table>
                                                    <tr>
                                                            <td className="thwidth left">LINE 2 </td>
                                                            <td className="thwidth left"> 
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" id="usr" value="GSTIN-32ALRPM4399J2ZE" />
                                                                 </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>

                                                <div className="col-sm-4 col-md-4">
                                                    <table>
                                                    <tr>
                                                            <td className="thwidth left">LINE 3 </td>
                                                            <td className="thwidth left"> 
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" id="usr" value="Mob-94470525282" />
                                                                 </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>

                                                <div className="col-sm-4 col-md-4">
                                                    <table>
                                                    <tr>
                                                            <td className="thwidth left">LINE 4 </td>
                                                            <td className="thwidth left"> 
                                                                <div class="form-group">
                                                                    <input type="text" class="form-control" id="usr" value="K P VALLON ROAD,KADAVANTHRA"  />
                                                                 </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>

                                            </div>

                                        </div>

                                          <div >
                                                <div className='left bg-info p-1 rborder'>
                                                    <h5>FOOTER</h5>
                                                </div>

                                                <table>
                                                    <tr>
                                                        <td className="thwidth left">Production Mode </td>
                                                        <td className="thwidth left"> 
                                                        <SwitchTog/>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>

                                            <div >
                                                <div className='left bg-info p-1 rborder'>
                                                    <h5>SIGNATURE</h5>
                                                </div>

                                                <table>
                                                    <tr>
                                                        <td className="thwidth left">Production Mode </td>
                                                        <td className="thwidth left"> 
                                                        <SwitchTog/>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </div>
                                
                                </Tab>
                                <Tab className='tab-content-bg tab-bg' eventKey="email" title={<span><i className="bi bi-house-door-fill me-2"/>Email</span>}>
                                
                                    <div >
                                        <div className='left bg-info p-1 rborder'>
                                            <h5>SYSTEM</h5>
                                        </div>

                                        <table>
                                            <tr>
                                                <td className="thwidth left">Production Mode </td>
                                                <td className="thwidth left"> 
                                                <SwitchTog/>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>

                                </Tab>
                                <Tab className='tab-content-bg tab-bg' eventKey="sms" title={<span><i className="bi bi-house-door-fill me-2"/>SMS</span>}>
                                
                                        <div >
                                            <div className='left bg-info p-1 rborder'>
                                                <h5>SYSTEM</h5>
                                            </div>

                                            <table>
                                                <tr>
                                                    <td className="thwidth left">Production Mode </td>
                                                    <td className="thwidth left"> 
                                                    <SwitchTog/>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
                                
                                </Tab>

                        </Tabs>
                    </div>
                </div>
            </div>
        );
}
 
export default Templates;