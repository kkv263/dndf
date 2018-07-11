import { CHANGE_LEVEL } from './types';

export const changeLevel  = (value) => dispatch => {
   dispatch({
     type: CHANGE_LEVEL,
     payload: value
   });
}