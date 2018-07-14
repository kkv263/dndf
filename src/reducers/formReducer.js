import { CHANGE_FORM, CHECK_FORM} from '../actions/types';

const initialState = {
  form: 0,
  isFormValid: true 
};

export default function(state = initialState, action) {
  switch(action.type){

      case CHANGE_FORM:
      return {
        ...state,
        form:action.payload
      }

      case CHECK_FORM:
      return{
        ...state,
        isFormValid: action.payload
      }

      default:
      return state;
  }
}