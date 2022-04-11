import axios from "axios";
import { API_URL } from "../../constants/api";
import { IBag } from "../../interfaces";

export const getProductsApi = async (): Promise<IBag[]> => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    return false;
  }
};

export const getProductByIdApi = async (id: string): Promise<IBag> => {
  try {
    const response = await axios.get(`${API_URL}/products?id=${id}`);
    return response.data;
  } catch (error) {
    return false;
  }
};
