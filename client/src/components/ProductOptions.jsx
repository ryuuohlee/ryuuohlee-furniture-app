//requirements
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

class ProductOptions extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false,
    }

    this.openModal = this.openModal.bind(this);

    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

  // afterOpenModal() {
  //   this.setState({
  //     modalIsOpen: true
  //   });
  // }

  closeModal(){
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    console.log(this.props)
    return (
      <div className='productOptions'>
        <span>The price reflects selected options.</span>
        <span>
          <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel='Product Options'
            >
            <span>{this.props.Colors}</span>
            <button onClick={this.closeModal}>x</button>
          </Modal>
        </span>
      </div>
    );
  }
}

export default ProductOptions;
