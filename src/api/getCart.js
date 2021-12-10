const getCart = () => {
    const cart = localStorage.getItem('cart') !== null ? 
      JSON.parse(localStorage.getItem('cart')) : 
      [];
    return cart
};

export default getCart;
