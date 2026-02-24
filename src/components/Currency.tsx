import { useDispatch } from "react-redux";
// import { useCurrency } from "../context/CurrencyContext";
import { changeCurrency } from "../store/slices/currencySlice";
import { useCurrency } from "../context/CurrencyContext";

function Currency() {
  const codes = ["INR", "USD", "EUR", "GBP"];
  const { currency, setCurrency: updateCurrency } = useCurrency();

  // every action must be dispatched using dispatch function
  // const dispatch = useDispatch();
  return (
    <div className="relative inline-block">
      <label className="sr-only" htmlFor="currency">
        Select Currency
      </label>

      <select
        id="currency"
        value={currency}
        onChange={(e) => {
          //</div>dispatch(changeCurrency(e.target.value))}
          updateCurrency(e.target.value);
        }}
        className="
          appearance-none
          px-4 py-2 pr-10
          text-sm font-medium
          rounded-md
          border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-800
          text-gray-700 dark:text-gray-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-colors duration-200
          cursor-pointer
        "
      >
        {codes.map((code) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>

      {/* Custom dropdown icon */}
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500 dark:text-gray-400">
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.148l3.71-3.917a.75.75 0 111.08 1.04l-4.24 4.48a.75.75 0 01-1.08 0l-4.24-4.48a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
}

export default Currency;
