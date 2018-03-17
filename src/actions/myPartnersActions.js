import MyPartnersApi from '../api/mockMyPartnersApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadMyPartnersSuccess(my_partners) {
    return {type: types.LOAD_MY_PARTNERS_SUCCESS, my_partners};
}

export function loadMyPartners() {
    return dispatch => {
        dispatch(beginAjaxCall());
        return MyPartnersApi.getAllMyPartners().then(my_partners => {
            dispatch(loadMyPartnersSuccess(my_partners));
        }).catch(error => {
            throw(error);
        });
    };
}

export function sendMessageSuccess(my_partners) {
    return {type: types.SEND_MESSAGE_SUCCESS, my_partners};
}

export function sendMessage(message){
    return dispatch => {
        dispatch(beginAjaxCall());
        return MyPartnersApi.sendMessage(message).then(my_partners => {
            dispatch(sendMessageSuccess(my_partners));
        }).catch(error => {
            throw(error);
        });
    };
}

