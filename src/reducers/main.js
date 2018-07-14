import {combineReducers} from 'redux';

import formReducer from './formReducer';
import infoReducer from './infoReducer';
import magicItemReducer from './magicItemReducer';

export default combineReducers({
  info:infoReducer,
  form:formReducer,
  magicItems:magicItemReducer
});