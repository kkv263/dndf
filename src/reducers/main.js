import {combineReducers} from 'redux';

import formReducer from './formReducer';
import infoReducer from './infoReducer';

export default combineReducers({
  info:infoReducer,
  form:formReducer
});