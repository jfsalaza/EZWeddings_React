import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function myPartnersReducer(state = initalState.my_partners, action) {
    switch(action.type) {
        case types.LOAD_MY_PARTNERS_SUCCESS:
            return action.my_partners;
        case types.SEND_MESSAGE_SUCCESS:
            console.log(state);
           //const o = {};
           //o[action.message.msg] = action.message;
           return Object.assign({}, state, action.message);
        default:
            return state;
    }
}