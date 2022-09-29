import axios from 'axios';


const USERS_REST_API_URL = 'http://localhost:8080/pms/reservation_test/getListData' ;
const USERS_LOGIN = 'http://localhost:8080/pms/reservation_test/getListData' ;
const USERS_DASHBOARD = 'http://localhost:8080/pms/dashboard' ;

class ReservationService{

    getReservationList(){
        axios.get(USERS_REST_API_URL);
    }

    getReservationSearchData(){
        axios.get(USERS_LOGIN);
    }

    getReservation(){
        axios.get(USERS_DASHBOARD);
    }
}

export default new ReservationService();