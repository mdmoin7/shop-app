type Props = {
  value: number; // 0 - 5
  count?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onChange?: (value: number) => void;
};

function Rating({
  value,
  count,
  size = "md",
  interactive = false,
  onChange,
}: Props) {
  const stars = [1, 2, 3, 4, 5];

  const sizeClass =
    size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-lg";

  return (
    <div className="flex items-center gap-2">
      <div className={`flex ${sizeClass}`}>
        {stars.map((star) => {
          const filled = value >= star;
          const half = value >= star - 0.5 && value < star;

          return (
            <span
              key={star}
              onClick={() => interactive && onChange?.(star)}
              className={`cursor-${
                interactive ? "pointer" : "default"
              } transition-colors`}
            >
              {filled ? (
                <span className="text-yellow-400">★</span>
              ) : half ? (
                <span className="text-yellow-400">☆</span>
              ) : (
                <span className="text-gray-300 dark:text-gray-600">★</span>
              )}
            </span>
          );
        })}
      </div>

      {count !== undefined && (
        <span className="text-sm text-gray-500">
          {value.toFixed(1)} ({count})
        </span>
      )}
    </div>
  );
}

export default Rating;
