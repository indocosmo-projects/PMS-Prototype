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
// import Navigationbar from './component/Common/Navigationbar';
import CheckInEdit from './component/CheckInEdit/CheckInEdit';
import ShiftManagement from './component/Shift/ShiftManagement';
import Request from './component/Request/Request';
import NewRequest from './component/NewRequest/NewRequest';
import CheckOut from './component/CheckOut/CheckOut';
import Reports from './component/Reports/Reports';
import CheckOutGrp from './component/CheckOut/CheckOutGrp';
import HKStatus from './component/HKStatus/HKStatus';
import NightAudit from './component/NightAudit/NightAudit';
import MergeRoom from './component/MergeRoom/MergeRoom';
import Users from './component/Users/Users';
import UserGroups from './component/UserGroups/UserGroups';
import Facility from './component/Facility/Facility';
import PettyCash from './component/PettyCash/PettyCash';
import FacilityProvider from './component/FacilityProvider/FacilityProvider';
import PettyCashHeader from './component/PettyCash/PettyCashHeader';
import Department from './component/Department/Department';
import SystemSettings from './component/SystemSettings/SystemSettings';
import Currency from './component/Currency/Currency';
import AccountMaster from './component/AccountMaster/AccountMaster';
import Season from './component/Season/Season';
import Discount from './component/Discount/Discount';
import Dashboard from './component/Dashboard/Dashboard'
import Tax from './component/Tax/Tax';
import Templates from './component/Templates/Templates';
import ShiftItems from './component/ShiftItems/ShiftItems';
import RoomType from './component/RoomType/RoomType';
import Room from './component/Room/Room';
import Floor from './component/Floor/Floor';
import Corporates from './component/Corporates/Corporates';
import RoomRates from './component/RoomRates/RoomRates';
import PettyCashSetup from './component/PettyCashSetup/PettyCashSetup';
import CorporateRates from './component/CorporateRates/CorporateRates';



function App() {

        return (
    <div className="App">
      
        <Router>

        <NavigationbarNew /> 

            <Switch>
                <Route exact path='/dashboard' component={Dashboard}/>
                <Route exact path='/newreservation' component={NewReservation}/>
                <Route exact path="/reservation" component={Reservation}/>
                <Route exact path="/reception" component={Reception}/>
                <Route exact path="/receptionexpectedarrival" component={ReceptionExpectedArrivals}/>
                <Route exact path="/receptionhotelstatus" component={ReceptionHotelStatus}/>
                <Route exact path="/roomlist" component={RoomList}/>
                <Route exact path="/checkInEdit" component={CheckInEdit}/>
                {/* <Route exact path="/checkInOtherDetails" component={CheckInEditOtherDetails}/> */}
                <Route exact path="/shiftManagement" component={ShiftManagement}/>
                <Route exact path="/request" component={Request}/>
                <Route exact path="/newrequest" component={NewRequest}/>
                <Route exact path="/checkOut" component={CheckOut}/>
                <Route exact path="/reports" component={Reports}/>
                <Route exact path="/checkOutGrp" component={CheckOutGrp}/>
                <Route exact path="/hkstatus" component={HKStatus}/>
                <Route exact path="/nightaudit" component={NightAudit}/>
                <Route exact path="/mergeroom" component={MergeRoom}/>
                <Route exact path="/users" component={Users}/>
                <Route exact path="/usergroup" component={UserGroups}/>
                <Route exact path="/facility" component={Facility}/>
                <Route exact path="/facilityprovider" component={FacilityProvider}/>
                <Route exact path="/pettycash" component={PettyCash}/>
                <Route exact path="/pettycashheader" component={PettyCashHeader}/>
                <Route exact path="/systemsettings" component={SystemSettings}/>
                <Route exact path="/department" component={Department}/>
                <Route exact path="/currency" component={Currency}/>
                <Route exact path="/accountmaster" component={AccountMaster}/>
                <Route exact path="/season" component={Season}/>
                <Route exact path="/discount" component={Discount}/>
                <Route exact path="/tax" component={Tax}/>
                <Route exact path="/templates" component={Templates}/>
                <Route exact path="/shiftitems" component={ShiftItems}/>
                <Route exact path="/roomtype" component={RoomType}/>
                <Route exact path="/room" component={Room}/>
                <Route exact path="/floor" component={Floor}/>
                <Route exact path="/corporaterates" component={CorporateRates}/>
                <Route exact path="/corporates" component={Corporates}/>
                <Route exact path="/roomrates" component={RoomRates}/>
                <Route exact path="/pettycashsetup" component={PettyCashSetup}/>
            </Switch>

            <Footer/>

          </Router>

            
        
    </div>
  );
}

export default App;
