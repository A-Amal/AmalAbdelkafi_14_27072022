/**
 * @const initialState
 * */
import {applyMiddleware, compose, createStore} from "redux";
import employeesReducer from "./EmployeesReducer";
import thunk from "redux-thunk";



//const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
export const store = createStore(employeesReducer,  compose(
    applyMiddleware(thunk),// Defered dispatch
  //  reduxDevtools,// Chrome Redux plugin
));
