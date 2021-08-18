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
