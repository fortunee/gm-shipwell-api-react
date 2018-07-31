import { combineReducers } from 'redux';
import userReducer from './userReducer';
import addressReducer from './addressReducer';

export default combineReducers({
    user: userReducer,
    addresses: addressReducer
})