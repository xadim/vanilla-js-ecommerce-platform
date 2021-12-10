import Home from "./views/pages/Home.js";
import About from "./views/pages/About.js";
import Product from "./views/pages/Product.js";
import Category from "./views/pages/Category.js";
import Checkout from "./views/pages/Checkout.js";
import OrderConfirmation from "./views/pages/OrderConfirmation.js";
import Register from "./views/pages/Register.js";

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
  "/": Home,
  "/about": About,
  "/product-details-page/:id": Product,
  "/category/:id": Category,
  "/checkout": Checkout,
  "/order-confirmation": OrderConfirmation,
  "/register": Register,
};

export default routes;