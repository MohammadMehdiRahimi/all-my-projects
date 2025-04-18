import { createStore, combineReducers, applyMiddleware } from "redux";
import themeReducer from "./changeTheme/themeReducer";
import geiminiResponseReducer from "./geiminiResponse/geiminiResponseReducer";
import {thunk} from "redux-thunk"; // import thunk
import { composeWithDevTools } from "redux-devtools-extension";
const rootReducer = combineReducers({
  themeState: themeReducer,
  responseState: geiminiResponseReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
