import Utils from "./../../services/Utils.js";
import getCategoryProducts from "../../api/getCategoryProducts.js";
import productList from '../components/productList.js';

const Category = {
  render: async () => {
    const request = Utils.parseRequestURL();
    const products = await getCategoryProducts(request.id);
    const view = productList(products, request.id);
    return view;
  },
  after_render: async () => {},
};

export default Category;
