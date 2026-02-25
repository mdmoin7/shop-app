type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

function ProductSearch({
  value,
  onChange,
  placeholder = "Search products...",
}: Props) {
  return (
    <div className="relative w-full md:w-80">
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full
          px-4 py-2
          text-sm
          rounded-md
          border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-800
          text-gray-800 dark:text-white
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-colors duration-200
        "
      />
    </div>
  );
}

export default ProductSearch;
