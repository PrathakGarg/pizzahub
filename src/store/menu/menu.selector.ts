import { createSelector } from "reselect";

import { RootState } from "../store";

const selectMenu = (state: RootState) => state.menu;

export const selectMenuItems = createSelector(
    [selectMenu],
    (menu) => menu.menuItems
);

export const selectIsMenuFetching = createSelector(
    [selectMenu],
    (menu) => menu.isFetching
);

export const selectMenuError = createSelector(
    [selectMenu],
    (menu) => menu.error
);