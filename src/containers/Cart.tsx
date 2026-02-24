import { useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../store/slices/cartSlice";

import CartItemRow from "../components/CartItemRow";
import CartSummary from "../components/CartSummary";
import CartEmpty from "../components/CartEmpty";

function CartPage() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
      <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
        Shopping Cart
      </h1>

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Items */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <CartItemRow key={item.product.productId} item={item} />
          ))}
        </div>

        {/* Summary */}
        <CartSummary total={total} />
      </div>
    </div>
  );
}

export default CartPage;
