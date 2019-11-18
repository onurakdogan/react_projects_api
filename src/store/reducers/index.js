import { combineReducers } from 'redux';
import RepoListReducer from './RepoListReducer';
import RepoListDetailReducer from "./RepoListDetailReducer";

export default combineReducers({
    RepoListReducer,
    RepoListDetailReducer,

});

