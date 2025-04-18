import axios from "axios";
const url = "https://fakestoreapi.com";
export const GetProducts = async () => {
  const response = await axios.get(`${url}/products`);
  if (response.status == "200") {
    
    return response.data;
  }
};
