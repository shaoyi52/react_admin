
import { createStore } from "redux";
import rootStore from "../redux/reducers";

let store = createStore(rootStore);

export default store;