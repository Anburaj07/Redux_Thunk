import { ADD, REDUCE } from "./actionTypes";

// authReducer.js
const initialState = {
    count:10
  };
  
  const authReducer = (state = initialState, {type,payload}) => {
    switch (type) {
      case ADD:{
        return{...state,count:state.count+payload}
    }
    case REDUCE:{
        return {...state,count:state.count-payload}
    }      
      default:
        return state;
    }
  };
  
  export default authReducer;
  