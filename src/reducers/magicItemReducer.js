import { ADD_MAGIC_ITEM, RESET_MAGIC_ITEM, SET_TP, SET_BAR1} from '../actions/types';

const initialState = {
  magicItemsOwned: [],
  tp:0,
  bar1value: {}
};

export default function(state = initialState, action) {
  switch(action.type){

      case ADD_MAGIC_ITEM:
      return {
        ...state,
        magicItemsOwned:action.payload
      }
      
      case RESET_MAGIC_ITEM:
      return {
        ...state,
        magicItemsOwned:action.payload
      }

      case SET_TP:
      return {
        ...state,
        tp:action.payload
      }

      case SET_BAR1:
      return {
        ...state,
        bar1value:action.payload
      } 
      
    default:
      return state;
  }
}