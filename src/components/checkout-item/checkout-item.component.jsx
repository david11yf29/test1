import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions.js';

import './checkout-item.styles.scss';

const CheckoutItem = (props) => {
  const { name, imageUrl, price, quantity } = props.cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => props.removeItem(props.cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => props.addItem(props.cartItem)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <div 
        className="remove-button" 
        onClick={() => props.clearItem(props.cartItem)}>&#10005;</div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
  }
}

export default connect(null, mapDispatchToProps)(CheckoutItem);