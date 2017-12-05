/* eslint-disable */
import { UPDATE_SORT_TYPE } from '../actions/sortCameras'

export default (state = '', action) => {
  switch (action.type) {
    case UPDATE_SORT_TYPE:
      return action.payload;
    default:
      return state;
  }
}
