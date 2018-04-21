import React, { Component } from 'react';
import { RaisedButton, TextField } from 'material-ui';
import products from '../utilities/products.json';
import Product from './Product';

class Body extends Component {
  render() {
    return (
      <div
        style={{
          height: '600px',
          width: '100%',
          margin: 'auto'
        }}
      >
        <h1
          style={{
            fontFamily: 'cursive',
            fontSize: '50px',
            color: '#6666ff',
            textAlign: 'center'
          }}
        >
          <b>The Shoe Company</b>
        </h1>
        <div style={{ width: '85%', margin: 'auto' }}>
          {products.products.map(product => {
            return <Product key={product.name} product={product} />;
          })}
        </div>
        <div style={{ width: '160px', margin: 'auto', marginTop: '5%' }}>
          <RaisedButton
            label="Refresh Prices"
            primary={true}
            style={{ borderRadius: '5%' }}
          />
        </div>
        <div style={{ width: '350px', margin: 'auto', marginTop: '5%' }}>
          <TextField hintText="Your email" style={{ width: '200px' }} />
          <RaisedButton label="Get Started" primary={true} />
        </div>
      </div>
    );
  }
}

export default Body;
