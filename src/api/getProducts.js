const getProducts = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products`
      );
      const json = await response.json();
      return json;
    } catch (err) {
      console.log("Error getting documents", err);
    }
};

export default getProducts;
