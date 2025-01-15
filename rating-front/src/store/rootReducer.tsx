import { combineReducers } from 'redux';
import mainPageReducer from '../store/slices/mainPageSlice';

const rootReducer = combineReducers({
    mainPage: mainPageReducer
});

export default rootReducer;