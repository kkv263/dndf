import { CHANGE_FORM } from '../actions/types';

const initialState = {
  form: 0
};

export default function(state = initialState, action) {
  switch(action.type){

      case CHANGE_FORM:
      return {
        ...state,
        form:action.payload
      }
    default:
      return state;
  }
}