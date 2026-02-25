import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../store/slices/wishlistSlice";

type Props = {
  product: any;
};

function WishlistButton({ product }: Props) {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.wishlist.items);

  const isWishlisted = items.some(
    (item: any) => item.productId === product.productId,
  );

  return (
    <button
      onClick={() => dispatch(toggleWishlist(product))}
      className={`text-xl transition ${
        isWishlisted ? "text-red-500" : "text-gray-400 hover:text-red-400"
      }`}
    >
      {isWishlisted ? "❤️" : "🤍"}
    </button>
  );
}

export default WishlistButton;
