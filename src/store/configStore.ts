import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { enableBatching } from "./index";
import createSagaMiddleware from "redux-saga";

export const configStore = (saga: any, reducer: any) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: enableBatching(reducer),
    devTools: true,
    middleware: [
      ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
      sagaMiddleware,
    ],
  });

  sagaMiddleware.run(saga);

  return store;
};
