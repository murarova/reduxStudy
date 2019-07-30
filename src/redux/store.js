import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const timerReduser = () => {};

const rootReducer = combineReducers({
	timer: timerReduser
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
