import UsersApi from '../api/mockUsersApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import BusinessAd from '../components/business_ad/BusinessAd';

export function loadUsersSuccess(users) {
    return {type: types.LOAD_USERS_SUCCESS, users};
}

export function getCurrentUserSuccess(current_user) {
    return {type: types.GET_CURRENT_USER_SUCCESS, current_user};
}

export function getBusinessAdSuccess(businessAds){
    return {type: types.GET_BUSINESS_ADS_SUCCESS, businessAds};
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

export function getBusinessAd(){
    console.log("Hello from getBusinessAd");
    return dispatch =>{
        dispatch(beginAjaxCall());
        return UsersApi.getBusinessAd().then(businessAds =>{
            dispatch(getBusinessAdSuccess(businessAds));
        }).catch(error =>{
            throw(error);
        });
    }
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

export function loadRequestsSuccess(requests) {
    return {type: types.LOAD_REQUESTS_SUCCESS, requests};
}

export function loadRequests() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return UsersApi.getRequests().then(requests => {
            dispatch(loadRequestsSuccess(requests));
        }).catch(error => {
            throw(error);
        });
    };
}

export function handleRequestSuccess(newCurrentUser) {
    return {type: types.HANDLE_REQUEST_SUCCESS, newCurrentUser}
}

export function handleRequest(requestLoad) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return UsersApi.handleRequest(requestLoad).then(newCurrentUser => {
            dispatch(handleRequestSuccess(newCurrentUser));
        }).catch(error => {
            throw(error);
        });
    };
}


export function updateUserSuccess(users) {
    return {type: types.UPDATE_USER_SUCCESS, users};
}

export function updateUser(freshUser) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return UsersApi.updateFreshUser(freshUser).then(newCurrentUser => {
            dispatch(updateUserSuccess(newCurrentUser));
        }).catch(error => {
            throw(error);
        })
    };
}