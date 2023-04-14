import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { PersistConfig, persistReducer } from "redux-persist";

import { menuReducer } from "./menu/menu.reducer";
import { RootState } from "./store";

const rootPersistConfig: PersistConfig<RootState> & { blacklist: (keyof RootState)[] } = {
    key: "root",
    storage,
    blacklist: [],
};

export const rootReducer = combineReducers({
    menu: menuReducer,
})

export const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);
