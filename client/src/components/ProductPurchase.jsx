//requirements
import React from 'react';

class ProductPurchase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1
    }
  }

  handleIncrease() {
    this.setState({ value: this.state.value + 1});
  }

  handleDecrease() {
    this.setState({ value: this.state.value - 1});
  }

  render() {
    return(
      <div className='productPurchase'>
        <form>
          <label>Quantity</label>
          <div className='purchaseAmount'>
            <div className='quantityBox'>
              <button className='quantityChange' type='button' onClick={this.handleDecrease.bind(this)}><img src='https://fec-piccolo.s3-us-west-1.amazonaws.com/remove-24px.svg' /></button>
              <input className='amount' value={this.state.value} min='1' max='999' />
              <button className='quantityChange' type='button' onClick={this.handleIncrease.bind(this)}><img src='https://fec-piccolo.s3-us-west-1.amazonaws.com/add-24px+(1).svg' /></button>
            </div>
          </div>
          <button className='addCart' type='button'>
            <span>
              <span>Add to shopping Bag</span>
            </span>
          </button>
          <button className='addList' type='button'>
            <span>
              <span>Add to shopping list</span>
            </span>
          </button>
        </form>
      </div>
    )
  }
};

export default ProductPurchase;
