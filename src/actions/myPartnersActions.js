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

export function sendMessageSuccess(message) {
    return {type: types.SEND_MESSAGE_SUCCESS, message};
}

export function sendMessage(message){
    console.log(message);
    return dispatch => {
        dispatch(beginAjaxCall());
        return MyPartnersApi.sendMessage(message).then(message => {
            console.log("In action");
            console.log(message);
            dispatch(sendMessageSuccess(message));
        }).catch(error => {
            throw(error);
        });
    };
}

