import {combineReducers} from 'redux';
import listMovieReducer from '../components/ListMovie/modules/reducer'
import TheaterSystemManagementReducer from '../components/ShowTime/modules/reducer'
const rootReducer = combineReducers({
    listMovieReducer,
    TheaterSystemManagementReducer
});
export default rootReducer;