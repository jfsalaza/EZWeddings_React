import * as types from '../actions/actionTypes';
import initalState from './initialState';

export default function plannerToDoReducer(state = initalState.planner_todo, action) {
    switch(action.type) {
        case types.LOAD_PLANNER_TODO_SUCCESS:
            return action.planner_todo;
        case types.ADD_PLANNER_TODO_ITEM_SUCCESS:
            return Object.assign({}, state, action.newCurrentUser);
        default:
            return state;
    }
}