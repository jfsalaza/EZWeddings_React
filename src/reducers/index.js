import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import users from './usersReducer';
import current_user from './currentUserReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  users,
  current_user,
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
