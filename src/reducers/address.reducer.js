import { FETCH_ADDRESSES, NEW_ADDRESS } from './../actions/types';

const initialState = {
    address: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ADDRESSES:
            return {
                ...state,
                address: action.payload
            }
        default:
            return state;
    }
}
