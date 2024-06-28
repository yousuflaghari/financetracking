// store.js
import { configureStore } from "@reduxjs/toolkit";
import financeReducer from "./reducer/reducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, financeReducer);
const store = configureStore({
  reducer: {
    finance: persistedReducer,
  },
});
const persistor = persistStore(store);
export { persistor, store };
