import {
  GET_CAMERA_PENDING,
  GET_CAMERA_SUCCESS,
  ADD_CAMERA_PENDING,
  ADD_CAMERA_SUCCESS,
  REMOVE_CAMERA_PENDING,
  REMOVE_CAMERA_SUCCESS
} from '../actions/cameras'

export default(state = [], action) => {
  switch (action.type) {
    case GET_CAMERA_PENDING:
      return state;
    case GET_CAMERA_SUCCESS:
      return [...action.payload.data];
    case ADD_CAMERA_PENDING:
      return state;
    case ADD_CAMERA_SUCCESS:
      return [...action.payload.data];
    case REMOVE_CAMERA_PENDING:
      return state;
    case REMOVE_CAMERA_SUCCESS:
      return [...action.payload.data];
    default:
      return state;
  }
}
