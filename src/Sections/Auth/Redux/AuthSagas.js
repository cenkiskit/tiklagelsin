import AsyncStorage from '@react-native-async-storage/async-storage';
import { takeEvery, fork, put, select } from 'redux-saga/effects';
import { AuthActions, AuthSelectors } from '..';
import { Types as AuthTypes } from './AuthRedux';

function* watchAuth() {
    yield takeEvery(AuthTypes.FETCH_LOGIN, workerAuth);
}

function* watchLogout() {
    yield takeEvery(AuthTypes.FETCH_LOGOUT, workerLogout);
}

function* workerLogout() {
    yield AsyncStorage.removeItem("@TGToken")
    yield put(AuthActions.setToken(null))
}

function* watchInitial() {
    yield takeEvery(AuthTypes.FETCH_INITIAL, workerInitial);
}

function* workerInitial(action) {
    try {
        const token = yield AsyncStorage.getItem("@TGToken")
        if (token) {
            yield put(AuthActions.setToken(JSON.parse(token)))
        } else {
            yield put(AuthActions.setToken(null))
        }
    } catch (error) {

    }
}

function* workerAuth(action) {
    try {
        const loginData = action.payload
        yield AsyncStorage.setItem("@TGToken", JSON.stringify(loginData))
        yield put(AuthActions.setToken(loginData))
    } catch (error) {
        console.log('Error:', error)
    }
}

export const Sagas = [
    fork(watchAuth),
    fork(watchInitial),
    fork(watchLogout)
];
