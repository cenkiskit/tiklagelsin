import AsyncStorage from '@react-native-async-storage/async-storage';
import { takeEvery, fork, put, select } from 'redux-saga/effects';
import { AuthActions, AuthSelectors } from '..';
import { Types as AuthTypes } from './AuthRedux';

function* watchAuth() {
    yield takeEvery(AuthTypes.FETCH_LOGIN, workerAuth);
}

function* workerAuth(action) {
    try {
        console.log('buraya geliyr mu')
        const loginData = action.payload
        yield AsyncStorage.setItem("@TGToken", JSON.stringify(loginData))
        yield put(AuthActions.setToken(loginData))
    } catch (error) {
        console.log('Error:', error)
    }
}

export const Sagas = [
    fork(watchAuth)
];
