import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectCartCount } from "../store/slices/cartSlice";

function CartBadge() {
  const navigate = useNavigate();
  const totalItems = useSelector(selectCartCount);
  return (
    <button
      onClick={() => navigate("/cart")}
      className="
        relative
        p-2
        rounded-md
        hover:bg-gray-100 dark:hover:bg-gray-800
        transition-colors duration-200
      "
    >
      {/* Cart Icon */}
      <svg
        className="h-6 w-6 text-gray-700 dark:text-gray-300"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6h13M7 13L5.4 5M10 21a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
      </svg>

      {/* Badge */}
      {totalItems > 0 && (
        <span
          className="
            absolute -top-1 -right-1
            bg-red-600 text-white
            text-xs font-semibold
            rounded-full
            px-1.5 py-0.5
            min-w-[18px]
            text-center
          "
        >
          {totalItems}
        </span>
      )}
    </button>
  );
}

export default CartBadge;
