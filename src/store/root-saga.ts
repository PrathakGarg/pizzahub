import { all, call } from '@redux-saga/core/effects'

import { menuSaga } from './menu/menu.saga'

export function* rootSaga() {
    yield all([call(menuSaga)])
}