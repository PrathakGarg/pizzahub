import { AnyAction } from "@reduxjs/toolkit";

import { MenuItem } from "./menu.types";
import { fetchMenuStart, fetchMenuSuccess, fetchMenuFailure } from "./menu.action";

export type MenuState = {
    menuItems: MenuItem[];
    isFetching: boolean;
    error: string;
};

const INITIAL_STATE: MenuState = {
    menuItems: [],
    isFetching: false,
    error: "",
};

export const menuReducer = (state = INITIAL_STATE, action: AnyAction) => {
    if (fetchMenuStart.match(action))
        return {
            ...state,
            isFetching: true,
            error: "", 
        };

    if (fetchMenuSuccess.match(action))
        return {
            ...state,
            isFetching: false,
            menuItems: action.payload,
            error: "",
        };

    if (fetchMenuFailure.match(action))
        return {
            ...state,
            isFetching: false,
            error: action.payload,
        };
}

