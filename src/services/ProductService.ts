import Axios from "axios";

const getProducts = () => {
  const endPoint =
    "https://raw.githubusercontent.com/mdmoin7/Random-Products-Json-Generator/master/products.json";
  return Axios.get(endPoint);
};

const ProductService = { getProducts };
export default ProductService;
