import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { answers } from "./answers";

const rootReducer = combineReducers({
  answers,
});

function makeStore() {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: true,
      }),
    devTools: true,
  });
}
export let store = makeStore();
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
