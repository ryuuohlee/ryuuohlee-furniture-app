//requirements
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

class ProductOptions extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      modalIsOpen: false,
      productColor: this.props.product.product_color
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
      currentColor: this.props
    });
  }

  closeModal(){
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    console.log(this.props);
    let options = this.props.products.map(color =>
      <span className='productOption'>
        <img src={color.product_color_image}/>
        <span>{color.product_color}</span>
      </span>
      );

    return (
      <div className='productOptions'>
        <span>The price reflects selected options.</span>
        <span>
          <button onClick={this.openModal}>
            <span>Cover:</span>
            <span>{this.state.productColor}</span>
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel='Product Options'
            >
            <h1>Choose Cover</h1>
            <button onClick={this.closeModal}>x</button>
            <form>
            {options}
            </form>
          </Modal>
        </span>
      </div>
    );
  }
}

export default ProductOptions;
