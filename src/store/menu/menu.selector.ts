import { createSelector } from "reselect";

const selectMenu = (state: any) => state.menu;

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