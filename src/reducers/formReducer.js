import { CHANGE_LEVEL } from '../actions/types';

const initialState = {
  level: ''
};

export default function(state = initialState, action) {
  switch(action.type){
    case CHANGE_LEVEL:
      return {
        ...state,
        level: action.payload
      };
    default:
      return state;
  }
}