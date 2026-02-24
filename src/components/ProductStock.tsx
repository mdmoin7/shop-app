import Button from "./Button";

type Props = { stock: number; click: () => void };

function ProductStock({ stock, click }: Props) {
  const inStock = stock > 0;

  return (
    <div>
      {inStock ? (
        <Button
          fullWidth
          onClick={click}
          className="
            w-full
            px-4 py-2
            text-sm font-medium
            rounded-md
            bg-blue-600 hover:bg-blue-700 active:bg-blue-800
            text-white
            transition-colors duration-200
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
            dark:focus:ring-offset-gray-900
          "
        >
          Add to Cart
        </Button>
      ) : (
        <p className="text-sm font-medium text-red-500 dark:text-red-400">
          Out of Stock
        </p>
      )}
    </div>
  );
}

export default ProductStock;
