import { takeEvery, fork } from 'redux-saga/effects';
import { Types as BasketTypes } from './BasketRedux';

function* watchBasket() {
    yield takeEvery(BasketTypes.FETCH_BASKET, workerBasket);
}

function* workerBasket(action) {
    try {
        console.log('actin')
        console.log('actions:', action.payload)
    } catch (error) {

    }
}

export const Sagas = [
    fork(watchBasket)
];
