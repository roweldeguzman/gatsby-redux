import { setIsStarting } from '../state/isStarting'

export default () => async (dispatch, getState) => {
  dispatch(setIsStarting(!getState().pages.isStarting));
}