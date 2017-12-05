/* eslint-disable */
import cameras from './cameras';
import titleFilter from './titleFilter';
import sortCameras from './sortCameras';
// import { reducer as formReducer } from 'redux-form';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
    cameras,
    titleFilter,
    sortCameras,
    // form: formReducer
});
export default rootReducer;
