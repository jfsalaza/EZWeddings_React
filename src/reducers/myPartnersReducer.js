import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function myPartnersReducer(state = initalState.my_partners, action) {
    switch(action.type) {
        case types.LOAD_MY_PARTNERS_SUCCESS:
        return action.my_partners;
        default:
            return state;
    }
}