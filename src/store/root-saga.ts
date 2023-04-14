import { all, call } from 'typed-redux-saga/macro'

import { menuSaga } from './menu/menu.saga'

export function* rootSaga() {
    yield* all([call(menuSaga)])
}