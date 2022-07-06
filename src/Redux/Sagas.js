import { all } from 'redux-saga/effects';
import { AuthSagas } from '../Sections/Auth';

export default function* rootSaga() {
    yield all([
        ...AuthSagas
    ]);
}
