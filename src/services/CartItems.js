import getCart from "../api/getCart.js";
import getProduct from "../api/getProduct.js";

const CartItems = async () => {
    const products = getCart() !== null ? getCart() : [];
    
    const items = [];
    let total = 0;
    await Promise.all(products.map(async (element) => {
      const item = await getProduct(element.product.productId);
      item.qty = element.product.quantity;
      item.total = item.qty * item.price;
      total +=item.total;
      return items.push(item);
    }));
    
    items.total = total.toFixed(2);

    return items;
}

export default CartItems;