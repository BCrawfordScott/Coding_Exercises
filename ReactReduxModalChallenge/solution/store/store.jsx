// boilerplate for redux store

import { createStore } from 'redux';
import rootReducer from '../reducers/root_reducer.jsx';

const configureStore =(preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
  );
};

export default configureStore;

// pay attention to any sample state you're given.  It will inform both
// how you access the information as well as what you want your reducers to return.

// sample state:
// {
//   ui: {
//     modal: "modal1"
//   }
// }
