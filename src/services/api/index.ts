import axios from "axios";
import { API_URL } from "../../constants/api";

export const useRequest = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    return false;
  }
};
