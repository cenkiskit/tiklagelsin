import AsyncStorage from '@react-native-async-storage/async-storage';
import { takeEvery, fork, select, put, call } from 'redux-saga/effects';
import { BasketSelectors } from '..';
import { BasketOperations } from '../../../Constants/Values';
import { ActionCreators, Types as BasketTypes } from './BasketRedux';

function* watchBasket() {
    yield takeEvery(BasketTypes.FETCH_BASKET, workerBasket);
}

function* workerBasket(action) {
    try {
        yield call(workerAddOrDeleteProduct, action.payload)
    } catch (error) {

    }
}

function* workerAddOrDeleteProduct(payload) {
    try {
        const product = payload.product
        const type = payload.basketType

        const productInBasket = yield select(BasketSelectors.basket)
        const result = yield call(workerAddDeleteOperations, productInBasket, type, product)

        const resultOfBasket = {
            data: result.newAdded,
            size: result.basketSize,
            basketPrice: result.basketPrice
        }
        yield AsyncStorage.setItem("@TGBasket", JSON.stringify(resultOfBasket))
        yield put(ActionCreators.setBasket(resultOfBasket))
    } catch (error) {

    }
}

function* workerAddDeleteOperations(productInBasket, type, product) {
    let id = product.id
    let basketSize = yield select(BasketSelectors.basketSize)
    let basketPrice = yield select(BasketSelectors.basketPrice)
    // structuredClone(productInBasket)
    basketPrice = parseFloat(basketPrice)

    let newAdded = productInBasket

    if (type === BasketOperations.ADD_PRODUCT) {
        basketSize = basketSize + 1
        basketPrice += parseFloat(product.price)
        if (newAdded[`${id}`]) {
            newAdded[`${id}`] = newAdded[`${id}`] + 1
        } else {
            newAdded[`${id}`] = 1
        }
    } else {
        if (newAdded[`${id}`]) {
            basketSize = basketSize - 1
            basketPrice -= parseFloat(product.price)

            if (newAdded[`${id}`] - 1 === 0) {
                delete newAdded[`${id}`]
            } else {
                newAdded[`${id}`] = newAdded[`${id}`] - 1
            }
        }
    }

    return {
        newAdded: newAdded,
        basketSize: basketSize,
        basketPrice: basketPrice
    }
}


export const Sagas = [
    fork(watchBasket)
];
