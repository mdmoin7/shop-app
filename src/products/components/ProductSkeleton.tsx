function ProductSkeleton() {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 space-y-4 animate-pulse">
      {/* Image */}
      <div className="w-full h-48 bg-gray-300 dark:bg-gray-700 rounded-md" />

      {/* Title */}
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4" />

      {/* Price */}
      <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/3" />

      {/* Button */}
      <div className="h-9 bg-gray-300 dark:bg-gray-700 rounded-md w-full" />
    </div>
  );
}

export default ProductSkeleton;
