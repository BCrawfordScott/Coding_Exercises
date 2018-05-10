import React from 'react';
import { connect } from 'react-redux';
import Modal1 from './modal1';
import Modal2 from './modal2';
import Modal3 from './modal3';

class ModalMain extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return(
      <div>
        <div onClick={() => this.props.openModal("modal1")}>Modal1</div>
        <div onClick={() => this.props.openModal("modal2")}>Modal2</div>
        <div onClick={() => this.props.openModal("modal3")}>Modal3</div>
        <div onClick={() => this.props.closeModal()}>Close Modal</div>

        <div className="modal"></div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalMain);
