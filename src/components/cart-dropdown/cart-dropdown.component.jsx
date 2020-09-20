import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { withRouter } from 'react-router-dom';

import './cart-dropdown.styles.scss';


const CartDropdown = (props) => {
  const { cartItems } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? 
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          : <span className="empty-massage">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => props.history.push("/checkout")}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state)
  }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));