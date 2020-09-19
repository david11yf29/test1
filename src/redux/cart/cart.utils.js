export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

  // 原本就在裡面
  if (existingCartItem) {
    return 
  }
}