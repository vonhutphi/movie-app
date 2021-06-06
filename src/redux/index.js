import {combineReducers} from 'redux';
import listMovieReducer from '../components/ListMovie/modules/reducer'
import TheaterSystemManagementReducer from '../components/ShowTime/modules/reducer'
import getMovieDetailReducer from '../pages/DetailPage/modules/reducer'
import authReducer from '../pages/HomeLogIn/modules/reducer'
import addUserReducer from '../pages/HomeSignUp/module/reducer'
import getBookingDetailReducer from '../pages/Booking/modules/reducer'
const rootReducer = combineReducers({
    listMovieReducer,
    TheaterSystemManagementReducer,
    getMovieDetailReducer,
    authReducer,
    addUserReducer,
    getBookingDetailReducer
});
export default rootReducer;