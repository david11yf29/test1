export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  // 原本就在裡面
  if (existingCartItem) {
    return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? 
    { ...cartItem, quantity: cartItem.quantity + 1 }
    : cartItem )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}

export const removeItemFromCart = () => {
  
}