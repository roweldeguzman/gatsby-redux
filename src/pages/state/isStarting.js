import { createAction, handleActions } from 'redux-actions';

const defaultState = false;

export const setIsStarting = createAction('PAGES/HOME/IS_STARTING');

export const reducer = handleActions(
  {
    [setIsStarting]: (state, action) => action.payload
  },
  defaultState
);

export default { setIsStarting, reducer };