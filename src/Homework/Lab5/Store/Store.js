import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer, createStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import RootReducer from "./RootReducer";

const persistConfig = {
  key: "root",
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

/*  */
