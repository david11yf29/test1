import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import './cart-dropdown.styles.scss';


const CartDropdown = (props) => {
  const { cartItems, history, dispatch } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.length ? 
          cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
          : <span className="empty-massage">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}>GO TO CHECKOUT</CustomButton>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state)
  }
}

export default withRouter(connect(mapStateToProps)(CartDropdown));