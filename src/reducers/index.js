import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import  productReducer  from './productReducer';


const rootReducer = history => combineReducers({
  router: connectRouter(history),
  product:productReducer

});

export default rootReducer;
