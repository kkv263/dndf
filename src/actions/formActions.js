import { CHANGE_LEVEL, CHANGE_NAME, CHANGE_FORM, SELECT_BUTTON, INC_CLEVEL, DEC_CLEVEL, INC_TP } from './types';

export const changeLevel  = (level) => dispatch => {
   dispatch({
     type: CHANGE_LEVEL,
     payload: level
   });
}

export const changeName  = (name) => dispatch => {
    dispatch({
      type: CHANGE_NAME,
      payload: name
    });
}

export const changeForm  = (value) => dispatch => {
  dispatch({
    type: CHANGE_FORM,
    payload: value + 1
  });
}

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

export const incTP = (value, addValue) => dispatch => {
  dispatch({
    type: INC_TP,
    payload: value + addValue
  })
}