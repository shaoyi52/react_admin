import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore;

  const createStoreWithMiddleware = applyMiddleware(
    reduxRouterMiddleware,
    thunkMiddleware,
    logger
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept("@reducers", () => {
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
