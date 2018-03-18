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




