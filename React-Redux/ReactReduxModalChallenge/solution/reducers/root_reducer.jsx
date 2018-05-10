// boilerplate for establishing state shape

import uiReducer from './uiReducer.jsx';

export default combineReducers(
  {
    ui: uiReducer
  }
);
