import endPoints from "@services/api/";
import axios from "axios";

const addProduct = async (body: any) => {
  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(endPoints.products.addProducts, body, config);

  return response.data;
};

const deleteProduct = async (id: any) => {
  const response = await axios.delete(endPoints.products.deleteProducts(id));
  return response.data;
};

const updateProduct = async (id: any, body: any) => {
  const config = {
    headers: {
      accept: "*/*",
      "Content-Type": "application/json",
    },
  };
  const response = await axios.put(endPoints.products.updateProducts(id), body, config); //PUT

  return response.data;
};

export { addProduct, deleteProduct, updateProduct };
