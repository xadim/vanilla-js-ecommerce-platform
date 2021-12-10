const EmptyCart = async () => {
    localStorage.setItem("cart", null);
    console.log('Logged Out');

    const cartLength = document.querySelector(".cartLength");
    cartLength.innerHTML = 0;
};

export default EmptyCart;
