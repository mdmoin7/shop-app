import { useMemo } from "react";
import { useCurrency } from "../context/CurrencyContext";

type Props = {
  productPrice: number;
  productSalePrice?: number | null;
  showDiscount?: boolean;
};

function ProductPrice({
  productPrice,
  productSalePrice,
  showDiscount = true,
}: Props) {
  // const currency = useSelector((state: RootState) => state.currency);
  const { currency, convert } = useCurrency();
  // Format price using Intl
  const formatter = useMemo(() => {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
    });
  }, [currency]);

  const isOnSale =
    productSalePrice !== undefined &&
    productSalePrice !== null &&
    productSalePrice < productPrice;

  const discountPercent = isOnSale
    ? Math.round(((productPrice - productSalePrice!) / productPrice) * 100)
    : 0;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {isOnSale ? (
        <>
          {/* Sale Price */}
          <span className="text-sm font-semibold text-green-600 dark:text-green-400">
            {formatter.format(convert(productSalePrice!))}
          </span>

          {/* Original Price */}
          <small className="text-xs line-through text-gray-500 dark:text-gray-400">
            {formatter.format(convert(productPrice))}
          </small>

          {/* Discount Badge */}
          {showDiscount && (
            <span className="text-xs font-medium bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">
              {discountPercent}% OFF
            </span>
          )}
        </>
      ) : (
        <span className="text-sm font-semibold text-gray-800 dark:text-white">
          {formatter.format(convert(productPrice))}
        </span>
      )}
    </div>
  );
}

export default ProductPrice;
