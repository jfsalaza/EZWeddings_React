import UsersApi from '../api/mockUsersApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export function getCurrentUserSuccess(current_user) {
    return {type: types.GET_CURRENT_USER_SUCCESS, current_user};
}

export function loadUsers() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return UsersApi.getAllUsers().then(users => {
            dispatch(loadUsersSuccess(users));
        }).catch(error => {
            throw(error);
        });
    };
}

export function getCurrentUser() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return UsersApi.getCurrentUser().then(current_user => {
            dispatch(getCurrentUserSuccess(current_user));
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadPlannerToDoSuccess(planner_todo){
    return {type: types.LOAD_PLANNER_TODO_SUCCESS, planner_todo};
}

export function loadPlannerToDo() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return UsersApi.getPlannerToDo().then(planner_todo => {
            dispatch(loadPlannerToDoSuccess(planner_todo));
        }).catch(error => {
            throw(error);
        });
    };
}

export function addToDoItemSuccess(newCurrentUser) {
    return {type: types.ADD_PLANNER_TODO_ITEM_SUCCESS, newCurrentUser};
}

export function addToDoItem(todoLoad) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return UsersApi.addToDo(todoLoad).then(newCurrentUser => {
            dispatch(addToDoItemSuccess(newCurrentUser));
        }).catch(error => {
            throw(error);
        })
    };
}