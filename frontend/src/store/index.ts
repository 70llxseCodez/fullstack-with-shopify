import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import { cardsReducer as reducer } from "./reducer";

export const store = createStore(reducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
