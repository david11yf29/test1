import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectCartitemsCount } from '../../redux/cart/cart.selectors.js';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => dispatch(toggleCartHidden())
  }
};

const mapStateToProps = (state) => {
  console.log("itemCount are being called");
  return {
    itemCount: selectCartitemsCount(state)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);