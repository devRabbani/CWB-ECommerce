export const addItemToCart = (cartItems, itemToadd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToadd.id
  )

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToadd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    )
  }
  return [...cartItems, { ...itemToadd, quantity: 1 }]
}

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  )
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id)
  }

  return cartItems.map((cartItem) =>
    cartItem.id === itemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  )
}
