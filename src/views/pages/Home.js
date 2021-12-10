import getProducts from "../../api/getProducts.js";
import productList from "../components/productList.js";

const Home = {
  render: async () => {
    const products = await getProducts();
    const view = productList(products, 'Store Front');
    return view;
  },
  after_render: async () => {},
};

export default Home;
