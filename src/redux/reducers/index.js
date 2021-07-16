//import {routerReducer as routing} from 'react-router-redux'
import { combineReducers } from "redux";

import router from "./router";
import todos from "./todos";
import counter from "./counter";
import visibilityFilter from "./visibilityFilter";
import customers from "./customerList";
const rootReducer = combineReducers({
  router,
  config: (state = {}) => state,
  todos,
  visibilityFilter,
  counter,
  customers,
});

export default rootReducer;
