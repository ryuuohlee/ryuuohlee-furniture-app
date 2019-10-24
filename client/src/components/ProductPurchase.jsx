/* eslint-disable jsx-a11y/label-has-associated-control */
// requirements
import React from 'react';

class ProductPurchase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }

  handleIncrease() {
    this.setState((prevState) => ({ quantity: prevState.quantity + 1 }));
  }

  handleDecrease() {
    if (this.state.quantity === 0) {
      this.setState((prevState) => ({ quantity: prevState.quantity }));
    } else {
      this.setState((prevState) => ({ quantity: prevState.quantity - 1 }));
    }

  }

  render() {
    return (
      <div className="productPurchase">
        <form>
          <label>Quantity</label>
          <div className="purchaseAmount">
            <div className="quantityBox">
              <button className="quantityChange" id="minus" type="button" onClick={this.handleDecrease.bind(this)}>
                <img src="https://fec-piccolo.s3-us-west-1.amazonaws.com/remove-24px.svg" alt="minus" />
              </button>
              <input type="number" className="amount" min="1" max="999" defaultValue={this.state.quantity} />
              <button className="quantityChange" type="button" onClick={this.handleIncrease.bind(this)}>
                <img src="https://fec-piccolo.s3-us-west-1.amazonaws.com/add-24px+(1).svg" alt="add" />
              </button>
            </div>
          </div>
          <button className="addCart" type="button">
              <img src="https://fec-piccolo.s3-us-west-1.amazonaws.com/shopping+bag.png" alt="shoppingBag" />
              Add to shopping Bag
          </button>
          <button className="addList" type="button">
            <img src="https://fec-piccolo.s3-us-west-1.amazonaws.com/shopping+list.png" alt="shoppingBag" />
            Add to shopping list
          </button>
        </form>
      </div>
    );
  }
}

export default ProductPurchase;
