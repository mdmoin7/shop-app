import { useDispatch } from "react-redux";
import { Link } from "react-router";
import ProductPrice from "../../products/components/ProductPrice";
import Button from "../../ui/components/Button";
import { clearCart } from "../cartSlice";

type Props = {
  total: number;
  hideButtons?: boolean;
};

function CartSummary({ total, hideButtons = false }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl space-y-6 h-fit">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
        Order Summary
      </h2>

      <div className="flex justify-between text-gray-700 dark:text-gray-300">
        <span>Subtotal</span>
        <ProductPrice productPrice={total} showDiscount={false} />
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 pt-4 flex justify-between font-semibold text-gray-900 dark:text-white">
        <span>Total</span>
        <ProductPrice productPrice={total} showDiscount={false} />
      </div>

      {!hideButtons && (
        <>
          <Button fullWidth size="lg" as={Link} to={"/checkout"}>
            Proceed to Checkout
          </Button>

          <Button
            fullWidth
            variant="ghost"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
        </>
      )}
    </div>
  );
}

export default CartSummary;
