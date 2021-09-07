export const calculateSunMoneyCart = (cart) => {
  return cart.reduce((sum, product) => {
    return sum += product.price * product.quantity;
  }, 0);
}