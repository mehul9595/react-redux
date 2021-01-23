import rootReducer from "./reducers";
import { createStore } from "redux";

export default createStore(
  rootReducer,
  {},
  window.devToolsExtension && window.devToolsExtension()
);
