import { CHANGE_LEVEL, CHANGE_NAME} from '../actions/types';

const initialState = {
  level: '',
  name: '',
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

    default:
      return state;
  }
}