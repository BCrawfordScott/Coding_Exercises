import React from 'react';
import { connect } from 'react-redux';
import Modal1 from './modal1.jsx';
import Modal2 from './modal2.jsx';
import Modal3 from './modal3.jsx';
// be sure to import the necessary action creators:
import {
  openModal,
  closeModal
} from '../actions/ui_actions.jsx';

// There is more than one way to implement conditional rendering in React, and I
// encourage you to read up on the possibilities and their benefits/drawbacks.  This
// solution employs object-property-checking the component state in some JSX tags.
// Scorll past the export statement for another possible solution.

class ModalMain extends React.Component {
  constructor(props){
    super(props);

    // Since we know what our potential modals are, we can assign them to state.
    // This will not violate the redux cycle because the component state will not
    // change in any way, only what we choose to render. We can now set the modal
    // components to keys based on the arguments to our openModal function(ie: what
    // the modal slice of state is pointing to).
    this.state = {
      modal1: <Modal1 />,
      modal2: <Modal2 />,
      modal3: <Modal3 />
    };
  }

  render() {
    // Optimization: Extract the modal property from props.  We will add this in through map state
    // to props.
    const { modal } = this.props;

    // Pay attention to the given openModal function and how it's used.  This informs
    // your action creators.
    // In the div class named "modal" we will use jsx to return the proper modal by keying
    // into state with the extracted modal property from props. If modal is null, React knows
    // to render nothing.
    return(
      <div>
        <div onClick={() => this.props.openModal("modal1")}>Modal1</div>
        <div onClick={() => this.props.openModal("modal2")}>Modal2</div>
        <div onClick={() => this.props.openModal("modal3")}>Modal3</div>
        <div onClick={() => this.props.closeModal()}>Close Modal</div>

        <div className="modal">
          { this.state[modal] }
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  // Here we will extract the current modal property from the store
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = (dispatch) => {
  // Here we will set up the callbacks for our onClick actions in classic react-redux
  // fashion.
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalMain);


  /*
    Alternative Solution:  This method relies on the exact same redux
    architecture and mdp/msp, but instead uses a case
    statement to determine the modal to render.  Altough string comparison is
    an expensive operation, the benefit here is a stateless functional component
    (easier to read/maintain, less memory intensive).
  */

function ModalMain2 ({ modal, openModal, closeModal }) {

  let modalComponent;
  switch(modal){
    case("modal1"):
      modalComponent = <Modal1 />;
      break;
    case("modal2"):
      modalComponent = <Modal2 />;
      break;
    case("modal3"):
      modalComponent = <Modal3 />;
      break;
    default:
      modalComponent = null;
  }

  return (
    <div>
      <div onClick={() => openModal("modal1")}>Modal1</div>
      <div onClick={() => openModal("modal2")}>Modal2</div>
      <div onClick={() => openModal("modal3")}>Modal3</div>
      <div onClick={() => closeModal()}>Close Modal</div>

      <div className="modal">
        { modalComponent }
      </div>
    </div>
  );
}
