import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  selectCartItems,
  selectCartTotal,
} from "../store/slices/cartSlice";

import CartItemRow from "../components/CartItemRow";
import CartSummary from "../components/CartSummary";
import CartEmpty from "../components/CartEmpty";
import Button from "../components/Button";
import { toggleWishlist } from "../store/slices/wishlistSlice";

function CartPage() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const wishlistItems = useSelector((state: any) => state.wishlist.items);
  const dispatch = useDispatch();

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
      <div>
        <hr className="border-gray-200 dark:border-gray-700" />

        {wishlistItems.length > 0 && (
          <div className="pt-10 space-y-6">
            <p className="text-sm text-gray-500">
              Items you've saved for later.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item: any) => (
                <div
                  key={item.productId}
                  className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-4"
                >
                  <img
                    src={item.productImage}
                    alt={item.productName}
                    className="w-full h-40 object-cover rounded-md"
                  />

                  <div>
                    <h3 className="font-medium">{item.productName}</h3>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      fullWidth
                      size="sm"
                      onClick={() => {
                        dispatch(addItem(item));
                        dispatch(toggleWishlist(item));
                      }}
                    >
                      Move to Cart
                    </Button>

                    <button
                      onClick={() => dispatch(toggleWishlist(item))}
                      className="p-2 rounded-md hover:bg-red-50 dark:hover:bg-red-900/30
                         text-red-500 transition"
                      aria-label="Remove from wishlist"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
