import { takeEvery, fork } from 'redux-saga/effects';

function* watchAuth() {
    yield takeEvery(HomeTypes.FETCH_PROGRESS, workerAuth);
}

function* workerAuth(action) {
    try {

    } catch (error) {

    }
}

export const Sagas = [
    fork(watchAuth)
];
