import React from "react";
import "./ProductPrice.css";

type Props = {
  productPrice: number;
  salePrice: number;
  code: string;
};

const ProductPrice: React.FC<Props> = (props) => {
  return (
    <div className="d-flex justify-content-between my-2">
      <span className="text-success">
        {props.code} {props.salePrice.toFixed(2)}
      </span>
      <span className="text-muted">
        <del>
          {props.code} {props.productPrice.toFixed(2)}
        </del>
      </span>
    </div>
  );
};
export default ProductPrice;
