import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import { rootSaga } from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const configureStore = (preloadedState: { [x: string]: any } | undefined) =>
  createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleWare))
  );

const store = configureStore({});

// const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);

export default store;
