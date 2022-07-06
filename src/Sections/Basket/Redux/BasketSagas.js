import { takeEvery, fork } from 'redux-saga/effects';

function* watchBasket() {
    yield takeEvery(HomeTypes.FETCH_PROGRESS, workerBasket);
}

function* workerBasket(action) {
    try {

    } catch (error) {

    }
}

export const Sagas = [
    fork(watchBasket)
];
