import expect from 'expect';
import courseReducer from './courseReducer';
import plannerToDoReducer from './plannerToDoReducer';
import * as actions from '../actions/courseActions';
import * as actions1 from '../actions/usersActions';

describe('Planner Reducer', () => {
    it('should add a new todo item to the list when passed ADD_PLANNER_TODO_ITEM_SUCCESS', () => {
        const initialState = {
            user1: {
                todo: [],
                idCounter: 0
            }
        };

        const toDoLoad = {
            user1: {
                todo: [{id: 0, text: "A"}],
                idCounter: 1
            }
        };

        const action = actions1.addToDoItemSuccess(toDoLoad);
        const newState = plannerToDoReducer(initialState, action);
        expect(newState.user1.idCounter).toEqual(1);
        expect(newState.user1.todo.length).toEqual(1);
        expect(newState.user1.todo[0].id).toEqual(0);
        expect(newState.user1.todo[0].text).toEqual("A");
    });

    it('should update a todo item to the list when passed ADD_PLANNER_TODO_ITEM_SUCCESS', () => {
        const initialState = {
            user1: {
                todo: [{id: 0, text: "A"}],
                idCounter: 1
            }
        };

        const toDoLoad = {
            user1: {
                todo: [{id: 0, text: "B"}],
                idCounter: 1
            }
        };

        const action = actions1.addToDoItemSuccess(toDoLoad);
        const newState = plannerToDoReducer(initialState, action);
        expect(newState.user1.idCounter).toEqual(1);
        expect(newState.user1.todo.length).toEqual(1);
        expect(newState.user1.todo[0].id).toEqual(0);
        expect(newState.user1.todo[0].text).toEqual("B");
    });

    it('should delete a todo item to the list when passed ADD_PLANNER_TODO_ITEM_SUCCESS', () => {
        const initialState = {
            user1: {
                todo: [{id: 0, text: "A"}, {id: 1, text: "B"}],
                idCounter: 2
            }
        };

        const toDoLoad = {
            user1: {
                todo: [{id: 1, text: "B"}],
                idCounter: 2
            }
        };

        const action = actions1.addToDoItemSuccess(toDoLoad);
        const newState = plannerToDoReducer(initialState, action);
        expect(newState.user1.idCounter).toEqual(2);
        expect(newState.user1.todo.length).toEqual(1);
        expect(newState.user1.todo[0].id).toEqual(1);
        expect(newState.user1.todo[0].text).toEqual("B");
    });
});
