import { MENU_ACTION_TYPES, MenuItem } from "./menu.types";
import { createAction, Action, ActionWithPayload, withMatcher } from "../../utils/reducer/reducer.utils";

export type FetchMenuStartAction = Action<MENU_ACTION_TYPES.FETCH_MENU_START>;
export type FetchMenuSuccessAction = ActionWithPayload<MENU_ACTION_TYPES.FETCH_MENU_SUCCESS, MenuItem[]>;
export type FetchMenuFailureAction = ActionWithPayload<MENU_ACTION_TYPES.FETCH_MENU_FAILURE, Error>;

export const fetchMenuStart = withMatcher((): FetchMenuStartAction =>
    createAction(MENU_ACTION_TYPES.FETCH_MENU_START));

export const fetchMenuSuccess = withMatcher((items: MenuItem[]): FetchMenuSuccessAction =>
    createAction(MENU_ACTION_TYPES.FETCH_MENU_SUCCESS, items));

export const fetchMenuFailure = withMatcher((error: Error): FetchMenuFailureAction =>
    createAction(MENU_ACTION_TYPES.FETCH_MENU_FAILURE, error));
