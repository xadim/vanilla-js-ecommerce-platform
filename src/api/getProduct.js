const getProduct = async (id) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      const json = await response.json();
      return json;
    } catch (err) {
      console.log("Error getting documents", err);
    }
};

export default getProduct;
