import './App.css';
import NewReservation from './component/NewReservation/NewReservation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './component/Common/Footer';
import Reservation from './component/Reservation/Reservation';
import Reception from './component/Reception/Reception';
import ReceptionExpectedArrivals from './component/Reception/ReceptionExpectedArrivals';
import ReceptionHotelStatus from './component/Reception/ReceptionHotelStatus';
import RoomList from './component/RoomList/RoomList';
import NavigationbarNew from './component/Common/NavigationbarNew';
// import NavigationbarMannual from './component/Common/NavigationbarMannual';
import CheckInEdit from './component/CheckInEdit/CheckInEdit';
import CheckInEditOtherDetails from './component/CheckInEdit/CheckInEditOtherDetails';
import ShiftManagement from './component/Shift/ShiftManagement';
import Request from './component/Request/Request';
import NewRequest from './component/NewRequest/NewRequest';
import CheckOut from './component/CheckOut/CheckOut';
import Reports from './component/Reports/Reports';
import CheckOutGrp from './component/CheckOut/CheckOutGrp';
import HKStatus from './component/HKStatus/HKStatus';
import NightAudit from './component/NightAudit/NightAudit';
import MergeRoom from './component/MergeRoom/MergeRoom';



function App() {
        return (
    <div className="App">
        <Router>

           <NavigationbarNew/>  
           {/* <NavigationbarMannual/> */}

            <Switch>
                <Route exact path='/' component={Reservation}/>
                <Route exact path='/newreservation' component={NewReservation}/>
                <Route exact path="/reservation" component={Reservation}/>
                <Route exact path="/reception" component={Reception}/>
                <Route exact path="/receptionexpectedarrival" component={ReceptionExpectedArrivals}/>
                <Route exact path="/receptionhotelstatus" component={ReceptionHotelStatus}/>
                <Route exact path="/roomlist" component={RoomList}/>
                <Route exact path="/checkInEdit" component={CheckInEdit}/>
                <Route exact path="/checkInOtherDetails" component={CheckInEditOtherDetails}/>
                <Route exact path="/shiftManagement" component={ShiftManagement}/>
                <Route exact path="/request" component={Request}/>
                <Route exact path="/newrequest" component={NewRequest}/>
                <Route exact path="/checkOut" component={CheckOut}/>
                <Route exact path="/reports" component={Reports}/>
                <Route exact path="/checkOutGrp" component={CheckOutGrp}/>
                <Route exact path="/hkstatus" component={HKStatus}/>
                <Route exact path="/nightaudit" component={NightAudit}/>
                <Route exact path="/mergeroom" component={MergeRoom}/>
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
