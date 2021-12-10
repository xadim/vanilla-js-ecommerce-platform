const getCategoryProducts = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/category/${id}`);
    const json = await response.json();
    return json;
  } catch (err) {
    console.log("Error getting documents", err);
  }
};

export default getCategoryProducts;
