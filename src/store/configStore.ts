import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";
import createSocketMiddleware from "./sagaMiddlewares/createSocketMiddleware";

import { enableBatching } from "./index";
import { Socket } from "../api";

export const configStore = (saga: any, reducer: any) => {
  const sagaMiddleware = createSagaMiddleware();
  const socketMiddleware = createSocketMiddleware(new Socket());

  const store = configureStore({
    reducer: enableBatching(reducer),
    devTools: true,
    middleware: (gDM) =>
      gDM({ thunk: false, serializableCheck: false })
        .concat(sagaMiddleware)
        .concat(socketMiddleware),
  });

  sagaMiddleware.run(saga);

  return store;
};
