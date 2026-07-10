export const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products?limit=24");

  if (!response.ok) {
    throw new Error("Error al obtener productos");
  }

  const data = await response.json();
  return data.products;
};

export const getProductById = async (id) => {
  const response = await fetch(`https://dummyjson.com/products/${id}`);

  if (!response.ok) {
    throw new Error("Error al obtener el producto");
  }

  return response.json();
};
