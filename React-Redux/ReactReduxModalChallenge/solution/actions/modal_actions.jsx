export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// openModal will take in a modal name/type to update our slice of state
export const openModal = (modal) => {
  // explicit return is always preferred, but implicit can be used
  return {
    type: OPEN_MODAL,
    modal
  };
};

// closeModal does not need to worry about an argument.  It will simply trigger the
// reducer to reset the slice of state to null
export const closeModal = () => {
  return {
    type: CLOSE_MODAL
  };
};
