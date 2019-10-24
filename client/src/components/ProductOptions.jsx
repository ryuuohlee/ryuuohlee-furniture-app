/* eslint-disable jsx-a11y/label-has-associated-control */
// requirements
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#app');

class ProductOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      productColor: '',
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    this.setState({
      productColor: this.props.product.product_color,
    });
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
    // eslint-disable-next-line react/prop-types
    const options = this.props.products.map((color) => (
      // eslint-disable-next-line react/jsx-key
      <span className="productOption">
        <input type="image" src={color.product_color_image} aria-label={color.product_color} className="productImage" />
        <label className="productLabel">{color.product_color}</label>
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
            shouldCloseOnOverlayClick
            contentLabel="Product Options"
            id="ReactModalPortal"
            style={{
              overlay: {
                backgroundColor: 'gray',
                minHeight: 'auto',
                minWidth: 'auto',
              },
              content: {
                backgroundColor: 'white',

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
