import getCart from "./getCart.js";

const addToCart = (item) => {
    let cartItems = getCart() !== null ? getCart() : [];

    const cartLength = document.querySelector(".cartLength");
    const cartItem = cartItems.filter(
      (element) => element.product.productId === item.product.productId
    );
    if (cartItem.length > 0) {
      cartItem[0].product.quantity += 1;
      cartItems = cartItems.filter(
        (element) => element.product.productId !== item.product.productId
      );
      cartItems.push(cartItem[0]);
    } else {
      cartItems.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cartItems));

    cartLength.innerHTML = cartItems.length;
    return cartItems;
};

export default addToCart;
