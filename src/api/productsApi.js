import axios from "axios";

const productsApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const getProducts = async () => {
  const res = await productsApi.get("/products");
  return res.data;
};

export const createProduct = (product) => {
  productsApi.post("/products", product);
};

export const deleteProduct = (id) => productsApi.delete(`/products/${id}`);

export const updateProduct = (product) => productsApi.put(`/products/${product.id}`, product)
