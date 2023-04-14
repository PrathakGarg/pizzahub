import { AnyAction } from "@reduxjs/toolkit";

import { MenuItem } from "./menu.types";
import { fetchMenuStart, fetchMenuSuccess, fetchMenuFailure } from "./menu.action";

export type MenuState = {
    menuItems: MenuItem[];
    isFetching: boolean;
    error: Error | null;
};

const INITIAL_STATE: MenuState = {
    menuItems: [],
    isFetching: false,
    error: null,
};

export const menuReducer = (state = INITIAL_STATE, action: AnyAction) => {
    
    if (fetchMenuStart.match(action))
        return {
            ...state,
            isFetching: true,
            error: null, 
        };

    if (fetchMenuSuccess.match(action))
        return {
            ...state,
            isFetching: false,
            menuItems: action.payload,
            error: null,
        };

    if (fetchMenuFailure.match(action))
        return {
            ...state,
            isFetching: false,
            error: action.payload,
        };

    return state;
}

