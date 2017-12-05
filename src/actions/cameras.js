/* eslint-disable */
import axios from 'axios';

export const GET_CAMERA_PENDING = 'GET_CAMERAS_PENDING';
export const GET_CAMERA_SUCCESS = 'GET_CAMERAS_SUCCESS';
export const ADD_CAMERA_PENDING = 'ADD_CAMERA_PENDING';
export const ADD_CAMERA_SUCCESS = 'ADD_CAMERA_SUCCESS';
// export const ADD_ITEM_PENDING = 'ADD_ITEM_PENDING';
// export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';

export const getCamera = () => {
  return async (dispatch) => {
    dispatch({ type: GET_CAMERA_PENDING })
    let camera = await axios.get('http://localhost:8000/cameras')
    dispatch({
      type: GET_CAMERA_SUCCESS,
      payload: camera
    })
  }
}

export const addCamera = (camera) => {
  return async (dispatch) => {
    dispatch({ type: ADD_CAMERA_PENDING })
    let camera = await axios.post('http://localhost:8000/cameras', camera)
    dispatch({
      type: ADD_CAMERA_SUCCESS,
      payload: camera
    })
  }
}
