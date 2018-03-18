import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function businessAdReducer(state = initalState.users, action) {
    switch(action.type) {
        case types.GET_BUSINESS_ADS_SUCCESS:
            return action.businessAds;
        default:
            return state;
    }
}
