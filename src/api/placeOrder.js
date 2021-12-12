import getUser from "./getUser.js";
import getCart from "./getCart.js";
import getOrders from "./getOrders.js";

const placeOrder = () => {
    const cart = getCart() !== null ? getCart() : [];
    const user = getUser() !== null ? getUser() : [];
    if (user.id && typeof cart[0].date != "undefined") {
        const orders = getOrders();
        const order = {
            userId: user.id,
            id: Date.now(),
            date: Date.now(),
            cart: cart,
        };
        orders.push(order);
        localStorage.setItem("orders", JSON.stringify(orders));
        return order;
    }
};

export default placeOrder;
