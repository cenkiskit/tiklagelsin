import { all } from 'redux-saga/effects';
import { AuthSagas } from '../Sections/Auth';
import { BasketSagas } from '../Sections/Basket';

export default function* rootSaga() {
    yield all([
        ...AuthSagas,
        ...BasketSagas
    ]);
}
