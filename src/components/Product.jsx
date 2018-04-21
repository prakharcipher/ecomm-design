import React, { Component } from 'react';
import { FontIcon } from 'material-ui';
import IconButton from 'material-ui/IconButton';
import '../products.css';

class Product extends Component {
  render() {
    return (
      <div
        className="item"
        style={{
          width: '265px',
          height: '400px',
          marginLeft: '3%',
          marginTop: '4%',
          borderRadius: '2%',
          boxShadow: '2px 2px 25px gray',
          display: 'inline-block'
        }}
      >
        <img
          src={this.props.product.image}
          height="60%"
          width="100%"
          style={{ borderTopLeftRadius: '2%', borderTopRightRadius: '2%' }}
          alt="product"
        />
        <div style={{ color: 'blue', marginLeft: '5%' }}>
          {this.props.product.brand}
        </div>
        <div
          style={{
            marginLeft: '5%',
            fontSize: '20px',
            marginTop: '2%',
            opacity: '0.8'
          }}
        >
          {this.props.product.name}
        </div>
        <br />
        <hr />
        <div
          style={{
            width: '90%',
            margin: 'auto',
            height: '60px'
          }}
        >
          <div style={{ float: 'left' }}>
            <a
              href=""
              style={{
                color: 'blue',
                textDecoration: 'none',
                float: 'left',
                paddingTop: '12%'
              }}
            >
              BUY
            </a>
            <IconButton>
              <FontIcon className="material-icons">shopping_cart</FontIcon>
            </IconButton>
            <IconButton>
              <FontIcon className="material-icons">favorite_border</FontIcon>
            </IconButton>
          </div>
          <div
            style={{
              float: 'right',
              paddingTop: '5%',
              fontSize: '20px',
              opacity: '0.7'
            }}
          >
            <b>$</b>
            {this.props.product.price}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
