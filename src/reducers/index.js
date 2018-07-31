import { combineReducers } from 'redux';
import userReducer from './user.reducer';
import addressReducer from './address.reducer';

export default combineReducers({
    user: userReducer,
    addresses: addressReducer
})