import React from 'react';
import './Templates.css'
import SwitchTog from '../Common/SwitchTog';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function Templates() {


    const details =  
    [
    {id: 1, code:'confirm',purpose :'CONFIRMATION',group:'RESERVATION',subject:'Booking Confirmation'},
    {id: 2, code:'confirm',purpose :'CONFIRMATION',group:'RESERVATION',subject:'Booking Confirmation'},
    {id: 3, code:'confirm',purpose :'CONFIRMATION',group:'RESERVATION',subject:'Booking Confirmation'},
   ];


   const rdetails =  
   [
   {id: 1, code:'CheckOut SMS',purpose :'THANKS',group:'CHECKOUT',content:'Dear {name}%n %nThank you for staying at NIKO Hotels, Kochi. We would appreciate to have your feedback and review comments.%n %nPlease click on the following link to start your review :%n https://tinyurl.com/y9j2856g%n %nThanks and Regards,%nCustomer Relations, Niko Hotels, Kochi'},
   {id: 2, code:'CheckOut SMS',purpose :'THANKS',group:'CHECKOUT',content:'Dear {name}%n %nThank you for staying at NIKO Hotels, Kochi. We would appreciate to have your feedback and review comments.%n %nPlease click on the following link to start your review :%n https://tinyurl.com/y9j2856g%n %nThanks and Regards,%nCustomer Relations, Niko Hotels, Kochi'},
   {id: 3, code:'CheckOut SMS',purpose :'THANKS',group:'CHECKOUT',content:'Dear {name}%n %nThank you for staying at NIKO Hotels, Kochi. We would appreciate to have your feedback and review comments.%n %nPlease click on the following link to start your review :%n https://tinyurl.com/y9j2856g%n %nThanks and Regards,%nCustomer Relations, Niko Hotels, Kochi'},
   ];


    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.code}</td>
                        <td className="left">{detail.purpose}</td>
                        <td className="left">{detail.group}</td>
                        <td className="left">{detail.subject}</td>
                    </tr>
                    )}
                    
                </tbody>
        );
    }

    
    const rtdata = () =>{
        return(
                <tbody>
                    {
                    rdetails.map(rdetail => <tr key={rdetail.id} >
                        <td className="left">{rdetail.code}</td>
                        <td className="left">{rdetail.purpose}</td>
                        <td className="left">{rdetail.group}</td>
                        <td className="left">{rdetail.content}</td>
                    </tr>
                    )}
                     <tr>
                        <td className="left"></td>
                        <td className="left">BOOKING</td>
                        <td className="left">RESERVATION</td>
                        <td className="left"></td>
                    </tr>
                    
                </tbody>
        );
    }


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

                                                 <div className="row">
                                                        <div className="col-sm-4 col-md-4">
                                                        <table>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 1 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"   />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 2 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"  />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 3 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"   />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 4 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"   />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                        </table>
                                                        </div>

                                                         <div className="col-sm-4 col-md-4">
                                                        <table>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 1 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"   />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 2 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"  />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 3 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"   />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 4 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"   />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                        </table>
                                                        </div>

                                                         <div className="col-sm-4 col-md-4">
                                                        <table>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 1 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"   />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 2 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"  />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 3 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"   />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="thwidth left">LINE 4 </td>
                                                                    <td className="thwidth2 left"> 
                                                                        <div class="form-group">
                                                                            <input type="text" class="form-control" id="usr"   />
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                        </table>
                                                        </div>
                                                 </div>       


                                            </div>

                                            <div >
                                                <div className='left bg-info p-1 rborder'>
                                                    <h5>SIGNATURE</h5>
                                                </div>

                                                <div className="row">
                                                        <div className="col-sm-6 col-md-6">
                                                            <table>
                                                                    <tr>
                                                                        <td className="thwidth left">LINE 1 </td>
                                                                        <td className="thwidth2 left"> 
                                                                            <div class="form-group">
                                                                                <input type="text" class="form-control" id="usr"   />
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                            </table>
                                                        </div>
                                                        <div className="col-sm-6 col-md-6">
                                                            <table>
                                                                    <tr>
                                                                        <td className="thwidth left">LINE 2 </td>
                                                                        <td className="thwidth2 left"> 
                                                                            <div class="form-group">
                                                                                <input type="text" class="form-control" id="usr"  />
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>
                                                        </div>
                                                    </div>

                                                    <div className="row mt-2">
                                                        <div className="col-sm-4">
                                                            <table>
                                                                    <tr>
                                                                        <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                                                        <td className="thwidth2 left"> 
                                                                                Include Header And Footer
                                                                        </td>
                                                                    </tr>
                                                            </table>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <table>
                                                                    <tr>
                                                                        <td className="thwidth "><input type="checkbox" id="chk" className="chk"/> </td>
                                                                        <td className="thwidth2 left"> 
                                                                                Include Tax Summary
                                                                        </td>
                                                                    </tr>
                                                            </table>
                                                        </div>
                                                        <div className="col-sm-4">
                                                            <button type="button" className="btn btn-primary right" id="">Save</button>
                                                        </div>
                                                    
                                                    </div>

                                            </div>
                                
                                </Tab>
                                <Tab className='tab-content-bg tab-bg' eventKey="email" title={<span><i className="bi bi-house-door-fill me-2"/>Email</span>}>
                                
                                    <div>

                                        <table className="table table-responsive table-bordered">
                                            <thead>
                                                <tr>
                                                    <th className="left">CODE</th>
                                                    <th className="left">PURPOSE</th>
                                                    <th className="left">GROUP</th>
                                                    <th className="left">SUBJECT</th>
                                                </tr>
                                            </thead>
                                           
                                            {tdata()}

                                        </table>
                                    </div>

                                </Tab>
                                <Tab className='tab-content-bg tab-bg' eventKey="sms" title={<span><i className="bi bi-house-door-fill me-2"/>SMS</span>}>

                                    <button className="btn btn-danger right m-2">ADD NEW</button>
                                         <div>
                                            <table className="table table-responsive table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th className="left">CODE</th>
                                                        <th className="left">PURPOSE</th>
                                                        <th className="left">GROUP</th>
                                                        <th className="left">SUBJECT</th>
                                                    </tr>
                                                </thead>
                                            
                                                {rtdata()}

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