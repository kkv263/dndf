import { CHANGE_LEVEL, CHANGE_NAME, SELECT_BUTTON, INC_CLEVEL, DEC_CLEVEL} from '../actions/types';

const initialState = {
  level: '',
  name: '',
  classLevel : [0,0,0,0,0,0,0,0,0,0,0,0,0],
};

export default function(state = initialState, action) {

  switch(action.type){
    case CHANGE_LEVEL:
      return {
        ...state,
        level: action.payload
      };

    case CHANGE_NAME:
      return {
        ...state,
        name:action.payload
      }

    case SELECT_BUTTON:
      return{
        ...state,
        classLevel:action.payload
      }

    case INC_CLEVEL:
      return{
        ...state,
        classLevel:action.payload
      }

    case DEC_CLEVEL:
      return{
        ...state,
        classLevel:action.payload
      }

    default:
      return state;
  }
}