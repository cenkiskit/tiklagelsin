import { combineReducers } from 'redux';
import { AuthNamespace, AuthReducer } from '../Sections/Auth';
import { BasketNamespace, BasketReducer } from '../Sections/Basket';

export default combineReducers({
    [AuthNamespace]: AuthReducer,
    [BasketNamespace]: BasketReducer,
});