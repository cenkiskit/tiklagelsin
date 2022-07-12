import { takeEvery, fork, select, put, call } from 'redux-saga/effects';
import { BasketSelectors } from '..';
import { ActionCreators, Types as BasketTypes } from './BasketRedux';

function* watchBasket() {
    yield takeEvery(BasketTypes.FETCH_BASKET, workerBasket);
}

function* workerBasket(action) {
    try {
        yield call(workerAddProduct, action.payload)
    } catch (error) {

    }
}

function* workerAddProduct(product) {
    try {
        const size = yield select(BasketSelectors.basketSize)
        yield put(ActionCreators.setBasket({ data: product, size: size }))
    } catch (error) {

    }
}

export const Sagas = [
    fork(watchBasket)
];
