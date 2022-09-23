import React from 'react';
import './Reception.css';
import '../../style.css';

class ReceptionHotelStatus extends React.Component {
    
    render() { 
        return(
            <div className="section">
                <div className="container-fluid">
                    {/* ----- Heading ------ */}
                    <div>
                        <h5 className="header"> RESERVATIONS </h5>
                    </div>

                    <div className="p-3">
                        <div className="height">
                            <a className="nvlink" href="/reception">IN-HOUSE</a>
                            <a className="nvlink" href="/receptionexpectedarrival">EXPECTED ARRIVALS</a>
                            <a className="nvlink active" href="/receptionhotelstatus">HOTEL STATUS</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
 
export default ReceptionHotelStatus;