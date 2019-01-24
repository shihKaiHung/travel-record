import { reducer } from "@core/reducer/reducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const initStore = (initialState) => {
  return createStore(reducer, initialState, composeWithDevTools());
};
