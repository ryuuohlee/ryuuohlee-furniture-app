/* eslint-disable jsx-a11y/label-has-associated-control */
// requirements
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#ItemDescription');

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
    setTimeout(() => {
      this.setState({
        productColor: this.props.product.product_color,
      });
    }, 500);
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
    // eslint-disable-next-line react/prop-types
    const options = this.props.products.map((color) => (
      // eslint-disable-next-line react/jsx-key
      <div className="productOption">
        <img src={color.product_color_image} aria-label={color.product_color} className="jeff-productImage" />
        <div>{color.product_color}</div>
      </div>
    ));

    return (
      <div className="jeff-productOptions">
        <span className="jeff-productCaption">The price reflects selected options.</span>
        <div className="options">
          <button type="button" id="jeff-dropSelector" onClick={this.openModal}>
            <span className="jeff-cover">Cover:</span>
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
                position: 'absolute',
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
                backgroundColor: 'rgba(0,0,0,0.5)',
              },
              content: {
                // display: 'flex',
                position: 'absolute',
                top: '40px',
                left: '40px',
                right: '40px',
                bottom: '40px',
                minHeight: '80px',
                minWidth: '80px',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                backgroundColor: 'white',
              },
            }}
          >
            <div className="modalSetup">
              <h2 className="modalTitle">Choose Cover</h2>
              <button type="submit" className="exit" onClick={this.closeModal} label="close"><img className="x" src="https://fec-piccolo.s3-us-west-1.amazonaws.com/clear-24px.svg" alt="" /></button>
            </div>

            <div id="jeff-productForm">
              {options}
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default ProductOptions;
