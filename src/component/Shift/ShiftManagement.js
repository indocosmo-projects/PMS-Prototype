import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import '../../style.css';
import './ShiftManagement.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import OpenShift from '../OpenShift/OpenShift';

function ShiftManagement() {
     

    const details =  
    [
    {id: 1, shiftno:1,user :'admin',shift:'SHIFT1',floatingamount:'₹ 2000.00',shiftopeningdatetime:'17-08-2022 13:08:50', date:'17-08-2022',closingdatetime:'19-08-2022 13:08:50'},
    {id: 2, shiftno:2,user :'admin',shift:'SHIFT1',floatingamount:'₹ 2000.00',shiftopeningdatetime:'17-08-2022 13:08:50', date:'17-08-2022',closingdatetime:'19-08-2022 13:08:50'},
    {id: 3, shiftno:3,user :'admin',shift:'SHIFT1',floatingamount:'₹ 2000.00',shiftopeningdatetime:'17-08-2022 13:08:50', date:'17-08-2022',closingdatetime:'19-08-2022 13:08:50'},
    {id: 4, shiftno:4,user :'admin',shift:'SHIFT1',floatingamount:'₹ 2000.00',shiftopeningdatetime:'17-08-2022 13:08:50', date:'17-08-2022',closingdatetime:'19-08-2022 13:08:50'},
    ];



    const tdata = () =>{
        return(
                <tbody>
                    {
                    details.map(detail => <tr key={detail.id} >
                        <td className="left">{detail.shiftno}</td>
                        <td className="left">{detail.user}</td>
                        <td className="left">{detail.shift}</td>
                        <td className="left">{detail.floatingamount}</td>
                        <td className="left">{detail.shiftopeningdatetime}</td>
                        <td className="left">{detail.date}</td>
                        <td className="left">{detail.closingdatetime}</td>   
                        <td className="left"><button className="btn btn-danger">Close Shift</button></td>   
                    </tr>
                    )}
                    
                </tbody>
        );
    }


return( 
    <div>
         <div className="section">
                <div className="container-fluid formcontent">
                     {/* ----- Heading ------ */}
                     <div>
                        <h5 className="header"> Shift Management </h5>
                    </div>
                    <div className="btnright">
                        <ul className="ullist">
                            <li><button className="btn btn-success m-1">Back</button></li>
                            <li><button className="btn "><OpenShift/></button></li>
                        </ul>
                    </div>

                     <table className="table table-bordered">
                            <thead >
                                <tr className="greyshade">
                                    <th className="thstyle left">ShiftNo</th>
                                    <th className="thstyle left">User</th>
                                    <th className="thstyle left">Shift</th>
                                    <th className="thstyle left">Floating Amount</th>
                                    <th className="tdwidthguest left">Shift Opening Date & Time</th>
                                    <th className="thstyle left">Date</th>
                                    <th className="tdwidthguest left">Closing Date & Time</th>
                                    <th className="thstyle left"></th>
                                </tr>
                            </thead>
                            {tdata()}

                        </table>

                </div>
        </div>
    </div>
);
}
 
export default ShiftManagement;