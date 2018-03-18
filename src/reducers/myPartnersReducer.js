import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function myPartnersReducer(state = initalState.my_partners, action) {
    switch(action.type) {
        case types.LOAD_MY_PARTNERS_SUCCESS:
            return action.my_partners;
        case types.SEND_MESSAGE_SUCCESS:
           return Object.assign({}, state, action.updatedPartner[0], action.updatedPartner[1]);
        case types.ADD_TODO_ITEM_SUCCESS:
            return Object.assign({}, state, action.newCurrentUser[0], action.newCurrentUser[1]);
        default:
            return state;
    }
}