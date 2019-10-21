//requirements
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

class ProductOptions extends React.Component {
  constructor(props) {
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

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  render() {
    console.log(this.props);
    let options = this.props.products.map(color =>
      <span className='productOption'>
        <img className='choice' src={color.product_color_image} />
        <span className='choiceName'>{color.product_color}</span>
      </span>
    );

    return (
      <div className='productOptions'>
        <span>The price reflects selected options.</span>
        <span className='options'>
          <button className='dropSelector' onClick={this.openModal}>
            <span className='cover'>Cover:</span>
            <img className='dropDown' src='https://fec-piccolo.s3-us-west-1.amazonaws.com/keyboard_arrow_down-24px.svg' />
            <span className='colorOption'>Hyllie</span>
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel='Product Options'
            style={{
              overlay: {
                backgroundColor: 'grey',
                'min-height': 'auto',
                'min-width': 'auto'
              }}}
          >
            <span className='modalSetup'>
              <h2 className='modalTitle'>Choose Cover</h2>
              <button className='exit' onClick={this.closeModal}><img className='x' src='https://fec-piccolo.s3-us-west-1.amazonaws.com/clear-24px.svg' /></button>
            </span>

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
