import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";
import todoSaga from "./saga";
import createSagaMiddleware from "redux-saga";
const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  process.env.NODE_ENV === "development"
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
//create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();
//create store
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
//run saga
sagaMiddleware.run(todoSaga);

export default store;
