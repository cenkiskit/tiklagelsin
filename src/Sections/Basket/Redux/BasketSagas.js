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
        const basketSize = yield select(BasketSelectors.basketSize)
        const productInBasket = yield select(BasketSelectors.basket)
        let id = product.id

        let newAdded = structuredClone(productInBasket)
        if (newAdded[`${id}`]) {
            newAdded[`${id}`] = newAdded[`${id}`] + 1
        } else {
            newAdded[`${id}`] = 1
        }

        yield put(ActionCreators.setBasket({ data: structuredClone(newAdded), size: basketSize }))
    } catch (error) {

    }
}

export const Sagas = [
    fork(watchBasket)
];
