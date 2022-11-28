import React, { Component } from 'react';
import './SystemSettings.css'
import SwitchTog from '../Common/SwitchTog';

function SystemSettings() {
        return(
            <div>
                <div className="section">
                    <div className="container-fluid formcontent">
                        {/* ----- Heading ------ */}
                        <div className='sticky-div'>
                            <h3 className="header"><i class="bi bi-calendar2-plus-fill me-2"></i>System Settings</h3>
                        </div>

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
                      

                         <div >
                            <div className='left bg-info p-1 rborder'>
                                <h5>COMPANY</h5>
                            </div>

                            <table>
                                <tr>
                                    <td className="thwidth left">Company </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="text" class="form-control company" id="company" value="INDOCOSMO" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Building </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="text" class="form-control building" id="building" value="K P VALLON ROAD" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Street </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="text" class="form-control street" id="street" value="KADAVANTHRA" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">City </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="text" class="form-control city" id="city" value="KOCHI" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">State </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="text" class="form-control state" id="state" value="Kerala" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Country </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="text" class="form-control country" id="country" value="India" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">GST No </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="text" class="form-control gst" id="gst" value="32ALRPM4399J2ZE" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">EMAIL </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="text" class="form-control email" id="email" value="indocosmo@gmail.com" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">GST No </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="text" class="form-control gst" id="gst" value="32ALRPM4399J2ZE" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">COMPANY URL </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="text" class="form-control companyurl" id="companyurl" value="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">PHONE</td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="text" class="form-control phone" id="phone" value="94470525282" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">LONG STAY </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <input type="number" class="form-control longstay" id="longstay" value="5" />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>


                          <div >
                            <div className='left bg-secondary p-1 rborder'>
                                <h5>RESERVATION CONFIRM REPORT DETAILS</h5>
                            </div>

                            <table>
                                <tr>
                                    <td className="thwidth left">HEAD </td>
                                    <td className="thwidth2 left"> 
                                    <div class="form-group">
                                            <input type="text" class="form-control head" id="head" value="BOOKING CONFIRMATION VOUCHER" />
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">TEXT 1 </td>
                                    <td className="thwidth2 left"> 
                                    <div class="form-group">
                                            <input type="text" class="form-control head" id="head" value="Check-In/Check-Out Time is 12.00Noon." />
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">TEXT 2 </td>
                                    <td className="thwidth2 left"> 
                                    <div class="form-group">
                                            <input type="text" class="form-control head" id="head" value="Early Checkin Is Subjected To Availability." />
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">TEXT 3 </td>
                                    <td className="thwidth2 left"> 
                                    <div class="form-group">
                                            <input type="text" class="form-control head" id="head" value="Should You wish to guarantee the reservation,kindly fill the Credit Card Details." />
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">TEXT 4 </td>
                                    <td className="thwidth2 left"> 
                                    <div class="form-group">
                                            <input type="text" class="form-control head" id="head" value="Retention charges for one night will be levied in case of No Shows Or Cancellations before 24 Hours of Check-In" />
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">TEXT 5 </td>
                                    <td className="thwidth2 left"> 
                                    <div class="form-group">
                                            <input type="text" class="form-control head" id="head" value="In absence of arrival details/timings and MOBILE NO of the guest the room reserva tion will be deemed as guaranteed upto 15:00 hrs only,and may be released thereafter." />
                                    </div>
                                    </td>
                                </tr>
                            </table>
                        </div>



                          <div >
                            <div className='left bg-info p-1 rborder'>
                                <h5>BUSINESS</h5>
                            </div>

                            <table>
                                <tr>
                                    <td className="thwidth left">Business year start in <span className="asterik">*</span> </td>
                                    <td className="thwidth1 left"> 
                                        <div class="form-group">
                                            <select class="form-control" id="sel1">
                                                <option selected>April</option>
                                                <option>May</option>
                                                <option>June</option>
                                                <option>July</option>
                                                <option>August</option>
                                                <option>September</option>
                                                <option>October</option>
                                                <option>November</option>
                                                <option>December</option>
                                                <option>January</option>
                                                <option>February</option>
                                                <option>March</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Week starts on <span className="asterik">*</span></td>
                                    <td className="thwidth1 left"> 
                                    <div class="form-group">
                                            <select class="form-control" id="sel1">
                                                <option selected>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                                <option>Thursday</option>
                                                <option>Friday</option>
                                                <option>Saturday</option>
                                                <option>Sunday</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Base Currency <span className="asterik">*</span></td>
                                    <td className="thwidth1 left"> 
                                    <div class="form-group ">
                                            <select class="form-control" id="currency">
                                                <option selected>YEN</option>
                                                <option>INR</option>
                                                <option>EURO</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                   <tr>
                                    <td className="thwidth left">Decimal </td>
                                    <td className="thwidth1 left"> 
                                    <div class="form-group">
                                            <select class="form-control" id="sel1">
                                                <option selected>Monday</option>
                                                <option>Tuesday</option>
                                                <option>Wednesday</option>
                                                <option>Thursday</option>
                                                <option>Friday</option>
                                                <option>Saturday</option>
                                                <option>Sunday</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>


                    </div>
                </div>
            </div>
        );
}
 
export default SystemSettings;