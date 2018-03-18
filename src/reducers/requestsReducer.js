import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function plannerToDoReducer(state = initalState.requests, action) {
    switch(action.type) {
        case types.LOAD_REQUESTS_SUCCESS:
            return action.requests;
        case types.HANDLE_REQUEST_SUCCESS:
            return Object.assign({}, state, action.newCurrentUser)
        default:
            return state;
    }
}