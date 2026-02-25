import { useNavigate } from "react-router";
import Button from "../../ui/components/Button";

function CartEmpty() {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Your Cart is Empty
      </h1>
      <Button onClick={() => navigate("/products")}>Browse Products</Button>
    </div>
  );
}

export default CartEmpty;
