import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function currentUserReducer(state = initalState.current_user, action) {
    switch(action.type) {
        case types.GET_CURRENT_USER_SUCCESS:
        return action.current_user;
        default:
            return state;
    }
}