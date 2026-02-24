// components/ImageWithFallback.tsx
import { ImgHTMLAttributes, useState } from "react";

type Props = {
  fallback?: React.ReactNode;
  containerClassName?: string;
} & ImgHTMLAttributes<HTMLImageElement>;

function ImageWithFallback({
  fallback,
  containerClassName = "",
  className = "",
  ...imgProps
}: Props) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`
          flex items-center justify-center
          bg-gray-100 dark:bg-gray-700
          text-gray-400 dark:text-gray-500
          text-sm font-medium
          ${containerClassName}
        `}
      >
        {fallback ?? "Image Unavailable"}
      </div>
    );
  }

  return (
    <img {...imgProps} onError={() => setError(true)} className={className} />
  );
}

export default ImageWithFallback;
