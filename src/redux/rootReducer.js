import { combineReducers } from 'redux';
import fabricReducer from './reducers/FabricReducer';

// Combine all reducers
const rootReducer = combineReducers({
  fabric: fabricReducer 
});

export default rootReducer;
