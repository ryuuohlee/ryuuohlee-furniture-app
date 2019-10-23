// requirements
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

class ProductOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      productColor: this.props.product.product_color,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  render() {
    console.log(this.props);
    const options = this.props.products.map((color) => (
      <span className="productOption">
        <input type="image" src={color.product_color_image} aria-label={color.product_color} />
      </span>

    ));

    return (
      <div className="productOptions">
        <span>The price reflects selected options.</span>
        <span className="options">
          <button type="submit" className="dropSelector" onClick={this.openModal}>
            <span className="cover">Cover:</span>
            <img className="dropDown" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/keyboard_arrow_down-24px.svg" alt="down" />
            <span className="colorOption">{this.state.productColor}</span>
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Product Options"
            style={{
              overlay: {
                backgroundColor: 'grey',
                'min-height': 'auto',
                'min-width': 'auto',
              },
            }}
          >
            <span className="modalSetup">
              <h2 className="modalTitle">Choose Cover</h2>
              <button type="submit" className="exit" onClick={this.closeModal} label="close"><img className="x" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/clear-24px.svg" alt="" /></button>
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
