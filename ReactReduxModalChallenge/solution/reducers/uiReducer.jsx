import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/ui_actions.jsx';

// default state is not necessary, but highly recomended.  It can ensure a
// consistent state shape as your app grows.

const defaultState = {
  modal: null
};

const uiReducer = (state = defaultState, action) => {
  // Security optimization: Freeze your old state.  Not necessary, but recommended to prevent accidental mutation.
  Object.freeze(state);

  // Security Optimization: generate a new base state so you don't have to do it in each case.
  // We label it a const to prevent accidental mutation.
  const newState = Object.assign({}, state);

  // Object.assign is used in this example because the prompt says not to use any
  // other third party libraries, but importing merge from lodash is always strongly recommended
  switch(action.type){
    case(OPEN_MODAL):
      // based on the sample state in store.jsx, we know we want the modal
      // property to be whatever argument we pass to the openModal action creator.
      return Object.assign(newState, { modal: action.modal });
    case(CLOSE_MODAL):
      // closing the modal doesn't need an argument. We know we just want the modal
      // property to point to null
      return Object.assign(newState, { modal: null });
    default:
      return newState;
  }
};

export default uiReducer;
