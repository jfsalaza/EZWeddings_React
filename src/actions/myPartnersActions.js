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

export function sendMessageSuccess(updatedPartner) {
    return {type: types.SEND_MESSAGE_SUCCESS, updatedPartner};
}

export function sendMessage(message){
    return dispatch => {
        dispatch(beginAjaxCall());
        return MyPartnersApi.sendMessage(message).then(updatedPartner => {
            dispatch(sendMessageSuccess(updatedPartner));
        }).catch(error => {
            throw(error);
        });
    };
}

export function addToDoItemSuccess(newCurrentUser) {
    return {type: types.ADD_TODO_ITEM_SUCCESS, newCurrentUser};
}

export function addToDoItem(todoLoad) {
    return dispatch => {
        dispatch(beginAjaxCall());
        return MyPartnersApi.addToDo(todoLoad).then(newCurrentUser => {
            dispatch(addToDoItemSuccess(newCurrentUser));
        }).catch(error => {
            throw(error);
        })
    };
}

