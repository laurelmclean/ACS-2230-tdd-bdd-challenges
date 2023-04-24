// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  if (w < 0 || h < 0) {
    return null;
  } else {
  const totalArea = w * h;
  return totalArea;
  }
};

const perimeter = (w, h) => {
  if (w < 0 || h < 0) {
    return null;
  } else {
  totalPerimeter = (2 * w) + (2 * h)
  return totalPerimeter
  }
}

const circleArea = r => {
  if (r < 0) {
    return null;
  } else {
  const pi = Math.PI;
  const area = pi * r ** 2;
  return area;
  }
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

const shoppingCart = []

const clearCart = () => {
  shoppingCart.length = 0
}

const createItem = (name, price) => {
  return { name, price, quantity: 1 }
}

const getShoppingCart = (shoppingCart) => {
  return shoppingCart
}

const addItemToCart = (item, shoppingCart) => {
  shoppingCart.push(item)
}

const getNumItemsInCart = (shoppingCart) => {
  return shoppingCart.length
}

const removeItemFromCart = (item, cart) => {
  cart.splice(item, 1);
};

const totalCartCost = (cart) => {
  total = 0;
  for (let i = 0; i < cart.length; i++) {
    let product = cart[i];
    let cost = product.price * product.quantity;
    total += cost;
  }
  return total
};

module.exports = {
  sayHello, area, perimeter, circleArea,
  clearCart, createItem, getShoppingCart, addItemToCart,
  getNumItemsInCart, removeItemFromCart, totalCartCost
}
