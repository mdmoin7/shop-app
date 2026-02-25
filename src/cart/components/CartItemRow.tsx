import { useDispatch } from "react-redux";
import ProductPrice from "../../products/components/ProductPrice";
import Button from "../../ui/components/Button";
import ImageWithFallback from "../../ui/components/ImageWithFallback";
import { removeItem, decrementItem, addItem } from "../cartSlice";
import { toggleWishlist } from "../wishlistSlice";
type Props = {
  item: any; // keeping store untouched
};

function CartItemRow({ item }: Props) {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-4 items-start border-b border-gray-200 dark:border-gray-700 pb-6">
      {/* Thumbnail */}
      <div className="w-20 h-20 shrink-0">
        <ImageWithFallback
          src={item.product.productImage}
          alt={item.product.productName}
          className="w-full h-full object-cover rounded-md"
          containerClassName="w-20 h-20 rounded-md overflow-hidden"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex justify-between items-center gap-4">
        {/* Info */}
        <div className="space-y-1">
          <p className="font-medium text-gray-800 dark:text-white">
            {item.product.productName}
          </p>
          <div>
            <ProductPrice
              productPrice={Number(item.product.productPrice)}
              productSalePrice={Number(item.product.productSalePrice)}
              showDiscount={false}
            />
          </div>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              dispatch(toggleWishlist(item.product));
              dispatch(removeItem(item.product.productId));
            }}
          >
            Move to Wishlist
          </Button>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => dispatch(decrementItem(item.product.productId))}
          >
            −
          </Button>

          <span className="min-w-[24px] text-center">{item.quantity}</span>

          <Button
            size="sm"
            variant="outline"
            onClick={() => dispatch(addItem(item.product))}
          >
            +
          </Button>

          <Button
            size="sm"
            variant="ghost"
            onClick={() => dispatch(removeItem(item.product.productId))}
          >
            🗑️
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItemRow;
