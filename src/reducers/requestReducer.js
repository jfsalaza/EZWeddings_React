import initalState from './initialState';
import * as types from '../actions/actionTypes';
import MyPartnersApi from '../api/mockMyPartnersApi';

export default function (state = initalState.my_partners, action){
    console.log("inside reducers " + action.payload);
    switch(action.type){
        case types.PARTNER_ADDED:
            console.log("inside reducers " + action.payload);
            return{
                ...state,
                my_partners: [...state, action.payload] 
            }
            break;
    }

    return state;
}