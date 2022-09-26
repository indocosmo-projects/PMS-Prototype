import axios from 'axios';


const USERS_REST_API_URL = 'http://localhost:8080/pms/reservation_test/getListData' ;

class ReservationService{

    getReservationList(){
        axios.get(USERS_REST_API_URL);
    }

    getReservationSearchData(){
        axios.get(USERS_REST_API_URL);
    }

}

export default new ReservationService();