import expect from 'expect';
import requestsReducer from './requestsReducer';
import * as actions from '../actions/usersActions';

describe('Requests Reducer', () => {
    it('should delete request from requests list when passed HANDLE_REQUEST_SUCCESS', () => {
        const initialState = {
            business1: [
                {
                    uid: "planner1",
                    msg: "A"
                },
                {
                    uid: "planner2",
                    msg: "A"
                }
            ]
        };

        const requestLoad = {
            business1: [
                {
                    uid: "planner2",
                    msg: "A"
                }
            ]
        };

        const action = actions.handleRequestSuccess(requestLoad);
        const newState = requestsReducer(initialState, action);
        expect(newState.business1.length).toEqual(1);
        expect(newState.business1[0].uid).toEqual("planner2");
        expect(newState.business1[0].msg).toEqual("A");
    });

});
