import { CHANGE_LEVEL, CHANGE_NAME, CHANGE_FORM } from './types';

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