import { ADD_MAGIC_ITEM, RESET_MAGIC_ITEM, SET_TP, SET_BAR1 } from './types';

export const addMagicItem = (value, pushedItem,index) => dispatch => {
  var newArray = Object.assign(...[value], {[index]:pushedItem});

  if (pushedItem === null){
    if (index !== -1) newArray.splice(index, 1);
  }

  dispatch({
    type: ADD_MAGIC_ITEM,
    payload: newArray
  })
}

export const resetMagicItems = () => dispatch => {
  dispatch({
    type: RESET_MAGIC_ITEM,
    payload: []
  })
}

export const setTP = (value) => dispatch => {

  var total = 0
  Object.keys(value).forEach(key => {
    total += (value[key].tp);
  })

  dispatch({
    type: SET_TP,
    payload: total
  })
}

export const setBarValue = (value) => dispatch => {
  var newValue = null

  if (value !== null)
    newValue = value

  dispatch({
    type: SET_BAR1,
    payload: newValue
  })
}