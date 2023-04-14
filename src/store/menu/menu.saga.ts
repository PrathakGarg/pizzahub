import { takeLatest, all, call, put } from "typed-redux-saga/dist";

import { fetchMenuSuccess, fetchMenuFailure } from "./menu.action";
import { MENU_ACTION_TYPES } from "./menu.types";
import { getMenuItems } from "../../utils/api/api.utils";

function* fetchMenuItems() {
    try {
        const menuItems = yield* call(getMenuItems);
        yield* put(fetchMenuSuccess(menuItems));
    } catch (error) {
        yield* put(fetchMenuFailure(error as Error));
    }
}

function* onFetchMenuStart() {
    yield* takeLatest(MENU_ACTION_TYPES.FETCH_MENU_START, fetchMenuItems);
}

export function* menuSaga() {
  yield* all([
    takeLatest(MENU_ACTION_TYPES.FETCH_MENU_START, onFetchMenuStart),
  ]);
}
