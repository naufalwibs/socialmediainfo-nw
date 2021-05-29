import { createStore, applyMiddleware } from "redux";
import socialMediaReducer from "./socialMediaReducer";
import thunk from "redux-thunk";

const store = createStore(socialMediaReducer, applyMiddleware(thunk));
export default store;
