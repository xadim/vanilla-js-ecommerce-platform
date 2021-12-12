const EmptyCart = async () => {
    localStorage.setItem("cart", null);

    const cartLength = document.querySelector(".cartLength");
    cartLength.innerHTML = 0;
};

export default EmptyCart;
