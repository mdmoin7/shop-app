import {
  PropsWithChildren,
  ElementType,
  ComponentPropsWithoutRef,
} from "react";

type Variant = "elevated" | "outlined" | "flat";
type Padding = "sm" | "md" | "lg";

type CardProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  padding?: Padding;
  className?: string;
} & PropsWithChildren &
  Omit<ComponentPropsWithoutRef<T>, "as" | "className">;

function Card<T extends ElementType = "div">({
  as,
  variant = "elevated",
  padding = "md",
  className = "",
  children,
  ...rest
}: CardProps<T>) {
  const Component = as || "div";

  const base = "rounded-xl transition-all duration-200";

  const variants: Record<Variant, string> = {
    elevated:
      "bg-white dark:bg-gray-800 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700",
    outlined: "bg-transparent border border-gray-300 dark:border-gray-600",
    flat: "bg-gray-50 dark:bg-gray-900",
  };

  const paddings: Record<Padding, string> = {
    sm: "p-3",
    md: "p-5",
    lg: "p-8",
  };

  return (
    <Component
      className={`${base} ${variants[variant]} ${paddings[padding]} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
}

Card.Header = function CardHeader({ children }: PropsWithChildren) {
  return (
    <div className="mb-4 text-lg font-semibold text-gray-800 dark:text-white">
      {children}
    </div>
  );
};

Card.Body = function CardBody({ children }: PropsWithChildren) {
  return <div className="text-gray-600 dark:text-gray-300">{children}</div>;
};

Card.Footer = function CardFooter({ children }: PropsWithChildren) {
  return (
    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
      {children}
    </div>
  );
};

export default Card;
