import { all } from 'redux-saga/effects';
import { HomeSagas } from '../Sections/Home';
import { InitialLoadingSagas } from '../Sections/InitialLoading';

export default function* rootSaga() {
    yield all([
        ...HomeSagas,
        ...InitialLoadingSagas
    ]);
}
