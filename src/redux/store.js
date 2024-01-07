import {
  createStore,
  combineReducers,
  applyMiddleware,
  legacy_createStore,
} from "redux";
import { thunk } from "redux-thunk";
import { trackerReducer } from "../redux/reducers/trackerReducer";

const rootReducer = combineReducers({
  tracker: trackerReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
