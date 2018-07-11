import { CHANGE_LEVEL, CHANGE_NAME } from './types';

export const changeLevel  = (value) => dispatch => {
   dispatch({
     type: CHANGE_LEVEL,
     payload: value
   });
}

export const changeName  = (value) => dispatch => {
    dispatch({
      type: CHANGE_NAME,
      payload: value
    });
  }