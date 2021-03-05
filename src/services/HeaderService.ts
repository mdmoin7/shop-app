import Axios from "axios";

const getMenuItems = () => {
  return Axios.get("/menu.json");
};
const HeaderService = { getMenuItems };
export default HeaderService;
