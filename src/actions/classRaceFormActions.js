import {SELECT_BUTTON, INC_CLEVEL, DEC_CLEVEL } from './types';
export const selectButton = (value, index) => dispatch => {
  
  var flip = 0
  if (value[index] === 0) {
    flip = 1
  }

  var newArray = Object.assign([...value], {[index]:flip })

  dispatch({
    type: SELECT_BUTTON,
    payload:newArray
  }); 
}

export const incClassLevel = (value, index) => dispatch => {
  var inc = 1 + value[index]
  var newArray = Object.assign([...value], {[index]:inc})

  dispatch({
    type: INC_CLEVEL,
    payload:newArray
  }); 
}

export const decClassLevel = (value, index) => dispatch => {
  var dec = value[index] - 1
  var newArray = Object.assign([...value], {[index]:dec})

  dispatch({
    type: DEC_CLEVEL,
    payload:newArray
  }); 
}