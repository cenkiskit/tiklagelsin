import { combineReducers } from 'redux';
import { HomeNamespace, HomeReducer } from '../Sections/Home';
import { InitialLoadingNamespace, InitialLoadingReducer } from '../Sections/InitialLoading';

export default combineReducers({
    [HomeNamespace]: HomeReducer,
    [InitialLoadingNamespace]: InitialLoadingReducer
});

