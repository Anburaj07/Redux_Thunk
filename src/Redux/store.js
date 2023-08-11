import { legacy_createStore,combineReducers, compose, applyMiddleware } from "redux";
//store
import countReducer from "./Counter/countReducer";
import { todoReducer } from "./Todo/todoReducer";
import {authReducer} from "./Authentication/authReducer"
import thunk from "redux-thunk";

const rootReducer=combineReducers({countReducer,todoReducer,authReducer})
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;
// const myMiddleWare=(store)=>(dispatch)=>(action)=>{
//     // console.log('action:', action)
//     // console.log('dispatch:', dispatch)
//     // console.log('store:', store)
//     // dispatch(action)
//     if(typeof(action)==="function"){
//         action(dispatch)
//     }else{
//         dispatch(action)
//     }
// }

export const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))