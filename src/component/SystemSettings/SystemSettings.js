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
                            <h3 className="header"><i className="bi bi-calendar2-plus-fill me-2"></i>System Settings</h3>
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
                                        <div className="form-group">
                                            <input type="text" className="form-control company" id="company" value="INDOCOSMO" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Building </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control building" id="building" value="K P VALLON ROAD" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Street </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control street" id="street" value="KADAVANTHRA" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">City </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control city" id="city" value="KOCHI" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">State </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control state" id="state" value="Kerala" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Country </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control country" id="country" value="India" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">GST No </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control gst" id="gst" value="32ALRPM4399J2ZE" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">EMAIL </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control email" id="email" value="indocosmo@gmail.com" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">GST No </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control gst" id="gst" value="32ALRPM4399J2ZE" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">COMPANY URL </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control companyurl" id="companyurl" value="" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">PHONE</td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control phone" id="phone" value="94470525282" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">LONG STAY </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="number" className="form-control longstay" id="longstay" value="5" />
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
                                    <div className="form-group">
                                            <input type="text" className="form-control head" id="head" value="BOOKING CONFIRMATION VOUCHER" />
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">TEXT 1 </td>
                                    <td className="thwidth2 left"> 
                                    <div className="form-group">
                                            <input type="text" className="form-control head" id="head" value="Check-In/Check-Out Time is 12.00Noon." />
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">TEXT 2 </td>
                                    <td className="thwidth2 left"> 
                                    <div className="form-group">
                                            <input type="text" className="form-control head" id="head" value="Early Checkin Is Subjected To Availability." />
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">TEXT 3 </td>
                                    <td className="thwidth2 left"> 
                                    <div className="form-group">
                                            <input type="text" className="form-control head" id="head" value="Should You wish to guarantee the reservation,kindly fill the Credit Card Details." />
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">TEXT 4 </td>
                                    <td className="thwidth2 left"> 
                                    <div className="form-group">
                                            <input type="text" className="form-control head" id="head" value="Retention charges for one night will be levied in case of No Shows Or Cancellations before 24 Hours of Check-In" />
                                    </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">TEXT 5 </td>
                                    <td className="thwidth2 left"> 
                                    <div className="form-group">
                                            <input type="text" className="form-control head" id="head" value="In absence of arrival details/timings and MOBILE NO of the guest the room reserva tion will be deemed as guaranteed upto 15:00 hrs only,and may be released thereafter." />
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
                                        <div className="form-group">
                                            <select className="form-control" id="sel1">
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
                                    <div className="form-group">
                                            <select className="form-control" id="sel1">
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
                                    <div className="form-group ">
                                            <select className="form-control" id="currency">
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
                                    <div className="form-group">
                                    <input type="text" className="form-control decimal" id="decimal" value="2" disabled />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>



                           <div >
                            <div className='left bg-info p-1 rborder'>
                                <h5>TARIFF</h5>
                            </div>

                            <table>
                                <tr>
                                    <td className="thwidth left">Weekly Special days </td>
                                    <td className="thwidth2 left"> 
                                    <div className="row">
                                        <div className="col-sm-1">
                                            <SwitchTog/><h6>SUN</h6>
                                        </div>
                                        <div className="col-sm-1">
                                            <SwitchTog/><h6>MON</h6>
                                        </div>
                                        <div className="col-sm-1">
                                            <SwitchTog/><h6>TUE</h6>
                                        </div>
                                        <div className="col-sm-1">
                                            <SwitchTog/><h6>WED</h6>
                                        </div>
                                        <div className="col-sm-1">
                                            <SwitchTog/><h6>THR</h6>
                                        </div>
                                        <div className="col-sm-1">
                                            <SwitchTog/><h6>FRI</h6>
                                        </div>
                                        <div className="col-sm-1">
                                            <SwitchTog/><h6>SAT</h6>
                                        </div>
                                    </div>
                                    
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Tariff Includes Taxes </td>
                                    <td className="thwidth2 left"> 
                                    <SwitchTog/>
                                    </td>
                                </tr>
                            </table>
                        </div>


                          <div >
                            <div className='left bg-info p-1 rborder'>
                                <h5>FORMATS</h5>
                            </div>
                            <table>
                                <tr>
                                    <td className="thwidth left">Date Display Format <span className="asterik">*</span> </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value="dd-mm-yyyy" disabled />
                                        </div>
                                    </td>
                                    <td className="thwidth1 left">  <b>(E.g 24-08-2015)</b> </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Time Display Format <span className="asterik">*</span> </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value="hh:mm" disabled />
                                        </div>
                                    </td>
                                    <td className="thwidth1 left">  <b>(E.g 02:00 AM)</b> </td>
                                </tr>
                            </table>
                          </div>


                        <div >
                            <div className='left bg-info p-1 rborder'>
                                <h5>SERVICE CHARGES</h5>
                            </div>
                            <table>
                                <tr>
                                    <td className="thwidth left">Service Charge Is Applicable </td>
                                    <td className="thwidth left"> 
                                    <SwitchTog/>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        
                        <div >
                            <div className='left bg-info p-1 rborder'>
                                <h5>TAXATION</h5>
                            </div>
                            <table>
                                <tr>
                                    <td className="thwidth left">Name </td>
                                    <td className="thwidth left">Select</td>
                                    <td className="thwidth left">User Defined Name</td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Tax-1 </td>
                                    <td className="thwidth left"><SwitchTog/></td>
                                    <td className="thwidth left">
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value="CGST"  />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Tax-2 </td>
                                    <td className="thwidth left"><SwitchTog/></td>
                                    <td className="thwidth left">
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value="SGST"  />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Tax-3 </td>
                                    <td className="thwidth left"><SwitchTog/></td>
                                    <td className="thwidth left">
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value="Cess"  />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Tax-4 </td>
                                    <td className="thwidth left"><SwitchTog/></td>
                                    <td className="thwidth left">
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value="" disabled  />
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        

                           
                           <div >
                                <div className='left bg-info p-1 rborder'>
                                    <h5>ROUNDING</h5>
                                </div>
                                <table>
                                    <tr>
                                        <td className="thwidth left">Final Bill Rounding <span className="asterik">*</span> </td>
                                        <td className="thwidth left">
                                        <div className="form-group">
                                            <select className="form-control" id="sel1">
                                                <option selected>Near to 1</option>
                                                <option>Near to 50</option>
                                            </select>
                                        </div></td>
                                    </tr>
                                </table>
                            </div>


                              <div >
                                <div className='left bg-info p-1 rborder'>
                                    <h5>RESERVATION</h5>
                                </div>
                                <div>
                                <table>
                                    <tr>
                                        <td className="thwidth3 left">Confirm bookings before<span className="asterik">*</span> </td>
                                        <td className="thwidth left">
                                            <div className="form-group">
                                                <input type="text" className="form-control decimal" id="decimal" value="0"   />
                                            </div>
                                        </td>
                                        <td>
                                            <b>days before the arrival date</b>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="thwidth3 left">Max. rooms per booking<span className="asterik">*</span> </td>
                                        <td className="thwidth left">
                                            <div className="form-group">
                                                <input type="text" className="form-control decimal" id="decimal" value="29"   />
                                            </div>
                                        </td>
                                        <td>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="thwidth3 left">Max. nights per booking<span className="asterik">*</span> </td>
                                        <td className="thwidth left">
                                            <div className="form-group">
                                                <input type="text" className="form-control decimal" id="decimal" value="50"   />
                                            </div>
                                        </td>
                                        <td>
                                        </td>
                                    </tr>
                                </table>
                                </div>

                                <div>
                                <table>
                                     <tr>
                                        <td className="thwidth3 left">Send notification on reservation<span className="asterik">*</span> </td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> Email </div></td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> SMS </div></td>
                                    </tr>

                                    <tr>
                                        <td className="thwidth3 left">Send notification on Cut Off Date<span className="asterik">*</span> </td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> Email </div></td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> SMS </div></td>
                                    </tr>

                                       <tr>
                                        <td className="thwidth3 left">Send notification on confirmation<span className="asterik">*</span> </td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> Email </div></td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> SMS </div></td>
                                    </tr>

                                       <tr>
                                        <td className="thwidth3 left">Send notification on cancellation<span className="asterik">*</span> </td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> Email </div></td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> SMS </div></td>
                                    </tr>
                                    
                                  

                                      <tr>
                                        <td className="thwidth3 left">Send notification on No Show<span className="asterik">*</span> </td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> Email </div></td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> SMS </div></td>
                                    </tr>

                                      <tr>
                                        <td className="thwidth3 left">Send notification on Check In<span className="asterik">*</span> </td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> Email </div></td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> SMS </div></td>
                                    </tr>

                                     <tr>
                                        <td className="thwidth3 left">Send notification on Check Out<span className="asterik">*</span> </td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> Email </div></td>
                                        <td><div className="inline"> <SwitchTog/> </div><div className="inline"> SMS </div></td>
                                    </tr>

                                    </table>
                                </div>
                            </div>


                            
                            <div >
                                <div className='left bg-info p-1 rborder'>
                                    <h5>FINANCIAL YEAR</h5>
                                </div>
                                <div className="right">
                                    <button className="btn btn-secondary">ADD</button>
                                </div>
                                <table>
                                    <tr>
                                        <td className="thwidth left"><b>CODE</b></td>
                                        <td className="thwidth left"><b>FROM</b></td>
                                        <td className="thwidth left"><b>TO</b></td>
                                        <td className="thwidth left"><b>Use CODE</b></td>
                                        <td className="thwidth left"><b>Use PREFIX</b></td>
                                    </tr>

                                     <tr>
                                        <td className="thwidth left"><b>2022-23</b></td>
                                        <td className="thwidth left"><b>01-04-2022</b></td>
                                        <td className="thwidth left"><b>31-03-2023</b></td>
                                        <td className="thwidth left"><b><SwitchTog/></b></td>
                                        <td className="thwidth left"><b><SwitchTog/></b></td>
                                    </tr>
                                   
                                </table>
                               
                            </div>

                             <div >
                                <div className='left bg-info p-1 rborder'>
                                    <h5>MAIL SETTINGS</h5>
                                </div>
                                <table>
                                <tr>
                                    <td className="thwidth left">SMTP Server </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value="smtp.gmail.com"  />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">SMTP Port </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value="465"  />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Mail ID </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value="booking@gmail.com"  />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Password </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="password" className="form-control decimal" id="decimal" value="smtp.gmail.com"  />
                                        </div>
                                    </td>
                                </tr>
                                </table>
                            </div>

                             <div >
                                <div className='left bg-info p-1 rborder'>
                                    <h5>SMS SETTINGS</h5>
                                </div>

                                <table>
                                   <tr>
                                    <td className="thwidth left">WEB Service </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value=""  />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">User ID </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value=""  />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="thwidth left">Password </td>
                                    <td className="thwidth1 left"> 
                                        <div className="form-group">
                                            <input type="text" className="form-control decimal" id="decimal" value=""  />
                                        </div>
                                    </td>
                                </tr>
                                </table>
                            </div>


                            <div className="mt-3 left">
                                <button type="button" className="btn btn-primary">Save</button>
                                <button type="button" className="btn btn-secondary">Back</button>
                            </div>


                    </div>
                </div>
            </div>
        );
}
 
export default SystemSettings;