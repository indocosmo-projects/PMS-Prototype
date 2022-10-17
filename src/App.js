import './App.css';
import NewReservation from './component/NewReservation/NewReservation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Navigationbar from './component/Common/Navigationbar';
import Footer from './component/Common/Footer';

import Reservation from './component/Reservation/Reservation';

import Reception from './component/Reception/Reception';
import ReceptionExpectedArrivals from './component/Reception/ReceptionExpectedArrivals';
import ReceptionHotelStatus from './component/Reception/ReceptionHotelStatus';
import RoomList from './component/RoomList/RoomList';

import NavigationbarMannual from './component/Common/NavigationbarMannual';
import CheckInEdit from './component/CheckInEdit/CheckInEdit';
import CheckInEditOtherDetails from './component/CheckInEdit/CheckInEditOtherDetails';


function App() {
        return (
    <div className="App">
        <Router>

           {/* <Navigationbar/>   */}
           <NavigationbarMannual/>

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
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
