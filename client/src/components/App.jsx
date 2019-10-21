//import requirements
import React from 'react';
import ProductOptions from './ProductOptions.jsx';
import ProductPurchase from './ProductPurchase.jsx';
import StockCheck from './StockCheck.jsx';
import Rating from 'react-rating';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      productList: [],
      product: {},
      quantityValue: 1
    }

    this.randomProduct = this.randomProduct.bind(this);
  }

  //selects a random product from the list of products to display
  randomProduct() {
    var random = Math.floor(Math.random() * Math.floor(this.state.productList.length));
    this.setState({
      product: this.state.productList[random]
    });
  }

  componentDidMount() {
    fetch('api/products')
      .then(data => data.json())
      .then(data => this.setState({ productList: data }))
      .then(this.randomProduct);
  }

  render() {
    console.log(this.state.product);
    return (
      <div className='product_container'>
        <div className='product_price'>
          <p className='product_age'>product age</p>
          <div className='product_heading'>
            <p className="product_name">
              <h2>{this.state.product.product_name}</h2>
              <span>{this.state.product.product_short_desc}</span>
            </p>
            <h1 className='product_price'>{'$' + parseFloat(this.state.product.product_price).toFixed(2)}</h1>
          </div>
          <div className='aggregatedRating'>
            <a className='reviews' href='test'>
              <span className='stars'>
                <Rating
                  emptySymbol={<img src="https://fec-piccolo.s3-us-west-1.amazonaws.com/star-grey.png" className="icon" />}
                  fullSymbol={<img src="https://fec-piccolo.s3-us-west-1.amazonaws.com/star-yellow.png" className="icon" />}
                  initialRating={this.state.product.product_avg_rev}
                  readonly
                />
              </span>
              <span className="reviewValue">
                <span>{this.state.product.product_avg_rev}</span>
              </span>
              <span className="numberOfRev">138 Reviews</span>
            </a>
          </div>
        </div>
        <div className='product_ad_desc'>
          <span className='adDesc'>{this.state.product.product_ad_desc}</span>
        </div>
        <div>
          <ProductOptions Colors={this.state.product.product_color} />
        </div>
        <div>
          <ProductPurchase />
        </div>
        <div>
          <StockCheck />
        </div>
      </div>
    )
  }
};

export default App;