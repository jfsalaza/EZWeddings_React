import expect from 'expect';
import myPartnersReducer from './myPartnersReducer';
import * as actions from '../actions/myPartnersActions';

describe('Planner Reducer', () => {
    it('should add a new todo item to the list when passed ADD_TODO_ITEM_SUCCESS', () => {
        const initialState = {
            planner1: {
                business1: {
                    chat: [],
                    todo: [],
                    idCounter: 0
                }
            },
            business1: {
                planner1: {
                    chat: [],
                    todo: [],
                    idCounter: 0
                }
            }
        };

        const toDoLoad = [
            {
                planner1: {
                    business1: {
                        chat: [],
                        todo: [{id: 0, text: "A"}],
                        idCounter: 1
                    }   
                },
                business1: {
                    planner1: {
                        chat: [],
                        todo: [{id: 0, text: "A"}],
                        idCounter: 1
                    }   
                }

            }
        ]

        const action = actions.addToDoItemSuccess(toDoLoad);
        const newState = myPartnersReducer(initialState, action);

        expect(newState.planner1.business1.todo.length).toEqual(1);
        expect(newState.business1.planner1.todo.length).toEqual(1);
        expect(newState.planner1.business1.todo[0].idCounter).toEqual(newState.business1.planner1.todo[0].idCounter);
        expect(newState.planner1.business1.todo[0].text).toEqual(newState.business1.planner1.todo[0].text);
    });

    it('should add a new message to the chat when passed SEND_MESSAGE_SUCCESS', () => {
        const initialState = {
            planner1: {
                business1: {
                    chat: [],
                    todo: [],
                    idCounter: 0
                }
            },
            business1: {
                planner1: {
                    chat: [],
                    todo: [],
                    idCounter: 0
                }
            }
        };

        const messageLoad = [
            {
                planner1: {
                    business1: {
                        chat: [{sender:"planner1", msg: "A"}],
                        todo: [],
                        idCounter: 0
                    }   
                },
                business1: {
                    planner1: {
                        chat: [{sender:"planner1", msg: "A"}],
                        todo: [],
                        idCounter: 0
                    }   
                }

            }
        ]

        const action = actions.sendMessageSuccess(messageLoad);
        const newState = myPartnersReducer(initialState, action);

        expect(newState.planner1.business1.chat.length).toEqual(1);
        expect(newState.business1.planner1.chat.length).toEqual(1);
        expect(newState.planner1.business1.chat[0].sender).toEqual(newState.business1.planner1.chat[0].sender);
        expect(newState.planner1.business1.chat[0].msg).toEqual(newState.business1.planner1.chat[0].msg);
    });
});
