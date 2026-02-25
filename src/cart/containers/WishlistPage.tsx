import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router";
import ProductPrice from "../../products/components/ProductPrice";
import Button from "../../ui/components/Button";
import { addItem } from "../cartSlice";
import { toggleWishlist } from "../wishlistSlice";

function WishlistPage() {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.wishlist.items);

  const handleMoveToCart = (product: any) => {
    dispatch(addItem(product));
    dispatch(toggleWishlist(product));
  };

  if (!items.length) {
    return (
      <div className="py-20 text-center text-gray-500">
        Your wishlist is empty.
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-6">
      <h1 className="text-2xl font-semibold">Your Wishlist</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item: any) => (
          <div
            key={item.productId}
            className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-4"
          >
            <Link to={`/details/${item.productId}`}>
              <img
                src={item.productImage}
                alt={item.productName}
                className="w-full h-48 object-cover rounded-md"
              />
            </Link>

            <div className="space-y-1">
              <h3 className="font-medium">{item.productName}</h3>

              <ProductPrice
                productPrice={item.productPrice}
                productSalePrice={item.productSalePrice}
              />
            </div>

            <div className="flex gap-2">
              <Button fullWidth onClick={() => handleMoveToCart(item)}>
                Move to Cart
              </Button>

              <Button
                variant="outline"
                onClick={() => dispatch(toggleWishlist(item))}
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;
