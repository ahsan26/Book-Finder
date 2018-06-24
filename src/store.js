import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./Reducers";
import thunk from "redux-thunk";

const Store = createStore(RootReducer, compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));;

export default Store;