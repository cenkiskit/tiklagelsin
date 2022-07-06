import { combineReducers } from 'redux';
import { AuthNamespace, AuthReducer } from '../Sections/Auth';

export default combineReducers({
    [AuthNamespace]: AuthReducer
});

