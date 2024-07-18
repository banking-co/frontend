import { configureStore } from "@reduxjs/toolkit";
import { enableBatching } from "./index";
import createSagaMiddleware from "redux-saga";

export const configStore = (saga: any, reducer: any) => {
  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer: enableBatching(reducer),
    devTools: true,
    middleware: (gDM) =>
      gDM({ thunk: false, serializableCheck: false }).concat(sagaMiddleware),
  });

  sagaMiddleware.run(saga);

  return store;
};
