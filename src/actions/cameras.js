/* eslint-disable */
import axios from 'axios';

export const GET_CAMERA_PENDING = 'GET_CAMERAS_PENDING';
export const GET_CAMERA_SUCCESS = 'GET_CAMERAS_SUCCESS';
export const ADD_CAMERA_PENDING = 'ADD_CAMERA_PENDING';
export const ADD_CAMERA_SUCCESS = 'ADD_CAMERA_SUCCESS';
export const REMOVE_CAMERA_PENDING = 'REMOVE_CAMERA_PENDING';
export const REMOVE_CAMERA_SUCCESS = 'REMOVE_CAMERA_SUCCESS';

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

// export const removeCamera = (id) => {
//   return async (dispatch) => {
//     dispatch({ type: REMOVE_CAMERA_PENDING })
//     let camera = await axios.delete(`http://localhost:8000/cameras/${id}`)
//     dispatch({
//       type: REMOVE_CAMERA_SUCCESS,
//       payload: camera
//     })
//   }
// }
