const getOrders = () => {
  const cart =
    localStorage.getItem("orders") !== null
      ? JSON.parse(localStorage.getItem("orders"))
      : [];
  return cart;
};

export default getOrders;
