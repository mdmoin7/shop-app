import { ProductType } from "../types";
import Card from "../../ui/components/Card";
import ProductStock from "./ProductStock";
import ImageWithFallback from "../../ui/components/ImageWithFallback";
import ProductPrice from "./ProductPrice";
import WishlistButton from "../../cart/components/WishlistButton";
import Rating from "./Rating";

type Props = {
  pdata: ProductType;
  btnClick: () => void;
};

function Product({ pdata: data, btnClick }: Props) {
  // const { currency } = useCurrency();
  // const currency = useSelector((state: RootState) => state.currency);

  return (
    <Card variant="elevated" padding="md" className="flex flex-col relative">
      {/* <Link
        to={`/details/${data.productId}`}
        className="group block overflow-hidden rounded-lg"
      > */}
      <div className="absolute top-8 right-8 z-30">
        <WishlistButton product={data} />
      </div>
      <ImageWithFallback
        src={data.productImage}
        alt={data.productName}
        className="
            w-full h-48 object-cover
            transition-transform duration-300
            group-hover:scale-105
          "
        containerClassName="w-full h-48"
        fallback={<span>📦 Image Unavailable</span>}
      />
      {/* </Link> */}

      <Card.Body>
        <div className="flex flex-col gap-2 mt-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-1">
            {data.productName}
          </h2>
          <Rating value={data.rating} size="sm" />
          <ProductPrice
            productPrice={Number(data.productPrice)}
            productSalePrice={Number(data.productSalePrice)}
          />
        </div>
      </Card.Body>

      <Card.Footer>
        <ProductStock stock={data.productStock} click={btnClick} />
      </Card.Footer>
    </Card>
  );
}

export default Product;
