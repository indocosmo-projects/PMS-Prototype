import './App.css';
import NewReservation from './component/NewReservation/NewReservation';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navigationbar from './component/Common/Navigationbar';
import Footer from './component/Common/Footer';

import Reservation from './component/Reservation/Reservation';
import CheckIn from './component/CheckIn/CheckIn';
import Reception from './component/Reception/Reception';
import ReceptionExpectedArrivals from './component/Reception/ReceptionExpectedArrivals';
import ReceptionHotelStatus from './component/Reception/ReceptionHotelStatus';
/*import NavigationbarMannual from './component/Common/NavigationbarMannual'; */

function App() {
        return (
    <div className="App">
        <Router>
            <Navigationbar/> 
           {/*   <NavigationbarMannual/> */}
            <Switch>
                <Route exact path='/' component={Reservation}/>
                <Route exact path='/newreservation' component={NewReservation}/>
                <Route exact path="/reservation" component={Reservation}/>
                <Route exact path="/checkIn" component={CheckIn}/>
                <Route exact path="/reception" component={Reception}/>
                <Route exact path="/receptionexpectedarrival" component={ReceptionExpectedArrivals}/>
                <Route exact path="/receptionhotelstatus" component={ReceptionHotelStatus}/>
            </Switch>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
