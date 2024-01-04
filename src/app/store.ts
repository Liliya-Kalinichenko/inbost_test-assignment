import { combineReducers, configureStore } from "@reduxjs/toolkit";
import nodeOneSlice from "../features/nodeOneSlice";
import nodeTwoSlice from "../features/nodeTwoSlice";
import nodeThreeSlice from "../features/nodeThreeSlice";
import nodeFourSlice from "../features/nodeFourSlice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  nodeOne: nodeOneSlice,
  nodeTwo: nodeTwoSlice,
  nodeThree: nodeThreeSlice,
  nodeFour: nodeFourSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
